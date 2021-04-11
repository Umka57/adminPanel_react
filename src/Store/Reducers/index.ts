import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {destinationsReducer} from "./destinationsReducer";
import {prorectorsReducer} from "./prorectorsReducer";
import {structureReducer} from "./structureReducer";
import {rolesReducer} from "./rolesReducer"
import {positionsReducer} from "./positionsReducer";
import {singleUserReducer} from "./singleUserReducer";
import {universityReducer} from "./universityReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    destinations : destinationsReducer,
    prorectors: prorectorsReducer,
    structure: structureReducer,
    roles: rolesReducer,
    positions: positionsReducer,
    user: singleUserReducer,
    university: universityReducer
})

export type RootState = ReturnType<typeof rootReducer>