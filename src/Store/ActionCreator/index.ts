import * as UserActionCreator from './user'
import * as DestinationActionCreator from './destinations'
import * as ProrectorActionCreator from './prorectors'

export default {
    ...UserActionCreator,
    ...DestinationActionCreator,
    ...ProrectorActionCreator
}