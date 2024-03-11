import styles from "@/styles/Home.module.css";
import React from "react";
import StartImage from "@/public/HomePageImage.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import { GetArticles } from "@/components/getArticles";
import { CSRDcalculator } from "@/components/CSRD-Calculator";
import CardArticle from "@/components/CARD-Articles";
import Head from "next/head";

function Home() {
  const RecentArticles = GetArticles().slice(0, 6);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Navigate the evolving landscape of ESG and digitalization with expert
          guidance. Our dedicated team of specialists provides insights on the
          latest developments in both areas, helping you stay ahead of the
          curve. We are committed to empowering your business to navigate the
          complexities of ESG and leverage the power of digitalization for
          positive impact. Empowering businesses to make a positive difference."
        />
      </Head>

      <div className={styles.StartPage}>
        <Image
          src={StartImage}
          className={styles.StartImage}
          priority={true}
          alt="HomeImage"
        />
        <div className={styles.ShortIntroduction}>
          <h1 className={styles.TurnItGreen}>
            Turn<span className={styles.It}>It</span>
            <span className={styles.Green}>Green</span>
          </h1>
          <br />
          Navigate the evolving landscape of ESG and digitalization with expert
          guidance. Our dedicated team of specialists provides insights on the
          latest developments in both areas, helping you stay ahead of the
          curve. We are committed to empowering your business to navigate the
          complexities of ESG and leverage the power of digitalization for
          positive impact.
          <br />
          <br />
          <strong>Empowering businesses to make a positive difference.</strong>
        </div>
      </div>

      <div className={styles.HomePage_Content}>
        <div className={styles.CSRDcalculator}>
          <div className={styles.Title_CSRD}>
            <h1 className={styles.CSRD_Title}>
              CSRD/ESRS eligibility calculator
            </h1>
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
