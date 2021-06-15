import {
    ProrectorsAction,
    ProrectorsActionType,
    StructureAction,
    StructureActionTypes, UniversityAction, UniversityActionTypes,
    UserAction,
    UserActionTypes
} from "../../Types/user";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.post("/users.getPossible" ,{"positionId":0,"roleId":0})
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS,payload:response.data.response.items})
        } catch (e){
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR,payload:'Loading users error'})
        }
    }
}
export const fetchProrectors = () => {
    return async (dispatch: Dispatch<ProrectorsAction>) => {
        try {
            dispatch({type: ProrectorsActionType.FETCH_PRORECTORS})
            const response = await axios.post("/users.getPossible", {"positionId":2,"roleId":2})
            dispatch({type: ProrectorsActionType.FETCH_PRORECTORS_SUCCESS,payload:response.data.response.items})
        } catch (e){
            dispatch({type: ProrectorsActionType.FETCH_PRORECTORS_ERROR,payload:'Ошибка в загрузке списка проректоров'})
        }
    }
}

export const fetchStructure = () => {
    return async (dispatch: Dispatch<StructureAction>) => {
        try{
            dispatch({type: StructureActionTypes.FETCH_STRUCTURE})
            const response = await axios.post("/users.getPossible",{'positionId':3,'roleId':2})
            dispatch({type: StructureActionTypes.FETCH_STRUCTURE_SUCCESS, payload:response.data.response.items})
        } catch (e) {
            dispatch({type: StructureActionTypes.FETCH_STRUCTURE_ERROR, payload: "Ошибка загрузки структурных работников"})
        }
    }
}

export const fetchUniversity = () => {
    return async (dispatch: Dispatch<UniversityAction>) => {
        try{
            dispatch({type: UniversityActionTypes.FETCH_UNIVERSITY})
            const response = await axios.post("/users.getPossible",{'positionId':5,'roleId':2})
            dispatch({type: UniversityActionTypes.FETCH_UNIVERSITY_SUCCESS, payload:response.data.response.items})
        } catch (e) {
            dispatch({type: UniversityActionTypes.FETCH_UNIVERSITY_ERROR, payload: "Ошибка загрузки универститетских директоров"})
        }
    }
}