import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {destinationsReducer} from "./destinationsReducer";
import {prorectorsReducer} from "./prorectorsReducer";
import {structureReducer} from "./structureReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    destinations : destinationsReducer,
    prorectors: prorectorsReducer,
    structure: structureReducer,
})

export type RootState = ReturnType<typeof rootReducer>