import {defineCollection,z} from 'astro:content';
import {glob} from 'astro/loaders';
export const collections={posts:defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/posts'}),schema:z.object({title:z.string(),slug:z.string(),date:z.string(),displayDate:z.string(),modified:z.string(),description:z.string(),tags:z.array(z.string()),image:z.string(),guid:z.string(),draft:z.boolean().default(false)})})};
