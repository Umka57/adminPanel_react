import * as UserActionCreator from './user'
import * as DestinationActionCreator from './destinations'
import * as ProrectorActionCreator from './prorectors'
import * as StructureActionCreator from './structure'

export default {
    ...UserActionCreator,
    ...DestinationActionCreator,
    ...ProrectorActionCreator,
    ...StructureActionCreator
}