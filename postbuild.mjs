import fs from 'node:fs';
import {load} from 'cheerio';
const origin=process.env.SITE_URL||'https://blog.jsr.wtf';
const base=(process.env.BASE_PATH||'/').replace(/\/$/,'');
function rewrite(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const file=dir+'/'+entry.name;if(entry.isDirectory())rewrite(file);else if(file.endsWith('.html')){const $=load(fs.readFileSync(file,'utf8'));$('.prose [href],.prose [src]').each((i,n)=>{for(const attr of ['href','src']){const v=$(n).attr(attr);if(v?.startsWith('/')&&!v.startsWith('//'))$(n).attr(attr,base+v);}});fs.writeFileSync(file,$.html());}}}
rewrite('dist');
const feed=load(fs.readFileSync('dist/rss/index.xml','utf8'),{xml:true});
for(const item of feed('item').toArray()){
 const el=feed(item),url=new URL(el.find('link').text()),slug=url.pathname.slice(base.length).replace(/^\/|\/$/g,'');
 const page=load(fs.readFileSync(`dist/${slug}/index.html`,'utf8'));
 const body=page('.prose');body.find('[src],[href]').each((i,n)=>{for(const attr of ['src','href']){const v=page(n).attr(attr);if(v?.startsWith('/'))page(n).attr(attr,new URL(v,origin).href);}});
 el.find('guid[isPermaLink="true"]').remove();
 el.append('<content:encoded><![CDATA['+body.html().replace(/\]\]>/g,']]]]><![CDATA[>')+']]></content:encoded>');
}
feed('rss').attr('xmlns:content','http://purl.org/rss/1.0/modules/content/');
fs.writeFileSync('dist/rss/index.html',feed.xml());
fs.writeFileSync('dist/rss.xml',feed.xml());
fs.writeFileSync('dist/.nojekyll','');
console.log('Full-text RSS written at /rss/ and /rss.xml');
