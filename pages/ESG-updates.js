
import styles from '@/styles/ESG-pages.module.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ESG_Updates_Image from '@/public/ESGUpdates.png';
import CardArticle from '@/components/CARD-Articles';
import Image from 'next/image';
import { GetArticles } from '@/components/getArticles';




function ESG_Updates() {


    const Articles = GetArticles();
    const ESG_Updates_Articles = Articles.filter((article) => {
        if (article.ArticleType && article.ArticleType !== null && article.ArticleType !== undefined) {
            return article.ArticleType.includes('ESG Updates');
        }
        return false;
    });

    return (
        <>
            <div className={styles.ESG_Knowledge}>
                <Image src={ESG_Updates_Image} className={styles.StartImage} alt='HomeImage' />
                <div className={styles.ShortIntroduction_ESGKnowledge}>
                    <h1 className='ESG_Updates'>ESG Updates</h1><br />
                    Stay ahead of the curve with our ESG Updates section, where we shine a light on
                    the most current and pertinent regulatory insights and trends in the world of
                    sustainability. In a rapidly changing landscape, our team of experts diligently
                    tracks the latest developments, ensuring you're always in the know about the
                    newest ESG regulations, emerging trends, and best practices. Keep your finger on
                    the pulse of sustainability with our timely updates and valuable perspectives.
                </div>
            </div>

            <div className={styles.Blog}>
                <CardArticle Articles={ESG_Updates_Articles} />

            </div>
        </>
    );
}

export default ESG_Updates;
