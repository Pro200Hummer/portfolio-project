import React, {FC} from "react";
import style from './RemoteWork.module.scss'
import Flip from "react-awesome-reveal";


export const RemoteWork: FC = () => {
    return (
        <div className={style.container}>
            <Flip>
                <h2 className={style.title}>Considering the option of remote work</h2>
            </Flip>
            <button className={style.btnHire}>
                Hire me
            </button>
        </div>
    )
};