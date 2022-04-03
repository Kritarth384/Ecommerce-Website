import { userActionTypes } from "./user.types"

export const setCurrentUser = user => ({
    // that has to same with case name
    type: userActionTypes.SET_CURRENT_USER,
    payload: user 
})