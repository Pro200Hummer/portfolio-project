import html from './skills-icons/html5-icon.svg'
import css from './skills-icons/css-icon.svg'
import js from './skills-icons/javascript-icon.svg'
import ts from './skills-icons/typescriptlang-icon.svg'
import react from './skills-icons/reactjs-icon.svg'
import redux from './skills-icons/redux-icon.svg'
import axios from './skills-icons/axios-icon.svg'

interface Icons {
    html: string
    css: string
    js: string
    ts: string
    react: string
    redux: string
    axios: string
}

const icons: Icons = {
    html: html,
    css: css,
    js: js,
    ts: ts,
    react: react,
    redux: redux,
    axios: axios
}
export default icons