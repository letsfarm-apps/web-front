import React from 'react';
let Loader = require('react-loaders').Loader;

interface disease {
    disease: any,
}

const Disease:React.FunctionComponent<disease>=({
    disease
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
                            <span className="fe fe-trash-2 mr-4" /*onClick={()=>deleteDisease(disease.id)}*//>
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
}

const DiseasesList:React.FunctionComponent<DiseasesListType> = ({
    diseases,
    loading
})=>{
    return (
        <>
            {!loading?
                diseases.map((disease,index)=>(
                    <Disease disease={disease} key={`${index}`}/>
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
