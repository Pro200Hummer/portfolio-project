import React, {FC} from 'react';
import style from './Contacts.module.scss'

export const Contacts: FC = () => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>Contacts</h2>
            <form action="#" method="post" className={style.forms}>
                <input type="text" name="username" placeholder={"Your name *"}/>
                <input type="email" name="userEmail" placeholder={"Your Email *"}/>
                <textarea name="comments" placeholder={"Your message *"}/>
                <input type="submit" value="Send message"/>
            </form>
        </div>
    )
};