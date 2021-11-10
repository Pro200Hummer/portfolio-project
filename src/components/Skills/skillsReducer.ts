import {Icons} from '../../resources/images'

export interface SkillType {
    src: string
    name: string
}

const initialState: SkillType[] = [
    {
        src: Icons.html,
        name: "HTML"
    },
    {
        src: Icons.css,
        name: "CSS"
    },
    {
        src: Icons.js,
        name: "Java Script"
    },
    {
        src: Icons.ts,
        name: "Type Script"
    },
    {
        src: Icons.react,
        name: "React JS"
    },
    {
        src: Icons.redux,
        name: "Redux"
    },
    {
        src: Icons.axios,
        name: "Axios"
    },
];

export const skillsReducer = (state = initialState, action: any):SkillType[] => {
    switch (action.type){
        default:
            return state
    }
};