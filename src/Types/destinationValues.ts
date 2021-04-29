interface DestinationValues {
    id: number,
    destination: number,
    quarter: number,
    week: number,
    value: number,
    is_verified: number
}

export interface DestinationsValuesState {
    destinationValues: DestinationValues[],
    fetch_loading_destinations_values: boolean,
    fetch_error_destinations_values: null | string,
    push_loading_destinations_values: boolean,
    push_error_destinations_values: null | string,
    userId_destinations_values: null | number
}

export enum DestinationsValuesActionTypes {
    FETCH_DESTINATIONS_VALUES = "FETCH_DESTINATIONS_VALUES",
    FETCH_DESTINATIONS_VALUES_SUCCESS = "FETCH_DESTINATIONS_VALUES_SUCCESS",
    FETCH_DESTINATIONS_VALUES_ERROR = "FETCH_DESTINATIONS_VALUES_ERROR",
    PUSH_DESTINATIONS_VALUES = "PUSH_DESTINATIONS_VALUES",
    PUSH_DESTINATIONS_VALUES_SUCCESS = "PUSH_DESTINATIONS_VALUES_SUCCESS",
    PUSH_DESTINATIONS_VALUES_ERROR = "PUSH_DESTINATIONS_VALUES_ERROR",
}

interface FetchDestinationsValuesAction {
    type: DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES;
}
interface FetchDestinationsValuesSuccessAction {
    type: DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES_SUCCESS;
    payload: DestinationValues[];
}
interface FetchDestinationsValuesErrorAction {
    type: DestinationsValuesActionTypes.FETCH_DESTINATIONS_VALUES_ERROR;
    payload: string;
}

interface PushDestinationsValuesAction {
    type: DestinationsValuesActionTypes.PUSH_DESTINATIONS_VALUES;
}
interface PushDestinationsValuesSuccessAction {
    type: DestinationsValuesActionTypes.PUSH_DESTINATIONS_VALUES_SUCCESS;
    payload: DestinationValues[];
}
interface PushDestinationsValuesErrorAction {
    type: DestinationsValuesActionTypes.PUSH_DESTINATIONS_VALUES_ERROR;
    payload: string;
}

export type DestinationsValuesAction = FetchDestinationsValuesAction
    | FetchDestinationsValuesSuccessAction
    | FetchDestinationsValuesErrorAction
    | PushDestinationsValuesAction
    | PushDestinationsValuesSuccessAction
    | PushDestinationsValuesErrorAction