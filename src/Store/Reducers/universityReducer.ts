import {UniversityAction, UniversityActionTypes, UniversityState} from "../../Types/university";


const initialState: UniversityState = {
    university: [],
    loading: false,
    error: null
}

export const universityReducer = (state = initialState, action: UniversityAction) => {
    switch(action.type){
        case UniversityActionTypes.FETCH_UNIVERSITY:
            return { ...state, loading: true}
        case UniversityActionTypes.FETCH_UNIVERSITY_SUCCESS:
            return {...state, loading: false, university:action.payload}
        case UniversityActionTypes.FETCH_UNIVERSITY_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}