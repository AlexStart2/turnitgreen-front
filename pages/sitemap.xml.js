// pages/sitemap.xml.js

const EXTERNAL_DATA_URL = 'https://turnitgreen-03e15fdc97d7.herokuapp.com/get-article-ids';

function generateSiteMap(articleIds) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- We manually set the base URL -->
     <url>
       <loc>https://www.turnitgreen.eu/</loc>
     </url>
     ${articleIds
       .map((articleId) => {
         return `
       <url>
           <loc>${`https://www.turnitgreen.eu/article/${articleId}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // This component doesn't render anything directly.
  // All the logic is in getServerSideProps.
}

export async function getServerSideProps({ res }) {
  try {
    // Fetch article IDs from the external data URL
    const request = await fetch(EXTERNAL_DATA_URL);
    const { status, data } = await request.json();

    if (status !== 'ok') {
      throw new Error('Failed to fetch article IDs');
    }

    // We generate the XML sitemap with the article IDs
    const sitemap = generateSiteMap(data);

    res.setHeader('Content-Type', 'text/xml');
    // Send the XML sitemap to the browser
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error('Error generating sitemap:', error.message);
    res.statusCode = 500;
    res.end('Error generating sitemap');
  }

  // Return an empty object as props (this is required)
  return {
    props: {},
  };
}

export default SiteMap;
