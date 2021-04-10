interface Prorectors {
    email: string,
    id: number,
    lastname: string,
    name: string ,
    patronymic: string,
    position: number,
    role: number
    telephone: string,
}

export interface ProrectorsState {
    prorectors: Prorectors[],
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