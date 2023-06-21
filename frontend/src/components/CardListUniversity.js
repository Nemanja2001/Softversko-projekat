import React from 'react';
import axios from 'axios';
import Card from './CardUniversity';

class CardList extends React.Component {
  constructor(props){
    super(props);
    this.state = {Data:[]};
  }

  dobijUniverzitete(){
    axios.get('http://localhost:3001/universities')
      .then(response => {
        this.setState({Data:response.data});
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  render(){
    this.dobijUniverzitete()
    return (
      <div className="card-list">
        {this.state.Data.map((x) => (
          <Card ime={x.Ime} text={x.Opis} id={x.ID}/>
        ))}
      </div>
    );
  }
};

export default CardList;
