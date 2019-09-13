import types from '../types';
const {diseases :{
    DISEASES_POST_FAIL,
    DISEASES_POST_LOADING,
    DISEASES_POST_SUCCESS,
    DISEASES_FETCH_SUCCESS,
    DISEASES_FETCH_FAIL,
    DISEASES_FETCH_LOADING
},
disease:{
    GET_DISEASE_SUCCESS,
    GET_DISEASE_LOADING,
    GET_DISEASE_FAIL,
    DELETE_DISEASE_SUCCESS,
    DELETE_DISEASE_LOADING,
    DELETE_DISEASE_FAIL
}
}  = types;

const initialState ={
    isPosting:false,
    isFetching:false,
    postError:"",
    hasPosted:false,
    diseases:[],
    fetchError:"",
    fetchLoading: false,
    disease:{},
    diseaseFetching: false,
    diseaseFetchError: "",
    deleted:false,
    deleting:false,
    deleteError:""
};

interface ActionType {
    payload:any,
    type:string
}

const diseaseReducer=(state=initialState,action:ActionType) =>{
    switch (action.type) {
        case DISEASES_POST_FAIL:
            return {
                ...state,
                postError: action.payload
            };

        case DISEASES_POST_LOADING:
            return {
                ...state,
                isPosting: action.payload
            };

        case DISEASES_POST_SUCCESS:
            return {
                ...state,
                hasPosted:true
            };

        case DISEASES_FETCH_SUCCESS:
            return {
                ...state,
                diseases: action.payload
            };

        case DISEASES_FETCH_FAIL:
            return {
                ...state,
                fetchError: action.payload
            };

        case DISEASES_FETCH_LOADING:
            return {
                ...state,
                isFetching: action.payload
            };

        case GET_DISEASE_FAIL:
            return {
                ...state,
                diseaseFetchError: action.payload
            };

        case GET_DISEASE_SUCCESS:
            return {
                ...state,
                disease: action.payload
            };

        case GET_DISEASE_LOADING:
            return {
                ...state,
                diseaseFetching: action.payload
            };

        case DELETE_DISEASE_SUCCESS:
            return {
                ...state,
                deleted: action.payload
            };

        case DELETE_DISEASE_FAIL:
            return {
                ...state,
                deleteError: action.payload
            };

        case DELETE_DISEASE_LOADING:
            return {
                ...state,
                deleting: action.payload
            };
        default:
            return state;
    }
};

export default diseaseReducer;
