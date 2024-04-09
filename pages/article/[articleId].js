import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getServerSideProps({ params }) {
  // Fetch article type based on the articleId, you'll need to implement this logic
  const articleId = params.articleId;
  // Example: Fetch article type from your API based on articleId

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get-article-ids/ESG`
  );

  const { status, data } = await response.json();

  if (status === "ok") {
    // Generate the paths based on the fetched article IDs
    const esg = data.find((Id) => articleId === Id);
    if(esg) {
        return{
            props:{
                articleType: 'esg',
                articleId
            }
        }
    }else{
        return {
            props:{
                articleType: 'digitalisation',
                articleId
            }
        }
    }
  }
}

function CurrentPage({ articleType, articleId }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired page
    router.push(`/${articleType}/article/${articleId}`);
  }, []);

  // This component will redirect to '/desired-page' as soon as it mounts

  return <div>{/* You can render content here if needed */}</div>;
}

export default CurrentPage;
