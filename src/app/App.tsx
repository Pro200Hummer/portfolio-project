import React from 'react';
import {Header} from "../components/Header/Header";
import style from '../commonStyles/Common.module.scss'
import {About} from "../components/About/About";
import {Skills} from "../components/Slills/Skills";
import {Portfolio} from "../components/Portfolio/Portfolio";
import {RemoteWork} from "../components/Remote Work/RemoteWork";
import {Contacts} from "../components/Contacts/Contacts";
import {Footer} from "../components/Footer/Footer";

export const App = () => {
    return (
        <div className={style.wrapper}>
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
    )
};
