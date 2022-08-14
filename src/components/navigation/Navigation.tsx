import React from 'react';
import s from './navigation.module.scss';

const Navigation = () => {
    return (
        <div className={s.navigationWrapper}>
            <div className={s.navigationContainer}>
                <div className={s.navigationItems}>
                    <a className={s.navigationItem} href="/">Футбол</a>
                    <a className={s.navigationItem} href="/">Хоккей</a>
                    <a className={s.navigationItem} href="/">Биатлон</a>
                    <a className={s.navigationItem} href="/">Теннис</a>
                    <a className={s.navigationItem} href="/">Гандбол</a>
                    <a className={s.navigationItem} href="/">Баскетбол</a>
                    <a className={s.navigationItem} href="/">Бокс</a>
                    <a className={s.navigationItem} href="/">Легкая атлетика</a>
                    <a className={s.navigationItem} href="/">Другое</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;