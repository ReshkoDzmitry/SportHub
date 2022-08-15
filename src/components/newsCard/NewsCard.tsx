import React from 'react';
import s from './newsCard.module.scss';
import {news} from "../../data/data";
import OpinionCard from '../opinionCard/OpinionCard';


const NewsCard = () => {

    const newsDate = news.filter(el => el.data === '09.07.19');

    return (

        <div className={s.newsCardWrapper}>
            {
                news.map(m => {
                    return (
                        <a href="/" className={s.newsCard} key={m.id}>
                            <div className={s.newsCardImageBlock}>
                                <div className={s.newsCardImageWrapper}>
                                    <img className={s.newsCardImage} src={m.image} alt={m.alt}/>
                                </div>
                            </div>

                            <p className={s.newsCardData}>{m.data} | <span
                                className={s.newsCardHashTag}>#{m.hashTag}</span></p>
                            <h5 className={s.newsCardTitle}>{m.title}</h5>
                            <p className={s.newsCardDescription}>{m.description}</p>
                        </a>
                    )
                })
            }
            <div className={s.opinionCard}>
                <OpinionCard/>
            </div>

            {
                newsDate.map(m => {
                    return (
                        <a href="/" className={s.newsCard} key={m.id}>
                            <div className={s.newsCardImageBlock}>
                                <div className={s.newsCardImageWrapper}>
                                    <img className={s.newsCardImage} src={m.image} alt={m.alt}/>
                                </div>
                            </div>

                            <p className={s.newsCardData}>{m.data} | <span
                                className={s.newsCardHashTag}>#{m.hashTag}</span></p>
                            <h5 className={s.newsCardTitle}>{m.title}</h5>
                            <p className={s.newsCardDescription}>{m.description}</p>
                        </a>
                    )
                })
            }
        </div>
    )

}

export default NewsCard;