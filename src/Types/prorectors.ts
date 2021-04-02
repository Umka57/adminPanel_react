export interface ProrectorsState {
    prorectors: any[],
    loading: boolean,
    error: null | string,
}

export enum ProrectorsActionType {
    FETCH_PRORECTORS = "FETCH_PRORECTORS",
    FETCH_PRORECTORS_SUCCESS = "FETCH_PRORECTORS_SUCCESS",
    FETCH_PRORECTORS_ERROR = "FETCH_PRORECTORS_ERROR",
}

interface FetchProrectorsAction {
    type: ProrectorsActionType.FETCH_PRORECTORS;
}
interface FetchProrectorsSuccessAction {
    type: ProrectorsActionType.FETCH_PRORECTORS_SUCCESS;
    payload: any[];
}
interface FetchProrectorsErrorAction {
    type: ProrectorsActionType.FETCH_PRORECTORS_ERROR;
    payload: string;
}

export type ProrectorsAction = FetchProrectorsAction | FetchProrectorsSuccessAction | FetchProrectorsErrorAction