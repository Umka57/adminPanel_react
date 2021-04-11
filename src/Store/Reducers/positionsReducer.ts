import {PositionsAction, PositionsActionTypes, PositionsState} from "../../Types/positions";


const initialState: PositionsState = {
    positions: [],
    loading_positions: false,
    error_positions: null
}

export const positionsReducer = (state = initialState, action: PositionsAction) => {
    switch(action.type){
        case PositionsActionTypes.FETCH_POSITIONS:
            return {...state,loading_positions:true}
        case PositionsActionTypes.FETCH_POSITIONS_SUCCESS:
            return {...state,loading_positions:false, positions:action.payload}
        case PositionsActionTypes.FETCH_POSITIONS_ERROR:
            return {...state,loading_positions:false,error_positions:action.payload,}
        default:
            return state
    }
}