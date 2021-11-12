import {PortfolioImages} from '../../resources/images'

export type PortfolioItemType = {
    href: string
    image: string
    title: string
    text: string
}

const initialState: PortfolioItemType[] = [
    {
        href: "https://Pro200Hummer.github.io/incubator_todo-list",
        image: PortfolioImages.toDo,
        title: "Todo List",
        text: "My Todo List"
    },
    {
        href: "https://Pro200Hummer.github.io/question-answer-test",
        image: PortfolioImages.questionAnswer,
        title: "Question/Answer",
        text: "My test project"
    },
    {
        href: "https://Pro200Hummer.github.io/custom-toast-notification",
        image: PortfolioImages.toast,
        title: "Custom Toast Notification",
        text: "My test project"
    },
    {
        href: "https://Pro200Hummer.github.io/employees",
        image: PortfolioImages.employees,
        title: "Persons List",
        text: "My test project"
    },
]

export const portfolioReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
};