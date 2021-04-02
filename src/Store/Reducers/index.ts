import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {destinationsReducer} from "./destinationsReducer";
import {prorectorsReducer} from "./prorectorsReducer";

export const rootReducer= combineReducers({
    user: userReducer,
    destinations : destinationsReducer,
    prorectors: prorectorsReducer
})

export type RootState = ReturnType<typeof rootReducer>