import React, {FC} from 'react';
import style from './Skills.module.scss'
import {useSelector} from "react-redux";
import {RootStateType} from "../../app/store";
import {SkillType} from "./skillsReducer";
import Flip, {Zoom} from "react-awesome-reveal";
import {FormattedMessage} from "react-intl";

export const Skills: FC = () => {

    const skills = useSelector<RootStateType, SkillType[]>(state => state.skills);

    return (
        <div className={style.container} id={'skills'}>
            <Flip>
                <h2 className={style.title}>
                    <FormattedMessage id={"skillsBlockTitle"}/>
                </h2>
            </Flip>
            <div className={style.skills}>
                {skills.map(s => {
                    return (
                        <Zoom>
                            <div className={style.skill}>
                                <img
                                    src={s.src}
                                    alt="#"
                                    className={style.skillsImg}
                                />
                                <h4 className={style.skillTitle}>{s.name}</h4>
                            </div>
                        </Zoom>
                    )
                })}
            </div>
        </div>
    )
};