import {UserAction, UserActionTypes} from "../../Types/user";
import {Dispatch} from "redux";
import {getUsers} from "../../api";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await getUsers()
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS,payload:response.data})
        } catch (e){
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR,payload:'Loading users error'})
        }
    }
}