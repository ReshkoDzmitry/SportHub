import React, {useState} from 'react';
import s from './header.module.scss';
import logo from './images/logo.png';
import Navigation from "../navigation/Navigation";
import Menu from "../menu/Menu";



const Header = () => {

    const onClickHandler = () => {
        setActive(!active);
    }

    const [active, setActive] = useState(false);

    return (
        <>
            <div className={s.headerWrapper}>
                {active ? <Menu active={active} setActive={setActive}/> : ''}
                <div className={s.container}>
                    <div className={s.menuWrapper}>
                        <a href="/" className={s.logo}>
                            <img src={logo} alt="logo"/>
                        </a>
                        <div className={s.menuItems}>
                            <a className={s.item} href="/">REWIEW</a>
                            <a className={s.item} href="/">ЭКСТРИМ</a>
                            <a className={s.item} href="/">ЛЕГЕНДЫ</a>
                            <a className={s.item} href="/">ЗОЖ И ТУРИЗМ</a>
                            <a className={s.item} href="/">ПОЗIРК</a>
                            <a className={s.item} href="/">ТРЕШ</a>
                        </div>
                        <div onClick={onClickHandler} className={s.buttonMenuWrapper}>
                            <span className={s.buttonMenu}><span className={s.effectMenu}>МЕНЮ</span>
                            </span>
                        </div>



                    </div>

                    <div className={s.titleWrapper}>
                        <div>
                            <a href="/">
                                <p>#ЭКСТРИМ</p>
                            </a>

                            <a href="/">
                                <h1 className={s.title}>Юрий Поклад: «Динамо» <br/>как бы начинает работать заново</h1>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
            <div>
                <Navigation/>
            </div>
        </>
    );
};

export default Header;