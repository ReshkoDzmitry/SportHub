import React from 'react';
import s from './extreme.module.scss';

const Extreme = () => {
    return (
        <div className={s.extremeWrapper}>
            <div className={s.titleWrapper}>
                <a href="/">
                    <h2>Экстрим</h2>
                </a>
                <a href="/">
                    <p>Интервью с Юрием Покладом. <br/>
                        Полный список всех медалей Беларуси на <br/>
                        Европейских играх.</p>
                </a>
            </div>
        </div>
    );
};

export default Extreme;