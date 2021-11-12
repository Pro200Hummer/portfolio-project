import React, {FC} from 'react';
import style from './Footer.module.scss';
import Flip from "react-awesome-reveal";
import {FormattedMessage} from "react-intl";


export const Footer: FC = () => {
    return (
        <footer className={style.container}>
            <Flip>
                <h2 className={style.title}>
                    <FormattedMessage id={"footerBlockTitle"}/>
                </h2>
            </Flip>
            <div className={style.socials}>
                <a href="#" className={style.link} target={"_blank"}>Facebook</a>
                <a href="https://vk.com/id132583801" className={style.link} target={"_blank"}>VK</a>
                <a href="https://www.linkedin.com/in/%D0%BF%D0%B0%D0%B2%D0%B5%D0%BB-%D0%BD%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9%D1%87%D0%B8%D0%BA-1974101b7/" className={style.link} target={"_blank"}>LinkedIn</a>
                <a href="https://github.com/Pro200Hummer" className={style.link} target={"_blank"}>GitHub</a>
            </div>
        </footer>
    )
};