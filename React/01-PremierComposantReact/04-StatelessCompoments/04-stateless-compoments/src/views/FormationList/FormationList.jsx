import React from 'react';
import FormationCard from '../../components/FormationCard/FormationCard';
import {coursList} from '../../datas/CoursList'
import './FormationList.css'


const FormationList = () => {
    const [activeCategory , setActiveCategory] = useState('');

    const categoryList = coursList.map(
        (acc, cours)=>acc.includes(cours.category)? acc : acc.concat(cours.category)
        )
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