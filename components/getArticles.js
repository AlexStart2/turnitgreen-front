import { useEffect, useState } from 'react';

export function GetArticles() {

  const [allArticles, setAllArticles] = useState([]);

  async function getArticle() {
     fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-all-articles`, {
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