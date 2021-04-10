import * as UserActionCreator from './users'
import * as DestinationActionCreator from './destinations'
import * as ProrectorsActionCreator from './prorectors'
import * as StructureActionCreator from './structure'
import * as RolesActionCreator from './roles'
import * as PositionsActionCreator from './positions'

export default {
    ...UserActionCreator,
    ...DestinationActionCreator,
    ...ProrectorsActionCreator,
    ...StructureActionCreator,
    ...RolesActionCreator,
    ...PositionsActionCreator
}