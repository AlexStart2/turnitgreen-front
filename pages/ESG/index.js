import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ESG_Image from "@/public/ESGKnowledge.png";
import CardArticle from "@/components/CARD-Articles";
import Image from "next/image";
import styles from "@/styles/ESG-pages.module.css";
import { GetArticles } from "@/components/getArticles";
import { useState } from "react";

function ESG() {
  const Articles = GetArticles();
  const [selectedValue, setSelectedValue] = useState("ESG"); // Initial value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const ESG_Articles = Articles.filter((article) => {
    if (
      article.ArticleType &&
      article.ArticleType !== null &&
      article.ArticleType !== undefined
    ) {
      return article.ArticleType.includes(selectedValue);
    }
    return false;
  });

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

      <div className={styles.BoxFilter}>
        <div className={styles.filterBox}>
          Filter by:
          <select
            className={styles.filter}
            value={selectedValue}
            onChange={handleChange}
          >
            <option value="ESG">All</option>
            <option
              value="ESG Knowledge"
              title="A comprehensive library of resources where you'll find in-depth information, explanations, and guidance on a variety of topics."
            >
              Knowledge Hub
            </option>
            <option
              value="ESG Updates"
              title="A section dedicated to providing the latest news, trends, and analysis, keeping you informed about important developments in the field."
            >
              Recent Updates
            </option>
          </select>
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
