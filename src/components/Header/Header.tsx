import React, {FC} from "react";
import style from "./Header.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";


export const Header: FC = () => {
    console.log(scroll)

    return (
        <header className={style.container} id={'home'}>
            <nav className={style.nav}>
                <Link to={'home'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>Home</Link>
                <Link to={'about'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>About me</Link>
                <Link to={'skills'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>Skills</Link>
                <Link to={'portfolio'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>Portfolio</Link>
                <Link to={'contacts'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>Contacts</Link>
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