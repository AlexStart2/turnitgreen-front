"use client"

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { formatDate } from './formatDate';
import { useRouter } from 'next/navigation';
import loading from '../Images/loading.gif';
import './CARD-Articles.css';
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
                <Image src={loading} alt="Loading..." className="loadingArticles" />
            ) : (
                Articles.map((data) => {
                    return (
                        <div
                            key={data._id}
                            className="Articles"
                            onClick={() => router.push(`/article/${data._id}`)}
                        >
                            <div className="img-container">
                                <Image
                                    className="ArticlesImages"
                                    src={`https://drive.google.com/uc?id=${data.ImageId}`}
                                    alt={data.Title}
                                    width={994}
                                    height={248}
                                />
                            </div>
                            <div className="ArticleCardText">
                                <h1 className="Title">{data.Title}</h1>
                                <div
                                    className="Content"
                                    id={data._id}
                                    dangerouslySetInnerHTML={{ __html: data.Content + "..." }}
                                ></div>
                            </div>
                            <div className="ContentDate">{formatDate(data.createdAt)}</div>
                        </div>
                    );
                })
            )}
        </>
    );
}

export default CardArticle;

