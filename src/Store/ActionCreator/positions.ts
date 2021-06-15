import {Dispatch} from "redux";
import axios from "axios";
import {PositionsAction, PositionsActionTypes} from "../../Types/positions";

export const fetchPositions = () => {
    return async (dispatch: Dispatch<PositionsAction>) => {
        try {
            dispatch({type: PositionsActionTypes.FETCH_POSITIONS})
            const response = await axios.get("/positions.getPossible")
            dispatch({type: PositionsActionTypes.FETCH_POSITIONS_SUCCESS, payload: response.data.response})
        } catch (e) {
            dispatch({type: PositionsActionTypes.FETCH_POSITIONS_ERROR, payload: 'Ошибка в загрузке должностей'})
        }
    }
}