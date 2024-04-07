
import React from 'react';
import Article from '@/components/Article';

export async function getStaticPaths() {
  // Fetch the list of article IDs from your API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get-article-ids/Governance`
  );
  const { status, data, message } = await response.json();

  if (status === "ok") {
    // Generate the paths based on the fetched article IDs
    const paths = data.map((articleId) => ({
      params: { articleId },
    }));

    return {
      paths,
      fallback: "blocking", // 'blocking' allows Next.js to serve a static version while generating new pages
    };
  } else {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params }) {
  const { articleId } = params;

  // Fetch article data from your API based on the articleId
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get-article/${articleId}`
  );
  const { status, data, message } = await response.json();

  if (status === "ok") {
    return {
      props: {
        sitemap: {
          // Add the sitemap property to the returned object
          paths: ["/"], // Include the base URL in the sitemap
          // You can also specify other dynamic pages to include here
        },
        articleData: data,
      },
      revalidate: 600, // Automatically re-render every 600 seconds
    };
  } else {
    return {
      notFound: true,
    };
  }
}


function Governance_Page({ articleData }) {
  return (
    <>
      <Article articleData={articleData} />
    </>
  );
}

export default Governance_Page;
