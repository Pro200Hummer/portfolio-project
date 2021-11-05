export interface SkillType {
    src: string
    name: string
}

const initialState: SkillType[] = [
    {
        src: "https://i.ya-webdesign.com/images/html-5-logo-png-6.png",
        name: "HTML"
    },
    {
        src: "https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle.png",
        name: "CSS"
    },
    {
        src: "https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png",
        name: "Java Script"
    },
    {
        src: "https://im0-tub-by.yandex.net/i?id=03b68d990d1f7b37733fbf1d9b7894f4&n=13",
        name: "Type Script"
    },
    {
        src: "https://e7.pngegg.com/pngimages/791/139/png-clipart-react-native-web-application-javascript-google-scholar-logo-symmetry-web-application.png",
        name: "React JS"
    },
    {
        src: "https://tabris.com/wp-content/uploads/2020/08/redux-logo-e1597223260395.png",
        name: "Redux"
    },
    {
        src: "https://media-exp1.licdn.com/dms/image/C4E0BAQEXR4j_oeeNXw/company-logo_200_200/0?e=2159024400&v=beta&t=74GXAHbeVm7_T3oIx3VwnsdRwffQlPBKlUPQsTcxRkg",
        name: "Axios"
    },
];

export const skillsReducer = (state = initialState, action: any):SkillType[] => {
    switch (action.type){
        default:
            return state
    }
};