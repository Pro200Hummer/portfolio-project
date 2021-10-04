import React, {FC} from 'react';
import style from './Header.module.scss'


export const Header: FC = () => {
    return (
        <header className={style.container}>
            <nav className={style.nav}>
                <a href="#" className={`${style.link} ${style.btnNav}`}>Home</a>
                <a href="#" className={`${style.link} ${style.btnNav}`}>About me</a>
                <a href="#" className={`${style.link} ${style.btnNav}`}>Skills</a>
                <a href="#" className={`${style.link} ${style.btnNav}`}>Portfolio</a>
                <a href="#" className={`${style.link} ${style.btnNav}`}>Contacts</a>
            </nav>
            <div className={style.info}>
                <h1>Pavel Nikalaychik</h1>
                <p>
                    Front-end developer<br/>
                    26 years old, Minsk
                </p>
                <div className={style.lang}>
                    <div>
                        <span className={style.langRu}>ru</span><b>|</b>
                        <span className={style.langRu}><b>eng</b></span>
                    </div>
                </div>
                <img className={style.photo} src="#" alt="#"/>
            </div>
        </header>
    )
};