import * as UserActionCreator from './user'
import * as DestinationActionCreator from './destinations'
import * as ProrectorsActionCreator from './prorectors'
import * as StructureActionCreator from './structure'

export default {
    ...UserActionCreator,
    ...DestinationActionCreator,
    ...ProrectorsActionCreator,
    ...StructureActionCreator
}