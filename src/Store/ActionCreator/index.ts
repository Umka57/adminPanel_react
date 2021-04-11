import * as UserActionCreator from './users'
import * as DestinationActionCreator from './destinations'
import * as ProrectorsActionCreator from './prorectors'
import * as StructureActionCreator from './structure'
import * as RolesActionCreator from './roles'
import * as PositionsActionCreator from './positions'
import * as SingleUserActionCreator from './singleUser'
import * as UniversityActionCreator from './university'

export default {
    ...UserActionCreator,
    ...DestinationActionCreator,
    ...ProrectorsActionCreator,
    ...StructureActionCreator,
    ...RolesActionCreator,
    ...PositionsActionCreator,
    ...SingleUserActionCreator,
    ...UniversityActionCreator
}