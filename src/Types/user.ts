interface User {
    id: number,
    lastname: string,
    name: string ,
    patronymic: string,
    telephone: string,
    email: string,
    position: number,
    role: number,
    img_link: string,
    img_is_local: boolean
}

export interface UserState{
    users:User[];
    loading_user:boolean;
    error_user:null | string;
}

export enum UserActionTypes {
    FETCH_USERS= "FETCH_USERS",
    FETCH_USERS_SUCCESS= "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR= "FETCH_USERS_ERROR",
}
interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction