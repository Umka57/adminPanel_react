import {RolesAction, RolesActionTypes, RolesState} from "../../Types/roles";


const initialState: RolesState = {
    roles: [],
    loading_roles: false,
    error_roles: null
}

export const rolesReducer = (state = initialState, action: RolesAction) => {
    switch(action.type){
        case RolesActionTypes.FETCH_ROLES:
            return {...state,loading_roles:true}
        case RolesActionTypes.FETCH_ROLES_SUCCESS:
            return {...state, loading_roles:false, roles:action.payload}
        case RolesActionTypes.FETCH_ROLES_ERROR:
            return { ...state,loading_roles:false,error_roles:action.payload}
        default:
            return state
    }
}