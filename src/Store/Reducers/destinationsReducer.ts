import {DestinationsAction, DestinationsActionTypes, DestinationsState} from "../../Types/destinations";

const initialState: DestinationsState = {
    destinations: [],
    fetch_loading_destination:false,
    fetch_error_destination: null,
    push_loading_destination: false,
    push_error_destination: null,
    userId_destination: null
}
export const destinationsReducer = (state= initialState,action: DestinationsAction) => {
    switch (action.type){
        case DestinationsActionTypes.FETCH_DESTINATIONS:
            return {...state,fetch_loading_destination:true}
        case DestinationsActionTypes.FETCH_DESTINATIONS_SUCCESS:
            return {...state,fetch_loading_destination: false,destinations: action.payload}
        case DestinationsActionTypes.FETCH_DESTINATIONS_ERROR:
            return {...state,fetch_loading_destination: false,fetch_error_destination: action.payload}

        case DestinationsActionTypes.PUSH_DESTINATIONS:
            return {...state,push_loading_destination:true}
        case DestinationsActionTypes.PUSH_DESTINATIONS_SUCCESS:
            return {...state,push_loading_destination: false,destinations: action.payload}
        case DestinationsActionTypes.PUSH_DESTINATIONS_ERROR:
            return {...state,push_loading_destination: false,push_error_destination: action.payload}

        default:
            return state
    }
}