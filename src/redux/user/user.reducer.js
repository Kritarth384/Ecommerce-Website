import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null 
}

// to set initial value in state... we use = .
// take state and action as parameter in reducer
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default: 
            return state;
    }
}

export default userReducer;