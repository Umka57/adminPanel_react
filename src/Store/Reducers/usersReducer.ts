import {UserAction, UserActionTypes, UserState} from "../../Types/user";

const initialState: UserState = {
    users: [],
    loading_user: false,
    error_user: null
}

export const usersReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type){
        case UserActionTypes.FETCH_USERS:
           return {...state, loading_user: true}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state,loading_user:false, users:action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, loading_user:false,error_user:action.payload}
        default:
            return state
    }
}