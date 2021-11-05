import React, {FC} from "react";
import style from "./Header.module.scss";

export const Header: FC = () => {
    return (
        <header className={style.container} id={'home'}>
            <div className={style.info}>
                <h1 className={style.title}>Pavel Nikalaychik</h1>
                <p className={style.aboutMe}>
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