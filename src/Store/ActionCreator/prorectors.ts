import {Dispatch} from "redux";
import {getProrectors} from "../../api";
import {ProrectorsAction, ProrectorsActionType} from "../../Types/prorectors";
import axios from "axios";

export const fetchProrectors = () => {
    return async (dispatch: Dispatch<ProrectorsAction>) => {
        try {
            dispatch({type: ProrectorsActionType.FETCH_PRORECTORS})
            const response = await axios.post("/users.getPossible", {"positionId":2,"roleId":2})
            dispatch({type: ProrectorsActionType.FETCH_PRORECTORS_SUCCESS,payload:response.data.response})
        } catch (e){
            dispatch({type: ProrectorsActionType.FETCH_PRORECTORS_ERROR,payload:'Ошибка в загрузке списка проректоров'})
        }
    }
}