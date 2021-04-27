import {Dispatch} from "redux";
import axios from "axios";
import {DestinationsValuesAction, DestinationsValuesActionTypes} from "../../Types/destinationValues";

export const fetchDestinationsValues = (id = null) => {
    return async (dispatch: Dispatch<DestinationsValuesAction>) => {
        try {
            dispatch({type: DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES})
            const response = await axios.post("/destinations.getValues", {"destinationId":id})
            dispatch({type: DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES_SUCCESS,payload:response.data})
        } catch (e){
            dispatch({type: DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES_ERROR, payload: "Ошибка загрузки данных из назначений"})
        }
    }
}

export const pushDestinationsValues = (destinationsValues:any = null) => {
    return async (dispatch: Dispatch<DestinationsValuesAction>) => {
        try {
            dispatch({type: DestinationsValuesActionTypes.PUSH_DESTINATIONS_VALUES})
            const response = await axios.post("/destinations.createValues",
                {
                    "id":destinationsValues.id,
                    "destination": destinationsValues.destination,
                    "week":destinationsValues.week,
                    "value":destinationsValues.value
                    })
            dispatch({type: DestinationsValuesActionTypes.PUSH_DESTINATIONS_VALUES_SUCCESS,payload:response.data})
        } catch (e){
            dispatch({type: DestinationsValuesActionTypes.PUSH_DESTINATIONS_VALUES_ERROR, payload: "Ошибка загрузки данных из назначений"})
        }
    }
}