import React, {FC} from 'react';
import style from './Header.module.scss'


export const Header: FC = () => {
    return (
        <header className={style.container}>
            <div className={style.row}>
                <div className={style.logo}>
                    L
                </div>
                <nav className={style.nav}>
                    <a href="#" className={`${style.link} ${style.btnNav}`}>Main</a>
                    <a href="#" className={`${style.link} ${style.btnNav}`}>Skills</a>
                    <a href="#" className={`${style.link} ${style.btnNav}`}>Projects</a>
                    <a href="#" className={`${style.link} ${style.btnNav}`}>Contacts</a>
                </nav>
            </div>
        </header>
    )
};