import {combineReducers, createStore} from "redux";
import {skillsReducer} from "../components/Skills/skillsReducer";
import {portfolioReducer} from "../components/Portfolio/portfolioReducer";

export const rootReducer = combineReducers({
    skills: skillsReducer,
    portfolio: portfolioReducer,
});

export const store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>;