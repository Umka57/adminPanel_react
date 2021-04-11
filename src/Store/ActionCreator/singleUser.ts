import {Dispatch} from "redux";
import axios from "axios";
import {UserSingleAction, UserSingleActionTypes} from "../../Types/singleUser";

export const fetchUser = (id=0) => {
    return async (dispatch: Dispatch<UserSingleAction>) => {
        try {
            dispatch({type: UserSingleActionTypes.FETCH_SINGLE_USER})
            const response = await axios.post("/users.get" ,{"userId":id})
            console.log("request",response.data)
            dispatch({type: UserSingleActionTypes.FETCH_SINGLE_USER_SUCCESS,payload:response.data})
        } catch (e){
            dispatch({type: UserSingleActionTypes.FETCH_SINGLE_USER_ERROR,payload:'Loading user error'})
        }
    }
}