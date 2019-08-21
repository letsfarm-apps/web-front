import types from '../types';
const  {login, sign_up}  = types;
const {LOGGING_IN, LOG_IN_ERROR, LOG_IN_SUCCESS} = login;
const {SIGNING_UP, SIGN_UP_ERROR, SIGN_UP_SUCCESS} = sign_up;

const initialState ={
    loginSuccess:false,
    signUpSuccess:false,
    loginError:'',
    signUpError:'',
    user:{},
    loginLoading:false,
    signUpLoading:false,
};

interface ActionType {
    payload:any,
    type:string
}

const authReducer=(state=initialState,action:ActionType) =>{
    switch (action.type) {
        case LOG_IN_ERROR:
            return {
                ...state,
                loginError: action.payload
            };

        case LOGGING_IN:
            return {
                ...state,
                loginLoading: action.payload
            };

        case LOG_IN_SUCCESS:
            return {
                ...state,
                loginSuccess:true,
                user: action.payload
            };
        case SIGN_UP_ERROR:
            return {
                ...state,
                signUpError: action.payload
            };

        case SIGNING_UP:
            return {
                ...state,
                signUpLoading: action.payload
            };

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpSuccess:true,
                user: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;
