import {DestinationsAction, DestinationsActionTypes, DestinationsState} from "../../Types/destinations";

const initialState: DestinationsState = {
    destinations: [],
    loading:false,
    error: null,
    userId: null
}
export const destinationsReducer = (state= initialState,action: DestinationsAction) => {
    switch (action.type){
        case DestinationsActionTypes.FETCH_DESTINATIONS:
            return {...state,loading:true}
        case DestinationsActionTypes.FETCH_DESTINATIONS_SUCCESS:
            return {...state,loading: false,destinations: action.payload}
        case DestinationsActionTypes.FETCH_DESTINATIONS_ERROR:
            return {...state,loading: false,error: action.payload}
        default:
            return state
    }
}