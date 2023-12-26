import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { formatDate } from './formatDate';
import { useRouter } from 'next/navigation';
import loading from '@/public/loading.gif';
import styles from '@/styles/CARD-Articles.module.css';
import Image from 'next/image';

function CardArticle({ Articles }) {

    const router = useRouter();

    function setNrLine(nr, id) {
        const a = document.getElementById(id);
        a.style.height = 2 + nr * 20 + "px";
        a.style.webkitLineClamp = nr;
    }

    useEffect(() => {
        Articles.forEach(data => {
            if (document.getElementById(data._id) !== null) {
                setNrLine(data.Number, data._id);
            }
        });
    }, [Articles]);
      

    return (
        <>
            {(Articles.length === 0 || typeof Articles === "undefined") ? (
                <Image src={loading} alt="Loading..." className={styles.loadingArticles} />
            ) : (
                Articles.map((data) => {
                    return (
                        <div
                            key={data._id}
                            className={styles.Articles}
                            onClick={() => router.push(`/article/${data._id}`)}
                        >
                            <div className={styles.img_container}>
                                <Image
                                    className={styles.ArticlesImages}
                                    src={`https://drive.google.com/uc?id=${data.ImageId}`}
                                    alt={data.Title}
                                    width={994}
                                    height={248}
                                />
                            </div>
                            <div className={styles.ArticleCardText}>
                                <h1 className={styles.Title}>{data.Title}</h1>
                                <div
                                    className={styles.Content}
                                    id={data._id}
                                    dangerouslySetInnerHTML={{ __html: data.Content + "..." }}
                                ></div>
                            </div>
                            <div className={styles.ContentDate}>{formatDate(data.createdAt)}</div>
                        </div>
                    );
                })
            )}
        </>
    );
}

export default CardArticle;

