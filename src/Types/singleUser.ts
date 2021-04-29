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

export interface UserSingleState{
    user?:User;
    loading_user:boolean;
    error_user:null | string;
}

export enum UserSingleActionTypes {
    FETCH_SINGLE_USER= "FETCH_SINGLE_USER",
    FETCH_SINGLE_USER_SUCCESS= "FETCH_SINGLE_USER_SUCCESS",
    FETCH_SINGLE_USER_ERROR= "FETCH_SINGLE_USER_ERROR",
}
interface FetchUserSingleAction {
    type: UserSingleActionTypes.FETCH_SINGLE_USER;
}
interface FetchUserSingleSuccessAction {
    type: UserSingleActionTypes.FETCH_SINGLE_USER_SUCCESS;
    payload: any;
}
interface FetchUserSingleErrorAction {
    type: UserSingleActionTypes.FETCH_SINGLE_USER_ERROR;
    payload: string;
}
export type UserSingleAction = FetchUserSingleAction | FetchUserSingleSuccessAction | FetchUserSingleErrorAction