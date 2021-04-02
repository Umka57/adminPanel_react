import {Dispatch} from "redux";
import {destinationsGetPossible} from "../../api";
import {DestinationsAction, DestinationsActionTypes} from "../../Types/destinations";

export const fetchDestinations = (userId = null) => {
    return async (dispatch: Dispatch<DestinationsAction>) => {
        try {
            dispatch({type: DestinationsActionTypes.FETCH_DESTINATIONS})
            const response = await destinationsGetPossible(userId)
            dispatch({type: DestinationsActionTypes.FETCH_DESTINATIONS_SUCCESS,payload:response.data})
        } catch (e){
            dispatch({type: DestinationsActionTypes.FETCH_DESTINATIONS_ERROR, payload: "Ошибка загрузки назначений"})
        }
    }
}