import styles from '@/styles/Home.module.css';
import React from 'react';
import StartImage from '@/public/HomePageImage.png';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import { GetArticles } from '@/components/getArticles';
import { CSRDcalculator } from '@/components/CSRD-Calculator';
import CardArticle from '@/components/CARD-Articles';




function Home() {

  const RecentArticles = GetArticles().slice(0, 6);

  return (
    <>

      <div className={styles.StartPage}>
        <Image src={StartImage} className={styles.StartImage} priority={true} alt='HomeImage' />
        <div className={styles.ShortIntroduction}>
          <h1 className={styles.TurnItGreen}>Turn<span className={styles.It}>It</span><span className={styles.Green}>Green</span></h1><br />
          Stay ahead of the curve with expert insights on the latest ESG developments.
          Our dedicated team of experts is your compass through the intricate regulatory
          landscape. We're committed to making a positive impact on the business world
          by helping companies navigate and understand the complex realm of ESG.
          <br /><br />
          <strong>Stay informed, stay compliant, and stay sustainable.</strong>
        </div>
      </div>

      <div className={styles.HomePage_Content}>
        <div className={styles.CSRDcalculator}>
          <div className={styles.Title_CSRD}>
            <h1 className={styles.CSRD_Title}>CSRD/ESRS eligibility calculator</h1>
          </div>
          <CSRDcalculator />
        </div>


        <div className={styles.Recent}>
          <div className={styles.T_Recent}>Recent</div>
          <div className={styles.Blog}>
            <CardArticle Articles={RecentArticles} />
          </div>
        </div>
      </div>



    </>
  );
}

export default Home;
