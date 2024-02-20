
// const EXTERNAL_DATA_URL =
//   "https://turnitgreen-03e15fdc97d7.herokuapp.com/get-article-ids";

export const revalidate = 3600;

// export async function getServerSideProps() {
//   try {
//     // Fetch article IDs from the external data URL
//     const request = await fetch(EXTERNAL_DATA_URL);
//     const { status, data } = await request.json();

//     if (status !== "ok") {
//       throw new Error("Failed to fetch article IDs");
//     }

//     const post = data.map((articleId) => ({
//       url: `https://www.turnitgreen.eu/article/${articleId}`,
//       lastModified: new Date().toISOString(),
//       priority: 0.5,
//     }));

//     const sitemapEntries = [
//       {
//         url: "https://www.turnitgreen.eu",
//         lastModified: new Date().toISOString(),
//         priority: 1,
//       },
//       {
//         url: "https://www.turnitgreen.eu/ESG-knowledge",
//         lastModified: new Date().toISOString(),
//         priority: 1,
//       },
//       {
//         url: "https://www.turnitgreen.eu/ESG-updates",
//         lastModified: new Date().toISOString(),
//         priority: 1,
//       },
//       {
//         url: "https://www.turnitgreen.eu/Search",
//         lastModified: new Date().toISOString(),
//         priority: 1,
//       },
//       {
//         url: "https://www.turnitgreen.eu/about-us",
//         lastModified: new Date().toISOString(),
//         priority: 0.1,
//       },
//       ...post,
//     ];

//     return {
//       props: {
//         sitemapEntries,
//       },
//     };
//   } catch (error) {
//     console.error("Error generating sitemap:", error.message);
//     return {
//       props: {
//         sitemapEntries: [],
//       },
//     };
//   }
// }

// export default function Sitemap({ sitemapEntries }) {
//   const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${sitemapEntries
//         .map(
//           ({ url, lastModified, priority }) => `
//         <url>
//           <loc>${url}</loc>
//           <lastmod>${lastModified}</lastmod>
//           <priority>${priority}</priority>
//         </url>
//       `
//         )
//         .join("")}
//     </urlset>`;

//   return <>{sitemapXml}</>;
// }

const EXTERNAL_DATA_URL = 'https://turnitgreen-03e15fdc97d7.herokuapp.com/get-article-ids';

const homepage = "https://www.turnitgreen.eu/";

function generateSiteMap({data}) {

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${homepage}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.00</priority>
      </url>
      ${data.map((item) => {
          return (
            `<url>
              <loc>${homepage}article/${item}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.50</priority>
            </url>
          `
          );
        })
        .join("")}
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  const blogs = await fetch(EXTERNAL_DATA_URL);
  const data = await blogs.json();
  const sitemap = generateSiteMap(data);

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}