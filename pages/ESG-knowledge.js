
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ESG_Image from '@/public/ESGKnowledge.png';
import CardArticle from '@/components/CARD-Articles';
import Image from 'next/image';
import styles from '@/styles/ESG-pages.module.css';



function ESGKnowledge() {
    function GetArticles() {

        const [allArticles, setAllArticles] = useState([]);
      
        async function getArticle() {
           fetch('https://turnitgreen-03e15fdc97d7.herokuapp.com/get-all-articles', {
            method: "GET",
      
          }).then((res) => res.json()).then((data) => {
            setAllArticles(data.data)
          })
        }
        useEffect(() => {
          getArticle();
        }, []);
      
      
        return allArticles;
      }

      const Articles= GetArticles();
    const ESG_Knowledge_Articles = Articles.filter((article) => {
        if (article.ArticleType && article.ArticleType !== null && article.ArticleType !== undefined) {
            return article.ArticleType.includes('ESG Knowledge');
        }
        return false;
    });

    return (
        <>
            <div className={styles.ESG_Knowledge}>
                <Image src={ESG_Image} className={styles.StartImage} alt='HomeImage' />
                <div className={styles.ShortIntroduction_ESGKnowledge}>
                    <h1 className={styles.ESGKnowledge}>ESG Knowledge</h1><br />
                    Explore our comprehensive ESG Knowledge library, a rich resource dedicated to
                    the fundamentals of ESG (Environmental, Social, and Governance) and sustainable
                    regulations. Whether you're an expert or new to the field, you'll find valuable
                    insights, in-depth analyses, and up-to-date information on ESG principles,
                    regulations, directives, laws, and more. Our curated collection is designed
                    to help you build a solid understanding of ESG, empowering you to make informed
                    decisions in the ever-evolving world of sustainability.
                </div>
            </div>
            <div className={styles.Blog}>
                <CardArticle Articles={ESG_Knowledge_Articles} />
            </div>
        </>
    );
}

export default ESGKnowledge;
