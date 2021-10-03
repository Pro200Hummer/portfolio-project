import React, {FC} from 'react';
import style from './Header.module.scss'


export const Header: FC = () => {
    return (
        <header className={style.container}>
            <nav className={style.nav}>
                <a href="#" className={`${style.link} ${style.btnNav}`}>Main</a>
                <a href="#" className={`${style.link} ${style.btnNav}`}>Skills</a>
                <a href="#" className={`${style.link} ${style.btnNav}`}>Projects</a>
                <a href="#" className={`${style.link} ${style.btnNav}`}>Contacts</a>
            </nav>
        </header>
    )
};