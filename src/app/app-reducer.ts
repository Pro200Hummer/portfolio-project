import {Locales} from "../i18n/Provider";
import {LOCALES} from "../i18n";

export type ActionType = ReturnType<typeof setLang>

export const setLang = (lang: Locales) => {
    debugger
    return({type: "APP/SET_LANG", lang}) as const};

const initState: { lang: Locales } = {
    lang: LOCALES.ENGLISH
};

export const appReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case "APP/SET_LANG":
            return {lang: action.lang}
        default:
            return state
    }
};

