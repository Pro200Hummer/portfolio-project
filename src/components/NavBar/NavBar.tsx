import React, {FC} from "react";
import style from "./NavBar.module.scss";
import {Link} from "react-scroll";
import {FormattedMessage} from "react-intl";

export const NavBar: FC = () => {
    return(
        <nav className={style.nav}>
            <Link to={'home'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>
                <FormattedMessage id={"navHomeBtn"}/>
            </Link>
            <Link to={'about'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>
                <FormattedMessage id={"navAboutMeBtn"}/>
            </Link>
            <Link to={'skills'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>
                <FormattedMessage id={"navSkillsBtn"}/>
            </Link>
            <Link to={'portfolio'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>
                <FormattedMessage id={"navPortfolioBtn"}/>
            </Link>
            <Link to={'contacts'} smooth={true} duration={500} className={`${style.link} ${style.btnNav}`}>
                <FormattedMessage id={"navContactsBtn"}/>
            </Link>
        </nav>
    )
};