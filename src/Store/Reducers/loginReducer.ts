import {LoginState,LoginActions,LoginActionTypes} from "../../Types/login";


const initialState: LoginState = {
    login: [],
    loading_login: false,
    error_login: null
}

export const loginReducer = (state = initialState, action: LoginActions) => {
    switch(action.type){
        case LoginActionTypes.LOGIN:
            return {...state, loading_login:true}
        case LoginActionTypes.LOGIN_SUCCESS:
            return {...state, loading_login:false, login:action.payload}
        case LoginActionTypes.LOGIN_ERROR:
            return { ...state,loading_login:false,error_login:action.payload}
        default:
            return state
    }
}