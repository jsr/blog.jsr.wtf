// Public content only. Run from this directory; never reads Ghost credentials.
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {load} from 'cheerio';
import Turndown from 'turndown';
const origin='https://blog.jsr.wtf';
for(const p of ['src/content/posts','src/data','public/media','evidence/pages']) fs.mkdirSync(p,{recursive:true});
const get=url=>execFileSync('curl',['-fsSL','--retry','2',url],{maxBuffer:30*1024*1024});
const assets={};
function asset(url){
  url=new URL(url,origin).href;
  if(assets[url]) return assets[url];
  const u=new URL(url); let dest;
  if(u.hostname===new URL(origin).hostname && u.pathname.startsWith('/content/images/')) dest=u.pathname;
  else dest='/media/'+createHash('sha256').update(url).digest('hex').slice(0,16)+(path.extname(u.pathname)||'.jpg');
  fs.mkdirSync(path.dirname('public'+dest),{recursive:true});
  fs.writeFileSync('public'+dest,get(url)); assets[url]=dest; return dest;
}
const feed=load(fs.readFileSync('evidence/rss.xml','utf8'),{xml:true});
const td=new Turndown({headingStyle:'atx',codeBlockStyle:'fenced'});
// Keep existing heading fragment IDs and image captions intact in Markdown.
td.keep(['figure','figcaption','iframe','table']);
td.addRule('heading-id',{filter:n=>/^H[1-6]$/.test(n.nodeName)&&n.hasAttribute('id'),replacement:(content,n)=>`\n\n<a id="${n.getAttribute('id')}"></a>\n\n${'#'.repeat(Number(n.nodeName[1]))} ${content}\n\n`});
const records=[];
for(const item of feed('item').toArray()){
  const el=feed(item), url=el.find('link').text(), slug=new URL(url).pathname.split('/').filter(Boolean).join('/');
  const raw=get(url).toString(); fs.writeFileSync(`evidence/pages/${slug}.html`,raw);
  const $=load(raw), body=$('.gh-content').first();
  if(!body.length) throw Error('Missing body: '+url);
  const originalText=body.text().replace(/\s+/g,' ').trim();
  const originalIds=body.find('[id]').map((i,n)=>$(n).attr('id')).get();
  body.find('img').each((i,n)=>{const img=$(n);img.attr('src',asset(img.attr('src')));img.removeAttr('srcset').removeAttr('sizes').attr('loading','lazy');});
  body.find('a[href]').each((i,n)=>{const a=$(n),u=new URL(a.attr('href'),url);if(u.origin===origin)a.attr('href',u.pathname+u.search+u.hash);});
  const hero=$('.gh-feature-image').attr('src');
  const data={title:$('h1.article-title').text(),slug,date:$('meta[property="article:published_time"]').attr('content'),displayDate:$('time.byline-meta-date').attr('datetime'),modified:$('meta[property="article:modified_time"]').attr('content'),description:$('meta[property="og:description"]').attr('content').replace(/\s+/g,' ').trim(),tags:el.find('category').map((i,n)=>feed(n).text()).get(),image:hero?asset(hero):'',guid:el.find('guid').text(),draft:false};
  fs.writeFileSync(`src/content/posts/${slug}.md`,'---\n'+Object.entries(data).map(([k,v])=>`${k}: ${JSON.stringify(v)}`).join('\n')+'\n---\n\n'+td.turndown(body.html())+'\n');
  records.push({url,...data,originalText,originalIds}); console.log('Imported '+slug);
}
const author=load(fs.readFileSync('evidence/author.html','utf8'));
fs.writeFileSync('src/data/author.json',JSON.stringify({name:'Jared Rosoff',bio:author('meta[name="description"]').attr('content'),image:asset(author('.author-profile-pic').attr('src')),location:author('.author-profile-location').text()},null,2));
fs.writeFileSync('evidence/manifest.json',JSON.stringify({fetchedAt:new Date().toISOString(),records,assets},null,2));
// Preserve feed item GUIDs and full original feed bodies, with copied images.
for(const img of feed('image > url').toArray()) feed(img).text(origin+asset(feed(img).text()));
fs.writeFileSync('src/data/legacy-feed.json',JSON.stringify(records.map(r=>({slug:r.slug,guid:r.guid})),null,2));
console.log(`${records.length} posts; ${Object.keys(assets).length} local assets`);
