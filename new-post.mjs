import fs from 'node:fs';import {randomUUID} from 'node:crypto';
const title=process.argv.slice(2).join(' ').trim();if(!title)throw Error('Usage: node new-post.mjs "Essay title"');
const slug=title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');if(!slug)throw Error('Title must include letters or numbers');
const now=new Date().toISOString();const data={title,slug,date:now,displayDate:now.slice(0,10),modified:now,description:'Add a short summary.',tags:[],image:'',guid:randomUUID(),draft:true};
const file=`src/content/posts/${slug}.md`;fs.writeFileSync(file,'---\n'+Object.entries(data).map(([k,v])=>`${k}: ${JSON.stringify(v)}`).join('\n')+'\n---\n\nWrite your essay here.\n',{flag:'wx'});console.log(file);
