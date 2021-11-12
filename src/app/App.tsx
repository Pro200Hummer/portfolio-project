import React from "react";
import {useSelector} from "react-redux";
import {RootStateType} from "./store";
import style from "../commonStyles/Common.module.scss";
import {Header} from "../components/Header/Header";
import {About} from "../components/About/About";
import {Skills} from "../components/Skills/Skills";
import {Portfolio} from "../components/Portfolio/Portfolio";
import {Contacts} from "../components/Contacts/Contacts";
import {Footer} from "../components/Footer/Footer";
import {NavBar} from "../components/NavBar/NavBar";
import {I18nProvider} from "../i18n";
import {Locales} from "../i18n/Provider";


export const App = () => {
    const lang = useSelector<RootStateType, Locales>(state => state.app.lang)

    return (
        <I18nProvider locale={lang}>
            <div className={style.wrapper}>
                <NavBar/>
                <div className={style.content}>
                    <Header/>
                    <About/>
                    <Skills/>
                    <Portfolio/>
                    <Contacts/>
                    <Footer/>
                </div>
            </div>
        </I18nProvider>
    )
};
