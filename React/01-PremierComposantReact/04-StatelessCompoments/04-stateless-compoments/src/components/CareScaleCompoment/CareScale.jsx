import React from 'react';
import './CareScale.css'

const CareScale = ({ scalevalue }) => {

    const quantityLabel = {
        1: "Débutant",
        2: "Averti",
        3: "Confirmé",
        4: "Chevroné",
        5: "Expert"
    }
    const range = [1, 2, 3, 4, 5];
    const scaleType = <img src="./img/Star.png" alt="star-icon" height="20px" />
    



    return (
        <div Onclick={() => alert(`Cette formation requiert le niveau ${quantityLabel[scalevalue]}`)}>

            {range.map((rangeElement) =>
                scalevalue >= rangeElement ? <span key={rangeElement.toString}>{scaleType}</span>
                    :
                    null


            )}
        </div>
    );
};

export default CareScale;