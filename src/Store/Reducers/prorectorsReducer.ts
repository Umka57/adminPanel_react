import {ProrectorsAction, ProrectorsActionType, ProrectorsState} from "../../Types/prorectors";


const initialState: ProrectorsState = {
    prorectors: [],
    loading:false,
    error: null,
}
export const prorectorsReducer = (state= initialState,action: ProrectorsAction) => {
    switch (action.type){
        case ProrectorsActionType.FETCH_PRORECTORS:
            return {...state,loading:true}
        case ProrectorsActionType.FETCH_PRORECTORS_SUCCESS:
            return {...state,loading: false,destinations: action.payload}
        case ProrectorsActionType.FETCH_PRORECTORS_ERROR:
            return {...state,loading: false,error: action.payload}
        default:
            return state
    }
}