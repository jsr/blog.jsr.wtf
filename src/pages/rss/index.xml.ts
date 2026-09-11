import rss from '@astrojs/rss';
import {posts,href} from '../../lib';
export async function GET(context){return rss({title:'wtf, jared',description:'Strategies for enterprise software, open source, and selling to developers',site:context.site,items:(await posts()).map(p=>({title:p.data.title,description:p.data.description,pubDate:new Date(p.data.date),link:href(p.data.slug+'/'),customData:`<guid isPermaLink="false">${p.data.guid}</guid>`})),});}
