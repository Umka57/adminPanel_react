export interface DestinationsState {
    destinations: any[],
    loading: boolean,
    error: null | string,
    userId: null | number
}

export enum DestinationsActionTypes {
    FETCH_DESTINATIONS = "FETCH_DESTINATIONS",
    FETCH_DESTINATIONS_SUCCESS = "FETCH_DESTINATIONS_SUCCESS",
    FETCH_DESTINATIONS_ERROR = "FETCH_DESTINATIONS_ERROR",
}

interface FetchDestinationsAction {
    type: DestinationsActionTypes.FETCH_DESTINATIONS;
}
interface FetchDestinationsSuccessAction {
    type: DestinationsActionTypes.FETCH_DESTINATIONS_SUCCESS;
    payload: any[];
}
interface FetchDestinationsErrorAction {
    type: DestinationsActionTypes.FETCH_DESTINATIONS_ERROR;
    payload: string;
}

export type DestinationsAction = FetchDestinationsAction | FetchDestinationsSuccessAction | FetchDestinationsErrorAction