interface Structure {
    id: number,
    lastname: string,
    name: string ,
    patronymic: string,
    telephone: string,
    email: string,
    position: number,
    role: number
}
export interface StructureState {
    structure: Structure[],
    loading: boolean,
    error: null | string
}

export enum StructureActionTypes {
    FETCH_STRUCTURE = "FETCH_STRUCTURE",
    FETCH_STRUCTURE_SUCCESS = "FETCH_STRUCTURE-SUCCESS",
    FETCH_STRUCTURE_ERROR = "FETCH_STRUCTURE-ERROR",
}

interface FetchStructureAction {
    type: StructureActionTypes.FETCH_STRUCTURE;
}

interface FetchStructureSuccessAction{
    type: StructureActionTypes.FETCH_STRUCTURE_SUCCESS;
    payload: Structure[]
}

interface FetchStructuresErrorAction {
    type: StructureActionTypes.FETCH_STRUCTURE_ERROR;
    payload: string;
}

export type StructureAction = FetchStructureAction | FetchStructureSuccessAction | FetchStructuresErrorAction