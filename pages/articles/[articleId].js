import React from 'react';
import Head from 'next/head';

export async function getStaticProps({ params }) {
  const { articleId } = params;

  // Fetch article data from your API
  const response = await fetch(`http://localhost:5000/get-article/${articleId}`);
  const { status, data, message } = await response.json();

  if (status === "ok") {
    return {
      props: {
        articleData: data,
      },
      revalidate: 60, // Automatically re-render every 60 seconds
    };
  } else {
    return {
      notFound: true,
    };
  }
}


function Article({ articleData }) {
    const { articleId } = useParams();
  
    const articleData = articleData.find(data => data._id === articleId)
  
  
    const postUrl = encodeURI(window.location.href);
  
    return (
      <>
        <div key={articleData._id} className='ArticlePage'>
          <img className='ArticlePageImage' src={`https://drive.google.com/uc?id=${articleData.ImageId}`} alt={articleData.Title} />
          <div className='ArticlePageTitle'>
            <p className='ArticleTitle'>{articleData.Title}</p>
          </div>
          <div className='DisplayArticleFlex'>
            <div className='ArticlePageTime'>{formatDate(articleData.createdAt)}</div>
            <div className='ArticleAndHr'>
              <div className='ArticlePageContent' dangerouslySetInnerHTML={{ __html: articleData.Content }}></div>
              <hr className='ArticleEnd' />
              <div className='option-btn-container'>
                <div className='share-btn-container'>
  
  
                  <a href={`https://www.facebook.com/sharer.php?u=${postUrl}`} className='facebook-btn' target='_blank' rel='noreferrer'><img src={facebookIcon} alt='Share to Facebook' /></a>
                  <a href={`https://twitter.com/share?url=${postUrl}&text=${articleData.Title}&media=${`https://drive.google.com/uc?id=${articleData.ImageId}`}`} className='twitter-btn' target='_blank' rel='noreferrer'><img src={twitterIcon} alt='Share to Twitter' /></a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=Myawensomewebsite`} className='linkedin-btn' target='_blank' rel='noreferrer'><img src={linkedInIcon} alt='Share to Linkedin' /></a>
                </div>
                {articleData.source ? <a href={articleData.source} target='_blank' rel='noreferrer' className='ToSource'>Source</a> : <></>}
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
  
  export default Article;