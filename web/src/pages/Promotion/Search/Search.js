import React, {useEffect, useState} from 'react';
import PromotionCard from 'components/promotion/Card/Card';
import axios from 'axios';
const BASE_URL = 'http://localhost:5000/'



const PagesPromotionSearch = () => {
  const [promotions, setPromotion] = useState([]);

  useEffect(()  => {
    axios.get(BASE_URL + 'promotions?_embed=comments').then(response => {
      setPromotion(response.data);
    });
  }, []);


    return  (
    <div
      className="App"
      style={{
        maxWidth: 800,
        margin: '30px auto',
      }}
    >
      {promotions.map(promotion => (
        <PromotionCard promotion={promotion} />
      ))}

    </div>);
};

export default PagesPromotionSearch;
