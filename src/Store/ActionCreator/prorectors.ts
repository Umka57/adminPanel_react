import {Dispatch} from "redux";
import {getProrectors} from "../../api";
import {ProrectorsAction, ProrectorsActionType} from "../../Types/prorectors";

export const fetchProrectors = () => {
    return async (dispatch: Dispatch<ProrectorsAction>) => {
        try {
            dispatch({type: ProrectorsActionType.FETCH_PRORECTORS})
            const response = await getProrectors()
            dispatch({type: ProrectorsActionType.FETCH_PRORECTORS_SUCCESS,payload:response.data})
        } catch (e){
            dispatch({type: ProrectorsActionType.FETCH_PRORECTORS_ERROR,payload:'Ошибка в загрузке списка проректоров'})
        }
    }
}