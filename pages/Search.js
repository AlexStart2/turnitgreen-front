
import styles from '@/styles/Search.module.css';
import React, { useState } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import { GetArticles } from '@/components/getArticles';
import SearchImage from '@/public/SearchPage.png';
import searchIncon from '@/public/SearchIcon.png';
import loading from '@/public/loading.gif';
import CardArticle from '@/components/CARD-Articles';



function Search() {

  const Articles = GetArticles();
  const [Display, setDisplay] = useState(Articles);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    const queryLower = query.toLowerCase();
    const FoundArticles = Articles.filter((article) =>
      article.Title.toLowerCase().includes(queryLower) || // Exact match for Title
      article.Content.toLowerCase().includes(queryLower) // Partial match for Content
    );
    setDisplay(FoundArticles);

  };

  const LookFor = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Set the search query
    handleSearch(query); // Perform the search with the updated query
  };

  return (
    <>

      <div className={styles.StartPage}>
          <Image src={SearchImage} className={styles.SearchImage} priority={true} alt='SearchImage' />
      </div>



      <div className={styles.SearchFunction}>
        <div className={styles.SearchBar}>
          <input
            type="text"
            placeholder='Write a keyword'
            value={searchQuery}
            onChange={LookFor}
            className={styles.search}
          />
          <Image src={searchIncon} priority={false} alt='Search' className={styles.SearchIcon} />
        </div>
      </div>


      <div className={styles.Blog}>

        {Articles.length === 0 || typeof Articles === 'undefined' ? <Image src={loading} alt='Loading...' className={styles.loadingArticles} /> :
          searchQuery ? <CardArticle Articles={Display}/> : <CardArticle Articles={Articles} />}
      </div>

    </>
  );
}

export default Search;
