import {Dispatch} from "redux";
import axios from "axios";
import {UserSingleAction, UserSingleActionTypes} from "../../Types/singleUser";

export const fetchUser = (id=0) => {
    return async (dispatch: Dispatch<UserSingleAction>) => {
        try {
            dispatch({type: UserSingleActionTypes.FETCH_USERS})
            const response = await axios.post("/users.getPossible" ,{"userId":id})
            dispatch({type: UserSingleActionTypes.FETCH_USERS,payload:response.data.response})
        } catch (e){
            dispatch({type: UserSingleActionTypes.FETCH_USERS_ERROR,payload:'Loading user error'})
        }
    }
}