export interface User {
    id: number,
    lastname: string,
    name: string ,
    patronymic: string,
    telephone: string,
    email: string,
    position: number,
    role: number,
    img_link: string,
    img_is_local: boolean
}

export interface UserState{
    users:User[];
    loading_user:boolean;
    error_user:null | string;
}

export interface StructureState {
    structure: User[],
    loading: boolean,
    error: null | string
}

export interface ProrectorsState {
    prorectors: User[],
    loading: boolean,
    error: null | string,
}

export interface UniversityState {
    university: User[],
    loading: boolean,
    error: null | string
}

export enum UserActionTypes {
    FETCH_USERS= "FETCH_USERS",
    FETCH_USERS_SUCCESS= "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR= "FETCH_USERS_ERROR",
}

export enum ProrectorsActionType {
    FETCH_PRORECTORS = "FETCH_PRORECTORS",
    FETCH_PRORECTORS_SUCCESS = "FETCH_PRORECTORS_SUCCESS",
    FETCH_PRORECTORS_ERROR = "FETCH_PRORECTORS_ERROR",
}

export enum StructureActionTypes {
    FETCH_STRUCTURE = "FETCH_STRUCTURE",
    FETCH_STRUCTURE_SUCCESS = "FETCH_STRUCTURE-SUCCESS",
    FETCH_STRUCTURE_ERROR = "FETCH_STRUCTURE-ERROR",
}

export enum UniversityActionTypes {
    FETCH_UNIVERSITY = "FETCH_UNIVERSITY",
    FETCH_UNIVERSITY_SUCCESS = "FETCH_UNIVERSITY-SUCCESS",
    FETCH_UNIVERSITY_ERROR = "FETCH_UNIVERSITY-ERROR",
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
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

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction
export type ProrectorsAction = FetchProrectorsAction | FetchProrectorsSuccessAction | FetchProrectorsErrorAction
export type StructureAction = FetchStructureAction | FetchStructureSuccessAction | FetchStructuresErrorAction
export type UniversityAction = FetchUniversityAction | FetchUniversitySuccessAction | FetchUniversityErrorAction
