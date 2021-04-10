interface Structure {
    email: string,
    id: number,
    lastname: string,
    name: string ,
    patronymic: string,
    position: number,
    role: number
    telephone: string,
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
    payload: any[]
}

interface FetchStructuresErrorAction {
    type: StructureActionTypes.FETCH_STRUCTURE_ERROR;
    payload: string;
}

export type StructureAction = FetchStructureAction | FetchStructureSuccessAction | FetchStructuresErrorAction