interface Destination {
    user: number,
    id: number,
    name: string,
    performance_indicator: string,
    verification_indicator_value: string,
    verification: number,
    year: number,
    plan: string,
    present_value: string,
    percent_completion: string,
}

export interface DestinationsState {
    destinations: Destination[],
    fetch_loading_destination: boolean,
    fetch_error_destination: null | string,
    push_loading_destination: boolean,
    push_error_destination: null | string,
    userId_destination: null | number
}

export enum DestinationsActionTypes {
    FETCH_DESTINATIONS = "FETCH_DESTINATIONS",
    FETCH_DESTINATIONS_SUCCESS = "FETCH_DESTINATIONS_SUCCESS",
    FETCH_DESTINATIONS_ERROR = "FETCH_DESTINATIONS_ERROR",
    PUSH_DESTINATIONS = "PUSH_DESTINATIONS",
    PUSH_DESTINATIONS_SUCCESS = "PUSH_DESTINATIONS_SUCCESS",
    PUSH_DESTINATIONS_ERROR = "PUSH_DESTINATIONS_ERROR",
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

interface PushDestinationsAction {
    type: DestinationsActionTypes.PUSH_DESTINATIONS;
}
interface PushDestinationsSuccessAction {
    type: DestinationsActionTypes.PUSH_DESTINATIONS_SUCCESS;
    payload: Destination[];
}
interface PushDestinationsErrorAction {
    type: DestinationsActionTypes.PUSH_DESTINATIONS_ERROR;
    payload: string;
}

export type DestinationsAction = FetchDestinationsAction
    | FetchDestinationsSuccessAction
    | FetchDestinationsErrorAction
    | PushDestinationsAction
    | PushDestinationsSuccessAction
    | PushDestinationsErrorAction