export interface Login {
    lastname:string,
    name:string,
    patronymic:string,
    role: string
}

export interface LoginState {
    login: Login[],
    loading_login: boolean,
    error_login: null | string,
}

export enum LoginActionTypes {
    LOGIN = "LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR",
}

interface LoginAction {
    type: LoginActionTypes.LOGIN;
}
interface LoginSuccessAction {
    type: LoginActionTypes.LOGIN_SUCCESS;
    payload: Login;
}
interface LoginErrorAction {
    type: LoginActionTypes.LOGIN_ERROR;
    payload: string;
}

export type LoginActions = LoginAction
    | LoginSuccessAction
    | LoginErrorAction