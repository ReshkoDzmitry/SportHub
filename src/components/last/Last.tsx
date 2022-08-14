import React from 'react';
import s from './last.module.scss';
import NewsCard from "../newsCard/NewsCard";

const Last = () => {
    return (
        <div className={s.lastContainer}>
            <div className={s.titleWrapper}>
                <h3 className={s.lastTitle}>ПОСЛЕДНЕЕ</h3>
            </div>
            <div className={s.lastNewsCardWrapper}>
                <NewsCard/>
            </div>
        </div>
    );
};

export default Last;