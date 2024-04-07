import isTokenExpired from "@/components/token-expired";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Form, Button } from "react-bootstrap";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArticleTypes } from "@/components/ArticleTypes";
import { formatDate } from "@/components/formatDate";
import facebookIcon from "@/public/icons8-facebook-100.png";
import linkedInIcon from "@/public/icons8-linkedin-100.png";
import twitterIcon from "@/public/icons8-twitterx-100.png";
import CardArticleCss from "@/styles/CARD-Articles.module.css";
import fullArticle from "@/styles/article.module.css";
import styles from "@/styles/CARD-Articles.module.css";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

function Sent() {
  const router = useRouter();
  const token = Cookies.get("authToken");

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [inputImage, setInputImage] = useState(null);
  const [articleType, setArticleType] = useState("");
  const [category, setCategory] = useState("");
  const [inputNumber, setInputNumber] = useState(5);
  const [source, setSource] = useState("");
  const [date, setDate] = useState(formatDate(new Date()));
  const [addSource, setAddSource] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (token) {
      if (isTokenExpired(token)) {
        router.push("/auth/signin");
      }
    } else {
      router.push("/auth/signin");
    }
  }, []);

  const covertToBase64 = (value) => {
    setInputImage(value.target.files[0]);
    var reader = new FileReader();
    reader.readAsDataURL(value.target.files[0]);
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData();
    formData.append("inputTitle", title);
    formData.append("inputContent", content);
    formData.append("image", inputImage);
    formData.append("number", inputNumber);
    formData.append("ArticleType", articleType);
    if (addSource) formData.append("source", source);
    else formData.append("source", "");
    formData.append("category", category);
    formData.append("createdAt", date);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/upload-article`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (response.status === 401) {
        alert("You are not authorized/your token is expired, sign in please");
        router.push("/auth/signin");
      } else if (response.status === 200) {
        alert("Article was posted successfully");
      }

      if (!response.ok) {
        alert('Failed to submit article');
        setLoading(false);
        throw new Error("Failed to submit article");
      }
    } catch (error) {
      console.error("Error submitting article:", error.message);
      alert('Failed to submit article');
      // Handle error (e.g., show an error message to the user)
    }
    setLoading(false);
  };

  const SetNrLine = (event) => {
    setInputNumber(event.target.value);
    NrLine(event.target.value, "content_posting");
  };

  const NrLine = (nr, id) => {
    document.getElementById(id).style.webkitLineClamp = nr;
  };

  return (
    <div className="py-5 pb-lg-4">
      <Container>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Form.Group controlId="title">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="content">
            <Form.Label>Content:</Form.Label>
            <Editor onChange={setContent} />
          </Form.Group>

          <Form.Group controlId="addSource">
            <Form.Check
              type="checkbox"
              label="Add source"
              checked={addSource}
              onChange={(event) => setAddSource(event.target.checked)}
            />
            {addSource && (
              <Form.Group controlId="source">
                <Form.Label>Source:</Form.Label>
                <Form.Control
                  type="text"
                  value={source}
                  onChange={(e) => {
                    setSource(e.target.value);
                  }}
                />
              </Form.Group>
            )}
          </Form.Group>

          <Form.Group controlId="inputNumber">
            <Form.Label>Number of lines:</Form.Label>
            <Form.Control
              type="number"
              value={inputNumber}
              onChange={SetNrLine}
              required
            />
          </Form.Group>

          <Form.Group controlId="articleType">
            <Form.Label>Article Type:</Form.Label>
            <Form.Control
              as="select"
              value={articleType}
              onChange={(e) => setArticleType(e.target.value)}
              required
            >
              <option value="">Select article type</option>
              {ArticleTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.value}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          {articleType &&
            articleType !== "Consumer Protection" &&
            articleType !== "ESG" && (
              <Form.Group controlId="category">
                <Form.Label>Category:</Form.Label>
                <Form.Control
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  disabled={!articleType}
                  required
                >
                  <option value="">Select category</option>
                  {ArticleTypes.find(
                    (type) => type.value === articleType
                  ).categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            )}

          <Form.Group controlId="image">
            <Form.Label>Image:</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={covertToBase64}
              required
            />
          </Form.Group>

          <Form.Group controlId="date">
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className=" w-25 "
            />
          </Form.Group>

          <Button
            type="submit"
            className=" m-4 w-25 text-black"
            style={{
              backgroundColor: "white",
              color: "black",
              borderColor: "#c1f036",
            }}
            disabled={loading}
          >
            {loading ? "Posting..." : "Post"}
          </Button>
          {loading && (
        <div className={styles.custom_loader} style={{ position:'sticky', top: '50%', left: '50%' }}></div>
      )}
        </Form>
      </Container>

      <div className={CardArticleCss.Articles} style={{ position:'relative', top: '50%', left: '50%' }}>
        <div className={CardArticleCss.img_container}>
          {imagePreview && (
            <img
              src={imagePreview}
              alt={title}
              className={CardArticleCss.ArticlesImages}
            />
          )}
        </div>
        <div className={CardArticleCss.ArticleCardText}>
          <h1 className={CardArticleCss.Title}>{title}</h1>
          <div
            className={CardArticleCss.Content}
            id="content_posting"
            style={{ lineClamp: "5" }}
            dangerouslySetInnerHTML={{ __html: content + "..." }}
          ></div>
        </div>
        <div className={CardArticleCss.ContentDate}>{formatDate(date)}</div>
      </div>

      <div className={fullArticle.ArticlePage}>
        <img className={fullArticle.ArticlePageImage} src={imagePreview} />
        <div className={fullArticle.ArticlePageTitle}>
          <p className={fullArticle.ArticleTitle}>{title}</p>
        </div>
        <div className={fullArticle.DisplayArticleFlex}>
          <div className={fullArticle.ArticlePageTime}>{formatDate(date)}</div>
          <div className={fullArticle.ArticleAndHr}>
            <div
              className={fullArticle.ArticlePageContent}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            <hr className={fullArticle.ArticleEnd} />
            <div className={fullArticle.option_btn_container}>
              <div className={fullArticle.share_btn_container}>
                <a
                  className={fullArticle.facebook_btn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={facebookIcon} alt="Share to Facebook" />
                </a>
                <a
                  className={fullArticle.twitter_btn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={twitterIcon} alt="Share to Twitter" />
                </a>
                <a
                  className={fullArticle.linkedin_btn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={linkedInIcon} alt="Share to Linkedin" />
                </a>
              </div>
              {addSource && (
                <a
                  className={fullArticle.ToSource}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sent;
