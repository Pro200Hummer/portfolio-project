import {MouseEvent} from "react";
import {useDispatch} from "react-redux";
import {setLang} from "./app-reducer";
import {LOCALES} from "../i18n";

export const useLanguage = () => {
    const dispatch = useDispatch();
    return (e: MouseEvent<HTMLSpanElement>) => {
        const trigger = e.currentTarget.dataset.lang
        if (trigger === "en-US") {
            dispatch(setLang(LOCALES.ENGLISH))
        }
        if (trigger === "ru-RU") {
            dispatch(setLang(LOCALES.RUSSIAN))
        }
    }
}