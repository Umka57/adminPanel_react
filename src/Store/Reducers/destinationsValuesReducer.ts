import {
    DestinationsValuesAction,
    DestinationsValuesActionTypes,
    DestinationsValuesState
} from "../../Types/destinationValues";

const initialState: DestinationsValuesState = {
    destinationValues: [],
    fetch_loading_destinations_values: false,
    fetch_error_destinations_values: null,
    push_loading_destinations_values: false,
    push_error_destinations_values: null,
    userId_destinations_values: null
}
export const destinationsValuesReducer = (state= initialState,action: DestinationsValuesAction) => {
    switch (action.type){
        case DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES:
            return {...state,fetch_loading_destinations_values:true}
        case DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES_SUCCESS:
            console.log('payload',action.payload)
            return {...state,fetch_loading_destinations_values: false,destinationValues: action.payload}
        case DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES_ERROR:
            return {...state,fetch_loading_destinations_values: false,fetch_error_destinations_values: action.payload}

        case DestinationsValuesActionTypes.PUSH_DESTINATIONS_VALUES:
            return {...state,push_loading_destinations_values:true}
        case DestinationsValuesActionTypes.PUSH_DESTINATIONS_VALUES_SUCCESS:
            return {...state,push_loading_destinations_values: false,destinationValues: action.payload}
        case DestinationsValuesActionTypes.PUSH_DESTINATIONS_VALUES_ERROR:
            return {...state,push_loading_destinations_values: false,push_error_destinations_values: action.payload}

        default:
            return state
    }
}