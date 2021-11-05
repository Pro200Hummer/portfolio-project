import React, {FC} from "react";
import style from "./NavBar.module.scss";
import {Link} from "react-scroll";

export const NavBar: FC = () => {
    return(
        <nav className={style.nav}>
            <Link to={'home'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>Home</Link>
            <Link to={'about'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>About me</Link>
            <Link to={'skills'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>Skills</Link>
            <Link to={'portfolio'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>Portfolio</Link>
            <Link to={'contacts'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>Contacts</Link>
        </nav>
    )
};