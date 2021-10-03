import React, {FC} from 'react';
import style from './About.module.scss'


export const About: FC = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <img src="https://avatars.githubusercontent.com/u/71458258?v=4"
                     alt="there should be my photo"
                     className={style.image}
                />
                <div className={style.about}>
                    Hey! My name is Pavel Nikolaychik.<br/>
                    I am a Front End Developer.
                </div>
            </div>
        </div>
    )
};