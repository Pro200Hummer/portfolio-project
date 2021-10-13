export type PortfolioItemType = {
    href: string
    image: string
    title: string
    text: string
}

const initialState: PortfolioItemType[] = [
    {
        href: "https://Pro200Hummer.github.io/incubator_todo-list",
        image: "",
        title: "Todo List",
        text: "My Todo List"
    },
    {
        href: "https://Pro200Hummer.github.io/question-answer-test",
        image: "",
        title: "Question/Answer",
        text: "My test project"
    },
]

export const portfolioReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
};