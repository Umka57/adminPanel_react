interface Roles {
    id: number,
    role_name: string
}
export interface RolesState {
    roles: Roles[],
    loading_roles: boolean,
    error_roles: null | string
}

export enum RolesActionTypes {
    FETCH_ROLES = "FETCH_ROLES",
    FETCH_ROLES_SUCCESS = "FETCH_ROLES-SUCCESS",
    FETCH_ROLES_ERROR = "FETCH_ROLES-ERROR"
}
interface FetchRolesAction {
    type: RolesActionTypes.FETCH_ROLES;
}

interface FetchRolesSuccessAction{
    type: RolesActionTypes.FETCH_ROLES_SUCCESS;
    payload: any[]
}

interface FetchRolesErrorAction {
    type: RolesActionTypes.FETCH_ROLES_ERROR;
    payload: string;
}

export type RolesAction = FetchRolesAction | FetchRolesSuccessAction | FetchRolesErrorAction