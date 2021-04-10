import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {destinationsReducer} from "./destinationsReducer";
import {prorectorsReducer} from "./prorectorsReducer";
import {structureReducer} from "./structureReducer";
import {rolesReducer} from "./rolesReducer"
import {positionsReducer} from "./positionsReducer";

export const rootReducer = combineReducers({
    user: usersReducer,
    destinations : destinationsReducer,
    prorectors: prorectorsReducer,
    structure: structureReducer,
    roles: rolesReducer,
    positions: positionsReducer
})

export type RootState = ReturnType<typeof rootReducer>