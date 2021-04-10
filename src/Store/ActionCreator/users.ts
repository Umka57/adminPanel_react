import {UserAction, UserActionTypes} from "../../Types/user";
import {Dispatch} from "redux";
import {getUsers} from "../../api";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.post("/users.getPossible" ,{"positionId":0,"roleId":0})
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS,payload:response.data.response})
        } catch (e){
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR,payload:'Loading users error'})
        }
    }
}