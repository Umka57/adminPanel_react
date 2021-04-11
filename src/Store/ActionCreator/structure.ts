import {StructureAction, StructureActionTypes} from "../../Types/structure";
import {Dispatch} from "react";
import {getStruct} from "../../api";
import axios from "axios";


export const fetchStructure = () => {
    return async (dispatch: Dispatch<StructureAction>) => {
        try{
            dispatch({type: StructureActionTypes.FETCH_STRUCTURE})
            const response = await axios.post("/users.getPossible",{'positionId':3,'roleId':2})
            dispatch({type: StructureActionTypes.FETCH_STRUCTURE_SUCCESS, payload:response.data.response})
        } catch (e) {
            dispatch({type: StructureActionTypes.FETCH_STRUCTURE_ERROR, payload: "Ошибка загрузки структурных работников"})
        }
    }
}