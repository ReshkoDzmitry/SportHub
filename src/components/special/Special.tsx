import React from 'react';
import s from './special.module.scss';

const Special = () => {
    return (
        <div className={s.specialWrapper}>
            <div className={s.titleWrapper}>
                <a href="/">
                    <p>#БОЛЕЛЬЩИКАМ</p>
                </a>
                <a href="/">
                    <h2>Юрий Поклад: «Динамо» как бы начинает работать заново</h2>
                </a>
            </div>
        </div>
    );
};

export default Special;