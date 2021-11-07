import React, {FC} from 'react';
import style from './About.module.scss'
import Flip from "react-awesome-reveal";
import {FormattedMessage} from "react-intl";


export const About: FC = () => {
    return (
        <div className={style.container} id={'about'}>
            <div className={style.content}>
                <Flip>
                    <h2 className={style.title}>
                        <FormattedMessage id={"aboutMeBlockTitle"}/>
                    </h2>
                </Flip>
                <div className={style.about}>
                    <p><FormattedMessage id={"aboutMeBlockParagraph_1"}/></p>
                    <p><FormattedMessage id={"aboutMeBlockParagraph_2"}/></p>
                    <p><FormattedMessage id={"aboutMeBlockParagraph_3"}/></p>
                </div>
            </div>
        </div>
    )
};