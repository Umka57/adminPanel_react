import * as UserActionCreator from './users'
import * as DestinationActionCreator from './destinations'
import * as ProrectorsActionCreator from './users'
import * as StructureActionCreator from './users'
import * as RolesActionCreator from './roles'
import * as PositionsActionCreator from './positions'
import * as SingleUserActionCreator from './singleUser'
import * as UniversityActionCreator from './users'
import * as DestinationsValuesActionCreator from './destinationsValues'
import * as Login from './login'

export default {
    ...Login,
    ...UserActionCreator,
    ...DestinationActionCreator,
    ...ProrectorsActionCreator,
    ...StructureActionCreator,
    ...RolesActionCreator,
    ...PositionsActionCreator,
    ...SingleUserActionCreator,
    ...UniversityActionCreator,
    ...DestinationsValuesActionCreator
}