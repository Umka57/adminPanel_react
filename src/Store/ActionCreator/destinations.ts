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
            dispatch({type: DestinationsActionTypes.FETCH_DESTINATIONS_ERROR, payload: "Ошибка загрузки назначений с сервера"})
        }
    }
}

export const pushDestinations = (destination:any = null) => {
    return async (dispatch: Dispatch<DestinationsAction>) => {
        try {
            dispatch({type: DestinationsActionTypes.PUSH_DESTINATIONS})
            const response = await axios.post("/destinations.create",
                {
                    'user': destination.userId,
                    'id': destination.id,
                    'name': destination.name,
                    'performance_indicator': destination.performance_indicator,
                    'verification_indicator_value': destination.performance_indicator_value,
                    'verification': destination.verification,
                    'year': destination.year,
                    'plan': destination.plan,
                    'present_value': destination.present_value,
                    'percent_completion': destination.percent_completion})
            dispatch({type: DestinationsActionTypes.PUSH_DESTINATIONS_SUCCESS,payload:response.data})
        } catch (e){
            dispatch({type: DestinationsActionTypes.PUSH_DESTINATIONS_ERROR, payload: "Ошибка загрузки назначений на сервер"})
        }
    }
}