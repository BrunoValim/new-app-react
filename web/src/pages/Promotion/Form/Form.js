import React from 'react';
import { useParams } from 'react-router-dom';

const PagesPromotionForm = () => {
  const { id } = useParams();

    return (
      <div> OLAR 
      { id && <div>Id: {id} </div>}
      </div>
    )

};
 export default PagesPromotionForm;
