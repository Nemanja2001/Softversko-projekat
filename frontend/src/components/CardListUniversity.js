import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './CardUniversity';

const CardList = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/universities')
      .then(response => {
        setResponseData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="card-list">
      {responseData.map((x) => (
        <Card ime={x.Ime} text={x.Opis} id={x.ID}/>
      ))}
    </div>
  );
};

export default CardList;
