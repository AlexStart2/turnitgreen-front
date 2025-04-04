import React from "react";
import Head from "next/head";
import Image from "next/image";
import { formatDate } from "@/components/formatDate";
import styles from "@/styles/article.module.css";
import facebookIcon from "@/public/icons8-facebook-100.png";
import twitterIcon from "@/public/icons8-twitterx-100.png";
import linkedInIcon from "@/public/icons8-linkedin-100.png";
import { useRouter } from "next/router";

function Article({ articleData }) {
  const router = useRouter();
  const postUrl = encodeURI("https://turnitgreen.eu" + router.asPath);
  return (
    <>
      <Head>
        <title>{articleData.Title}</title>
        <meta
          name="description"
          content={articleData.Summary || articleData.Content.substring(0, 400)}
        />
        <meta property="og:title" content={articleData.Title} />
        <meta
          property="og:description"
          content={articleData.Summary || articleData.Content.substring(0, 400)}
        />
        <meta
          property="og:image"
          content={`https://drive.google.com/uc?id=${articleData.ImageId}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articleData.Title} />
        <meta
          name="twitter:description"
          content={articleData.Summary || articleData.Content.substring(0, 400)}
        />
        <meta
          name="twitter:image"
          content={`https://drive.google.com/uc?id=${articleData.ImageId}`}
        />
      </Head>

      <div key={articleData._id} className={styles.ArticlePage}>
        <Image
          className={styles.ArticlePageImage}
          src={`https://drive.google.com/uc?id=${articleData.ImageId}`}
          alt={articleData.Title}
          width={4000}
          height={1000}
          priority={1}
        />
        <div className={styles.ArticlePageTitle}>
          <p className={styles.ArticleTitle}>{articleData.Title}</p>
        </div>
        <div className={styles.DisplayArticleFlex}>
          <div className={styles.ArticlePageTime}>
            {formatDate(articleData.createdAt)}
          </div>
          <div className={styles.ArticleAndHr}>
            <div
              className={styles.ArticlePageContent}
              dangerouslySetInnerHTML={{ __html: articleData.Content.replace(/<p/g, '<p style="margin-bottom: 0;"') }}
            ></div>
            <hr className={styles.ArticleEnd} />
            <div className={styles.option_btn_container}>
              <div className={styles.share_btn_container}>
                <a
                  href={`https://www.facebook.com/sharer.php?u=${postUrl}`}
                  className={styles.facebook_btn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={facebookIcon} alt="Share to Facebook" />
                </a>
                <a
                  href={`https://twitter.com/share?url=${postUrl}&text=${
                    articleData.Title
                  }&media=${`https://drive.google.com/uc?id=${articleData.ImageId}`}`}
                  className={styles.twitter_btn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={twitterIcon} alt="Share to Twitter" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}`}
                  className={styles.linkedin_btn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={linkedInIcon} alt="Share to Linkedin" />
                </a>
              </div>
              {articleData.source ? (
                <a
                  href={articleData.source}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.ToSource}
                >
                  Source
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
