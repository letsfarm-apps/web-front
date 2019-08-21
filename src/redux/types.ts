const LOGGING_IN= "LOGGING_IN";
const LOG_IN_ERROR= "LOG_IN_ERROR";
const LOG_IN_SUCCESS= "LOG_IN_SUCCESS";

const SIGNING_UP= "SIGNING_UP";
const SIGN_UP_ERROR= "SIGN_UP_ERROR";
const SIGN_UP_SUCCESS= "SIGN_UP_SUCCESS";


const types={
    login: {
        LOGGING_IN,
        LOG_IN_ERROR,
        LOG_IN_SUCCESS
    },
    sign_up:{
        SIGNING_UP: SIGNING_UP,
        SIGN_UP_ERROR: SIGN_UP_ERROR,
        SIGN_UP_SUCCESS: SIGN_UP_SUCCESS
    }
};

export default types;
