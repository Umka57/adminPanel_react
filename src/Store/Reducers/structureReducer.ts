import {StructureAction, StructureActionTypes, StructureState} from "../../Types/structure";

const initialState: StructureState = {
    structure : [],
    loading: false,
    error: null
}

export const structureReducer = (state = initialState, action: StructureAction) => {
    switch(action.type){
        case StructureActionTypes.FETCH_STRUCTURE:
            return { ...state, loading: true}
        case StructureActionTypes.FETCH_STRUCTURE_SUCCESS:
            console.log("struct",action.payload)
            return {...state, loading: false, structure:action.payload}
        case StructureActionTypes.FETCH_STRUCTURE_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}