interface DestinationValues {
    id: number,
    destination: number,
    week: number,
    value: number
}

export interface DestinationsValuesState {
    destinationValues: DestinationValues[],
    loading: boolean,
    error: null | string,
    userId: null | number
}

export enum DestinationsValuesActionTypes {
    FETCH_DESTINATIONS_VALUES = "FETCH_DESTINATIONS_VALUES",
    FETCH_DESTINATIONS_VALUES_SUCCESS = "FETCH_DESTINATIONS_VALUES_SUCCESS",
    FETCH_DESTINATIONS_VALUES_ERROR = "FETCH_DESTINATIONS_VALUES_ERROR",
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

export type DestinationsValuesAction = FetchDestinationsValuesAction | FetchDestinationsValuesSuccessAction | FetchDestinationsValuesErrorAction