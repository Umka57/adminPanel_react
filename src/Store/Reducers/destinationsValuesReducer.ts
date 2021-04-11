import {
    DestinationsValuesAction,
    DestinationsValuesActionTypes,
    DestinationsValuesState
} from "../../Types/destinationValues";

const initialState: DestinationsValuesState = {
    destinationValues: [],
    loading:false,
    error: null,
    userId: null
}
export const destinationsValuesReducer = (state= initialState,action: DestinationsValuesAction) => {
    switch (action.type){
        case DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES:
            return {...state,loading:true}
        case DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES_SUCCESS:
            return {...state,loading: false,destinationValues: action.payload}
        case DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES_ERROR:
            return {...state,loading: false,error: action.payload}
        default:
            return state
    }
}