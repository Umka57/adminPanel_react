import {UserSingleAction, UserSingleActionTypes, UserSingleState} from "../../Types/singleUser";

const initialState: UserSingleState = {
    user: undefined ,
    loading_user: false,
    error_user: null
}

export const singleUserReducer = (state = initialState, action: UserSingleAction): UserSingleState => {
    switch(action.type){
        case UserSingleActionTypes.FETCH_SINGLE_USER:
            return {...state, loading_user: true}
        case UserSingleActionTypes.FETCH_SINGLE_USER_SUCCESS:
            return {...state,loading_user:false, user:action.payload}
        case UserSingleActionTypes.FETCH_SINGLE_USER_ERROR:
            return {...state, loading_user:false,error_user:action.payload}
        default:
            return state
    }
}