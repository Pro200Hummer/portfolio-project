import React, {FC} from 'react';
import style from './About.module.scss'
import Flip from "react-awesome-reveal";


export const About: FC = () => {
    return (
        <div className={style.container} id={'about'}>
            <div className={style.content}>
                <Flip>
                    <h2 className={style.title}>About Me</h2>
                </Flip>
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