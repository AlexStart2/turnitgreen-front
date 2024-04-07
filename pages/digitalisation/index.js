import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ESG_Image from "@/public/Digitalisation.jpg";
import CardArticle from "@/components/CARD-Articles";
import Image from "next/image";
import styles from "@/styles/ESG-pages.module.css";
import { GetArticles } from "@/components/getArticles";
import { useState } from "react";

function Digitalisation() {
  const Articles = GetArticles();
  const [selectedValue, setSelectedValue] = useState("Digitalisation"); 
  const Digi_Articles = Articles.filter((article) => {
    if (
      article.ArticleType &&
      article.ArticleType !== null &&
      article.ArticleType !== undefined
    ) {
      return article.ArticleType.includes(selectedValue);
    }
    return false;
  });



  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className={styles.ESG_Knowledge}>
        <Image src={ESG_Image} className={styles.StartImage} alt="ESG Image" />
        <div className={styles.ShortIntroduction_ESGKnowledge}>
          <h1 className={styles.ESGKnowledge}>
          Digitalization
          </h1>
          <br />
          Thrive in the future, responsibly.
        </div>
      </div>

      <div className={styles.Blog}>
        <CardArticle
          Articles={ Digi_Articles }
        />
      </div>
    </>
  );
}

export default Digitalisation;
