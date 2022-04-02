const INITIAL_STATE = {
    currentUser: null 
}

// to set initial value in state... we use = .
// take state and action as parameter in reducer
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default: 
            return state;
    }
}

export default userReducer;