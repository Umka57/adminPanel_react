interface User {
    id: number,
    lastname: string,
    name: string ,
    patronymic: string,
    telephone: string,
    email: string,
    position: number,
    role: number
}

export interface UserSingleState{
    user:User;
    loading_user:boolean;
    error_user:null | string;
}

export enum UserSingleActionTypes {
    FETCH_USERS= "FETCH_USERS",
    FETCH_USERS_SUCCESS= "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR= "FETCH_USERS_ERROR",
}
interface FetchUserSingleAction {
    type: UserSingleActionTypes.FETCH_USERS;
}
interface FetchUserSingleSuccessAction {
    type: UserSingleActionTypes.FETCH_USERS_SUCCESS;
    payload: any;
}
interface FetchUserSingleErrorAction {
    type: UserSingleActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
export type UserSingleAction = FetchUserSingleAction | FetchUserSingleSuccessAction | FetchUserSingleErrorAction