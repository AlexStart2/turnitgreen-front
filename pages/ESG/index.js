import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ESG_Image from "@/public/ESGKnowledge.png";
import CardArticle from "@/components/CARD-Articles";
import Image from "next/image";
import styles from "@/styles/ESG-pages.module.css";
import { GetArticles } from "@/components/getArticles";

function ESG() {
  const ESG_Articles = GetArticles().filter((article)=>article.ArticleType === "ESG");

  return (
    <>
      <div className={styles.ESG_Knowledge}>
        <Image src={ESG_Image} className={styles.StartImage} alt="ESG Image" />
        <div className={styles.ShortIntroduction_ESGKnowledge}>
          <h1 className={styles.ESGKnowledge}>
            Environmental, social, and governance
          </h1>
          <br />
          Unlocking potential, responsibly.
        </div>
      </div>

      <div className={styles.Blog}>
        <CardArticle
          Articles={ ESG_Articles }
        />
      </div>
    </>
  );
}

export default ESG;
