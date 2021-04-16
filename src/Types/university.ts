interface University {
    email: string,
    id: number,
    lastname: string,
    name: string ,
    patronymic: string,
    position: number,
    role: number
    telephone: string,
}
export interface UniversityState {
    university: University[],
    loading: boolean,
    error: null | string
}

export enum UniversityActionTypes {
    FETCH_UNIVERSITY = "FETCH_UNIVERSITY",
    FETCH_UNIVERSITY_SUCCESS = "FETCH_UNIVERSITY-SUCCESS",
    FETCH_UNIVERSITY_ERROR = "FETCH_UNIVERSITY-ERROR",
}

interface FetchUniversityAction {
    type: UniversityActionTypes.FETCH_UNIVERSITY;
}

interface FetchUniversitySuccessAction{
    type: UniversityActionTypes.FETCH_UNIVERSITY_SUCCESS;
    payload: any[]
}

interface FetchUniversityErrorAction {
    type: UniversityActionTypes.FETCH_UNIVERSITY_ERROR;
    payload: string;
}

export type UniversityAction = FetchUniversityAction | FetchUniversitySuccessAction | FetchUniversityErrorAction