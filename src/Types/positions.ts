interface Positions {
    id: number,
    position_name: string
}
export interface PositionsState {
    positions: Positions[],
    loading_positions: boolean,
    error_positions: null | string
}

export enum PositionsActionTypes {
    FETCH_POSITIONS = "FETCH_POSITIONS",
    FETCH_POSITIONS_SUCCESS = "FETCH_POSITIONS-SUCCESS",
    FETCH_POSITIONS_ERROR = "FETCH_POSITIONS-ERROR"
}
interface FetchPositionsAction {
    type: PositionsActionTypes.FETCH_POSITIONS;
}

interface FetchPositionsSuccessAction{
    type: PositionsActionTypes.FETCH_POSITIONS_SUCCESS;
    payload: any[]
}

interface FetchPositionsErrorAction {
    type: PositionsActionTypes.FETCH_POSITIONS_ERROR;
    payload: string;
}

export type PositionsAction = FetchPositionsAction | FetchPositionsSuccessAction | FetchPositionsErrorAction