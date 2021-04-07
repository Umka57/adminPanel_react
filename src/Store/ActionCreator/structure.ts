import {StructureAction, StructureActionTypes} from "../../Types/structure";
import {Dispatch} from "react";
import {getStruct} from "../../api";


export const fetchStructure = () => {
    return async (dispatch: Dispatch<StructureAction>) => {
        try{
            dispatch({type: StructureActionTypes.FETCH_STRUCTURE})
            const response = await getStruct()
            dispatch({type: StructureActionTypes.FETCH_STRUCTURE_SUCCESS, payload:response.data})
        } catch (e) {
            dispatch({type: StructureActionTypes.FETCH_STRUCTURE_ERROR, payload: "Ошибка загрузки структурных работников"})
        }
    }
}