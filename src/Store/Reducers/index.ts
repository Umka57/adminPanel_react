import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {destinationsReducer} from "./destinationsReducer";
import {prorectorsReducer} from "./usersReducer";
import {structureReducer} from "./usersReducer";
import {rolesReducer} from "./rolesReducer"
import {positionsReducer} from "./positionsReducer";
import {singleUserReducer} from "./singleUserReducer";
import {universityReducer} from "./usersReducer";
import {destinationsValuesReducer} from "./destinationsValuesReducer";
import {loginReducer} from "./loginReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    destinations : destinationsReducer,
    prorectors: prorectorsReducer,
    structure: structureReducer,
    roles: rolesReducer,
    positions: positionsReducer,
    user: singleUserReducer,
    university: universityReducer,
    destinationsValues: destinationsValuesReducer,
    login : loginReducer
})

export type RootState = ReturnType<typeof rootReducer>