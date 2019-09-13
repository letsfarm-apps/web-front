import types from '../types';
import axios from "axios";
const {diseases :{
    DISEASES_POST_FAIL,
    DISEASES_POST_LOADING,
    DISEASES_POST_SUCCESS,
    DISEASES_FETCH_SUCCESS,
    DISEASES_FETCH_FAIL,
    DISEASES_FETCH_LOADING
},
    disease:{
    GET_DISEASE_FAIL,
    GET_DISEASE_LOADING,
    GET_DISEASE_SUCCESS
}

}  = types;

const dispatchedInfo = (type: string, payload: any) => (
    {
        type,
        payload
    }
);
const {REACT_APP_API_URL} = process.env;

interface diseaseType {
    category: number,
    description: string,
    signs: string,
    symptoms: string,
    title: string,
    treatment: string
}

const postDisease=(data:diseaseType)=>async (dispatch:any)=>{
    const token = localStorage.getItem('token');
    dispatch(dispatchedInfo(DISEASES_POST_LOADING, true));
    await axios.post(`${REACT_APP_API_URL}/disease/${data.category}/create`,data,
        {headers: {Authorization:`Bearer ${token}`}}
        ).then((response)=>{
        dispatch(dispatchedInfo(DISEASES_POST_SUCCESS, response.data));
        dispatch(dispatchedInfo(DISEASES_POST_LOADING, false));
    }).catch((error)=>{
        dispatch(dispatchedInfo(DISEASES_POST_FAIL, error.response.data));
        dispatch(dispatchedInfo(DISEASES_POST_LOADING, false));
    })
};

const fetchDiseases=()=>async (dispatch:any)=>{
    dispatch(dispatchedInfo(DISEASES_FETCH_LOADING, true));
    await axios.get(`${REACT_APP_API_URL}/diseases`
    ).then((response)=>{
        dispatch(dispatchedInfo(DISEASES_FETCH_SUCCESS, response.data.diseases));
        dispatch(dispatchedInfo(DISEASES_FETCH_LOADING, false));
    }).catch((error)=>{
        dispatch(dispatchedInfo(DISEASES_FETCH_FAIL, error.response));
        dispatch(dispatchedInfo(DISEASES_FETCH_LOADING, false));
    })
};

const fetchDiseaseDetails= (id:number)=> async (dispatch:any)=>{
    dispatch(dispatchedInfo(GET_DISEASE_LOADING, true));
    await axios.get(`${REACT_APP_API_URL}/disease/${id}`
    ).then((response)=>{
        dispatch(dispatchedInfo(GET_DISEASE_SUCCESS, response.data.disease));
        dispatch(dispatchedInfo(GET_DISEASE_LOADING, false));
    }).catch((error)=>{
        dispatch(dispatchedInfo(GET_DISEASE_FAIL, error.response));
        dispatch(dispatchedInfo(GET_DISEASE_LOADING, false));
    })
};

export {
    postDisease,
    fetchDiseases,
    fetchDiseaseDetails
}
