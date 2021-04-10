interface Destination {
    id: number,
    name: string,
    percent_completion: string,
    performance_indicator: string,
    plan: string,
    present_value: string,
    user: number,
    verification_indicator_value: string,
    year: number
}

export interface DestinationsState {
    destinations: Destination[],
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
    payload: Destination[];
}
interface FetchDestinationsErrorAction {
    type: DestinationsActionTypes.FETCH_DESTINATIONS_ERROR;
    payload: string;
}

export type DestinationsAction = FetchDestinationsAction | FetchDestinationsSuccessAction | FetchDestinationsErrorAction