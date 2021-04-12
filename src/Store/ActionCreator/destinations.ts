import {Dispatch} from "redux";
import {destinationsGetPossible} from "../../api";
import {DestinationsAction, DestinationsActionTypes} from "../../Types/destinations";
import axios from "axios";

export const fetchDestinations = (id = null) => {
    return async (dispatch: Dispatch<DestinationsAction>) => {
        try {
            dispatch({type: DestinationsActionTypes.FETCH_DESTINATIONS})
            const response = await axios.post("/destinations.getPossible", {"userId":id})
            dispatch({type: DestinationsActionTypes.FETCH_DESTINATIONS_SUCCESS,payload:response.data})
        } catch (e){
            dispatch({type: DestinationsActionTypes.FETCH_DESTINATIONS_ERROR, payload: "Ошибка загрузки назначений"})
        }
    }
}