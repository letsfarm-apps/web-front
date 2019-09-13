import React from 'react';
import DeleteModal from "./commons/DeleteModal";
let Loader = require('react-loaders').Loader;

interface disease {
    disease: any,
    deleting: boolean
    deleteDisease: any
}

const Disease:React.FunctionComponent<disease>=({
    disease,
    deleting,
    deleteDisease
})=>{

    return (
        <div className="card">
            <div className="card-body">
                <div className="mb-3">
                    <div className="row align-items-center">
                        <div className="col ml-n2">
                            <h4 className="card-title mb-1">
                                <a href={`/platform/disease/${disease.id}`}>{disease.title}</a>
                            </h4>

                            <p className="card-text small text-muted">
                                <span className="fe fe-clock"/>
                                <time dateTime="2018-05-24"> {new Date(disease.createdAt).toDateString()}</time>
                            </p>

                        </div>
                        <div className="col-auto">
                            <span className="fe fe-edit mr-4"/>
                            <DeleteModal deleting={deleting} disease={disease} deleteDisease={deleteDisease}/>
                        </div>

                    </div>
                    <div className="mb-3" style={{marginLeft:'3px', marginTop:'5px'}} dangerouslySetInnerHTML={{__html:disease.description}}/>

                </div>
            </div>
        </div>
    );
};

interface DiseasesListType {
    diseases: Array<object>
    loading: boolean
    deleting: boolean
    deleteDisease: any
}

const DiseasesList:React.FunctionComponent<DiseasesListType> = ({
    diseases,
    loading,
    deleting,
    deleteDisease
})=>{
    return (
        <>
            {!loading?
                diseases.map((disease,index)=>(
                    <Disease deleteDisease={deleteDisease} disease={disease} deleting={deleting} key={`${index}`}/>
                ))
            :
                <div className="col-12" style={{display:'flex', marginTop:'10%', marginLeft:'35%'}}>
                    <Loader type="ball-spin-fade-loader" active/>
                </div>
            }
        </>
    );
};

export default DiseasesList;
