import {
    ProrectorsAction,
    ProrectorsActionType, ProrectorsState,
    StructureAction, StructureActionTypes, StructureState, UniversityAction, UniversityActionTypes, UniversityState,
    UserAction,
    UserActionTypes,
    UserState
} from "../../Types/user";

const initialUserState: UserState = {
    users: [],
    loading_user: false,
    error_user: null
}

export const usersReducer = (state = initialUserState, action: UserAction): UserState => {
    switch(action.type){
        case UserActionTypes.FETCH_USERS:
           return {...state, loading_user: true}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state,loading_user:false, users:action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, loading_user:false,error_user:action.payload}
        default:
            return state
    }
}
const initialProrectorsState: ProrectorsState = {
    prorectors: [],
    loading: false,
    error: null
}

export const prorectorsReducer = (state= initialProrectorsState,action: ProrectorsAction) => {
    switch (action.type){
        case ProrectorsActionType.FETCH_PRORECTORS:
            return {...state,loading:true}
        case ProrectorsActionType.FETCH_PRORECTORS_SUCCESS:
            return {...state,loading: false,prorectors: action.payload}
        case ProrectorsActionType.FETCH_PRORECTORS_ERROR:
            return {...state,loading: false,error: action.payload}
        default:
            return state
    }
}

const initialStructureState: StructureState = {
    structure: [],
    loading: false,
    error: null
}

export const structureReducer = (state = initialStructureState, action: StructureAction) => {
    switch(action.type){
        case StructureActionTypes.FETCH_STRUCTURE:
            return { ...state, loading: true}
        case StructureActionTypes.FETCH_STRUCTURE_SUCCESS:
            return {...state, loading: false, structure:action.payload}
        case StructureActionTypes.FETCH_STRUCTURE_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}

const initialUniversityState: UniversityState = {
    university: [],
    loading: false,
    error: null
}

export const universityReducer = (state = initialUniversityState, action: UniversityAction) => {
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