import React from "react";
import style from "../commonStyles/Common.module.scss";
import {Header} from "../components/Header/Header";
import {About} from "../components/About/About";
import {Skills} from "../components/Skills/Skills";
import {Portfolio} from "../components/Portfolio/Portfolio";
import {RemoteWork} from "../components/Remote Work/RemoteWork";
import {Contacts} from "../components/Contacts/Contacts";
import {Footer} from "../components/Footer/Footer";
import {NavBar} from "../components/NavBar/NavBar";
import {I18nProvider, LOCALES} from "../i18n";

export const App = () => {
    return (
        <I18nProvider locale={LOCALES.RUSSIAN}>
            <div className={style.wrapper}>
                <NavBar/>
                <div className={style.content}>
                    <Header/>
                    <About/>
                    <Skills/>
                    <Portfolio/>
                    <RemoteWork/>
                    <Contacts/>
                    <Footer/>
                </div>
            </div>
        </I18nProvider>
    )
};
