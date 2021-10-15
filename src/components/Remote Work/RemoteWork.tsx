import React, {FC} from "react";
import style from './RemoteWork.module.scss'


export const RemoteWork: FC = () => {
    return(
        <div className={style.container}>
            <h2 className={style.title}>
                Considering the option of remote work
            </h2>
            <button className={style.btnHire}>
                Hire me
            </button>
        </div>
    )
};