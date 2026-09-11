export function GET(){return new Response(process.env.PRODUCTION==='true'?'User-agent: *\nAllow: /\nSitemap: https://blog.jsr.wtf/sitemap.xml\n':'User-agent: *\nDisallow: /\n');}
