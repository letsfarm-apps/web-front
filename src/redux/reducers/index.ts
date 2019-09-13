import {combineReducers} from "redux";
import authReducer from "./authReducer";
import diseaseReducer from "./diseaseReducer";

const reducer = combineReducers({
    auth:authReducer,
    diseases: diseaseReducer
});

export default reducer;
