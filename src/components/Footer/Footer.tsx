import React, {FC} from 'react';
import style from './Footer.module.scss';



export const Footer: FC = () => {
    return(
        <footer className={style.container}>
            <h2 className={style.title}>Pavel Nikalaichyk</h2>
            <div className={style.socials}>
                <a href="#" className={style.link} target={"_blank"}>Facebook</a>
                <a href="#" className={style.link} target={"_blank"}>VK</a>
                <a href="#" className={style.link} target={"_blank"}>LinkedIn</a>
                <a href="#" className={style.link} target={"_blank"}>GitHub</a>
            </div>
        </footer>
    )
};