import {
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    RESET_USER
} from '../actions/user'

const INITIAL_STATE = {user: null, status: null , error: null, loading: false}

export default function(state = INITIAL_STATE, action){
    let error;
    switch (action.type) {
        case SIGNUP_USER: // sign up user, set loading = true and make loading = false
            return { ...state, user: null, status: 'signup', error: null, loading: true }
        case SIGNUP_USER_SUCCESS: // return authenticated user, make loading = false and status = authenticated
            return { ...state, user: action.payload.data, status: 'authenticated', error: null, loading: false } //<-- authenticated
        case SIGNUP_USER_FAILURE: // return error and make loading = false
            error = action.payload.data || {message: action.payload.data} // 2nd one is network or server down errors
            return { ...state, user: null, status: 'signup', error: error, loading : false}

        case RESET_USER:// reset authenticated user to initial state
            return { ...state, user: null, status:null, error:null, loading: false};
            
        default:
            return state
    }
}