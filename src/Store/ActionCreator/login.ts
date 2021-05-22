import {Dispatch} from "redux";
import axios from "axios";
import {LoginActions, LoginActionTypes} from "../../Types/login";

export const signIn = (input:any = null) => {
    return async (dispatch: Dispatch<LoginActions>) => {
        try {
            dispatch({type: LoginActionTypes.LOGIN})
            const md5 = require('md5')
            const response = await axios.post("/auth.sing-in",{"login":input.login,"access_token":md5(input.password)})
            dispatch({type: LoginActionTypes.LOGIN_SUCCESS, payload: response.data.response})
        } catch (e) {
            dispatch({type: LoginActionTypes.LOGIN_ERROR, payload: 'Неверный логин или пароль'})
        }
    }
}