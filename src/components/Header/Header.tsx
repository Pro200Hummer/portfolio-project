import React, {FC} from "react";
import style from "./Header.module.scss";
import {FormattedMessage} from "react-intl";
import {useLanguage} from "../../app/utils";

export const Header: FC = () => {

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
                            className={style.langRu}
                            data-lang="ru-RU"
                            onClick={setLanguage}
                        >ru</span><b>|</b>
                        <span
                            className={style.langRu}
                            data-lang="en-US"
                            onClick={setLanguage}
                        ><b>eng</b></span>
                    </div>
                </div>
                <img className={style.photo} src="#" alt="#"/>
            </div>
        </header>
    )
};