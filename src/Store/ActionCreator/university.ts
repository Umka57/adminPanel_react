import {Dispatch} from "react";
import axios from "axios";
import {UniversityAction, UniversityActionTypes} from "../../Types/university";


export const fetchUniversity = () => {
    return async (dispatch: Dispatch<UniversityAction>) => {
        try{
            dispatch({type: UniversityActionTypes.FETCH_UNIVERSITY})
            const response = await axios.post("/users.getPossible",{'positionId':5,'roleId':2})
            dispatch({type: UniversityActionTypes.FETCH_UNIVERSITY_SUCCESS, payload:response.data.response})
        } catch (e) {
            dispatch({type: UniversityActionTypes.FETCH_UNIVERSITY_ERROR, payload: "Ошибка загрузки универститетских директоров"})
        }
    }
}