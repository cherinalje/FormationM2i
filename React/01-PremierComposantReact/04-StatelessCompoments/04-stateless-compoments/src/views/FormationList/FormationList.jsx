import React from 'react';
import FormationCard from '../../components/FormationCard/FormationCard';
import {coursList} from '../../datas/CoursList'
import './FormationList.css'


const FormationList = () => {
    return (
        <div>
            <div className="card-container">
                {coursList.map((coursIterer,index)=>  
                <React.Fragment key = {index}>
                        <FormationCard cours={coursIterer} index={index}/>
                </React.Fragment>              
                
                )}
            </div>

        </div>
    );
}

export default FormationList;