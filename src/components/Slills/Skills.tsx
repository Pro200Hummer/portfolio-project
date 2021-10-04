import React, {FC} from 'react';
import style from './Skills.module.scss'
import {useSelector} from "react-redux";
import {RootStateType} from "../../app/store";
import {SkillType} from "./skillsReducer";


export const Skills: FC = () => {

    const skills = useSelector<RootStateType, SkillType[]>(state => state.skills);

    return (
        <div className={style.container}>
            <h2 className={style.title}>Skills</h2>
            <div className={style.skills}>
                {skills.map(s => {
                    return (
                        <div className={style.skill}>
                            <img
                                src={s.src}
                                alt="#"
                                className={style.skillsImg}
                            />
                            <h4 className={style.skillTitle}>{s.name}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};