import {DestinationsAction, DestinationsActionTypes, DestinationsState} from "../../Types/destinations";

const initialState: DestinationsState = {
    destinations: [],
    loading_destination:false,
    error_destination: null,
    userId_destination: null
}
export const destinationsReducer = (state= initialState,action: DestinationsAction) => {
    switch (action.type){
        case DestinationsActionTypes.FETCH_DESTINATIONS:
            return {...state,loading_destination:true}
        case DestinationsActionTypes.FETCH_DESTINATIONS_SUCCESS:
            return {...state,loading_destination: false,destinations: action.payload}
        case DestinationsActionTypes.FETCH_DESTINATIONS_ERROR:
            return {...state,loading_destination: false,error_destination: action.payload}
        default:
            return state
    }
}