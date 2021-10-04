import {combineReducers, createStore} from "redux";
import {skillsReducer} from "../components/Slills/skillsReducer";

export const rootReducer = combineReducers({
    skills: skillsReducer,
});

export const store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>;