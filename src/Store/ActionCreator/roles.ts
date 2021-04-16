import {Dispatch} from "redux";
import axios from "axios";
import {RolesAction, RolesActionTypes} from "../../Types/roles";

export const fetchRoles = () => {
    return async (dispatch: Dispatch<RolesAction>) => {
        try {
            dispatch({type: RolesActionTypes.FETCH_ROLES})
            const response = await axios.post("/roles.getPossible")
            dispatch({type: RolesActionTypes.FETCH_ROLES_SUCCESS, payload: response.data.response})
        } catch (e) {
            dispatch({type: RolesActionTypes.FETCH_ROLES_ERROR, payload: 'Ошибка в загрузке ролей'})
        }
    }
}