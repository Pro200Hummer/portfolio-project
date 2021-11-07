import React, {FC} from 'react';
import style from './Contacts.module.scss'
import Flip from "react-awesome-reveal";
import {FormattedMessage} from "react-intl";

export const Contacts: FC = () => {
    return (
        <div className={style.container} id={'contacts'}>
            <Flip>
                <h2 className={style.title}>
                    <FormattedMessage id={"contactsBlockTitle"}/>
                </h2>
            </Flip>
            <form action="#" method="post" className={style.forms}>
                <input type="text" name="username" placeholder={"Your name *"}/>
                <input type="email" name="userEmail" placeholder={"Your Email *"}/>
                <textarea name="comments" placeholder={"Your message *"}/>
                <input type="submit" value="Send message"/>
            </form>
        </div>
    )
};