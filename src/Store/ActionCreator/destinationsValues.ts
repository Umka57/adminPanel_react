import {Dispatch} from "redux";
import axios from "axios";
import {DestinationsValuesAction, DestinationsValuesActionTypes} from "../../Types/destinationValues";

export const fetchDestinationsValues = (idList:number[] = []) => {
    return async (dispatch: Dispatch<DestinationsValuesAction>) => {
        try {
            dispatch({type: DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES})
            const data:any = []
            await idList.map( async (id) => {
                const response = await axios.post("/destinations.getValues", {"destinationId":id})
                data.push(...response.data)
            })
            console.log("fetch",data)
            dispatch({type: DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES_SUCCESS,payload:data})
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
                    "quarter": destinationsValues.quarter,
                    "week":destinationsValues.week,
                    "value":destinationsValues.value,
                    "is_verified":destinationsValues.is_verified
                    })
            dispatch({type: DestinationsValuesActionTypes.PUSH_DESTINATIONS_VALUES_SUCCESS,payload:response.data})
        } catch (e){
            dispatch({type: DestinationsValuesActionTypes.PUSH_DESTINATIONS_VALUES_ERROR, payload: "Ошибка загрузки данных из назначений"})
        }
    }
}