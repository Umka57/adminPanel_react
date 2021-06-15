import {fetchUser} from "./singleUser";
import {singleUserReducer} from "../Reducers/singleUserReducer";
import {UserSingleAction, UserSingleActionTypes, UserSingleState} from "../../Types/singleUser";


describe('User manipulations test',()=>{

    test("fetch user returns not undefined",() => {
        let state = {
            user: undefined ,
            loading_user: false,
            error_user: null
        }
        let action = UserSingleActionTypes.FETCH_SINGLE_USER

        let newState = singleUserReducer(state, action)
        console.log(newState)
        expect(newState).toBeDefined()

    })
})

