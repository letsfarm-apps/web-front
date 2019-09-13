import axios from 'axios';
import types from '../types';
const  {login:
    {LOGGING_IN, LOG_IN_ERROR, LOG_IN_SUCCESS}
    ,
    sign_up:
        {SIGNING_UP, SIGN_UP_ERROR, SIGN_UP_SUCCESS}
}  = types;

const {REACT_APP_API_URL} = process.env;

const action=(type:string,payload:any)=>{
    return {
        type,
        payload
    }
};

const loginAction = (loginData:Object)=>async (dispatch:any)=>{
    dispatch(action(LOGGING_IN, true));
    return await axios.post(`${REACT_APP_API_URL}/user/login/`,loginData).then((response)=>{
        dispatch(action(LOGGING_IN, false));
        const {token } = response.data;
        const {email, display_name, role} = response.data.user;
        const user={
            email,
            display_name,
            role,
            token
        };
        dispatch(action(LOG_IN_SUCCESS,user));
    }).catch((error)=>{
        dispatch(action(LOGGING_IN, false));
        dispatch(action(LOG_IN_ERROR,'login failed, check your email or password'));
    })
};

const signUpAction=(data:Object)=> async (dispatch:any)=> {
    dispatch(action(SIGNING_UP, true));
    return await axios.post(`${REACT_APP_API_URL}/user`, data)
        .then(response => {
                const {token} = response.data;
                const {email, display_name, role} = response.data.user;
                const user = {
                    email,
                    display_name,
                    role,
                    token
                };
                dispatch(action(SIGN_UP_SUCCESS, user));
                dispatch(action(SIGNING_UP, false))
        }).catch((error) => {
            dispatch(action(SIGN_UP_ERROR, 'sign up failed, check your email or password'));
            dispatch(action(SIGNING_UP, false));
        });
};

export {
    loginAction,
    signUpAction
};

