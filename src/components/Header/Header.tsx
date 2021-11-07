import React, {FC} from "react";
import style from "./Header.module.scss";
import {FormattedMessage} from "react-intl";
import {useLanguage} from "../../app/utils";
import {useSelector} from "react-redux";
import {RootStateType} from "../../app/store";
import {Locales} from "../../i18n/Provider";

export const Header: FC = () => {

    const lang = useSelector<RootStateType, Locales>(state => state.app.lang)

    const setLanguage = useLanguage();

    return (
        <header className={style.container} id={'home'}>
            <div className={style.info}>
                <h1 className={style.title}>
                    <FormattedMessage id={"infoBlockTitle"}/>
                </h1>
                <p className={style.aboutMe}>
                    <FormattedMessage id={"infoBlockAbout"}/>
                </p>
                <div className={style.lang}>
                    <div>
                        <span
                            className={lang === "ru-RU" ? style.bold : style.normal}
                            data-lang="ru-RU"
                            onClick={setLanguage}
                        >ru</span><b>|</b>
                        <span
                            className={lang === "en-US" ? style.bold : style.normal}
                            data-lang="en-US"
                            onClick={setLanguage}
                        >eng</span>
                    </div>
                </div>
                <img className={style.photo} src="#" alt="#"/>
            </div>
        </header>
    )
};