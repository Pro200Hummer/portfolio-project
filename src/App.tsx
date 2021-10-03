import React from 'react';
import {Header} from "./components/Header/Header";
import style from './commonStyles/Common.module.scss'
import {About} from "./components/About/About";

export const App = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <Header/>
                <About/>
            </div>
        </div>
    )
};
