import { useEffect, useState } from 'react';


export function GetArticles() {

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