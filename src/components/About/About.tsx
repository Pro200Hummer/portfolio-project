import React, {FC} from 'react';
import style from './About.module.scss'


export const About: FC = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h2 className={style.title}>About Me</h2>
                <div className={style.about}>
                    <p>
                        Hi, I'm Pavel – Front-end developer from Minsk.<br/>
                        I'm interested in design and everything connected with it.
                    </p>
                    <p>
                        I'm studying at courses "Front-End Development"<br/>
                        in IT-Incubator.
                    </p>
                    <p>
                        Ready to implement excellent projects<br/>
                        with wonderful people.
                    </p>
                </div>
            </div>
        </div>
    )
};