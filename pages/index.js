import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import StartImage from "@/public/HomePageImage.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import { GetArticles } from "@/components/getArticles";
import { CSRDcalculator } from "@/components/CSRD-Calculator";
import CardArticle from "@/components/CARD-Articles";
import Head from "next/head";
import { Button } from "react-bootstrap";
import NewsletterSubmission from "@/components/Newsletter-Subscription";

function Home() {
  const Articles = GetArticles();

  const [showNewsletterForm, setShowNewsletterForm] = useState(false);

  const handleSubscribeClick = () => {
    setShowNewsletterForm(true);
  };

  const handleFormClose = () => {
    setShowNewsletterForm(false);
  };
  const sortedArticles = [...Articles].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

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
          <Button
            style={{
              backgroundColor: "#C1F036",
              color: "black",
              fontFamily: "Arial",
              boxShadow: "none",
              border: "none"
            }}
            onMouseEnter={(e) => e.target.style.boxShadow = "0 0 30px rgba(0, 0, 0, 0.5)"}
            onMouseLeave={(e) => e.target.style.boxShadow = "none"}
            onClick={handleSubscribeClick}
          >
            <strong>Subscribe to our monthly newsletter</strong>
          </Button>
        </div>
      </div>

      {showNewsletterForm && (
        <NewsletterSubmission onClose={handleFormClose} /> // Pass close function as a prop
      )}

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
            <CardArticle Articles={sortedArticles.slice(0, 6)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
