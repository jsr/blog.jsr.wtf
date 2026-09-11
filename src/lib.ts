import {getCollection} from 'astro:content';
export const href=(p='')=>`${import.meta.env.BASE_URL.replace(/\/$/,'')}/${p.replace(/^\//,'')}`;
export const tagSlug=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const posts=async()=>(await getCollection('posts')).filter(p=>!p.data.draft).sort((a,b)=>b.data.date.localeCompare(a.data.date));
export const dateLabel=(s:string)=>new Date(s+'T12:00:00Z').toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'});
