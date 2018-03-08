import React from 'react';
import FlashCard from './FlashCard';

const CardsList = (props) => {

  handleDel = (event) => {
    event.preventDefault();
    this.props.deleteCardFunction(this.state);
  }

  return props.cardsObject.map(card => {
    return <FlashCard key={card.id} cardObject={card} deleteCardFunction={del.handleDel}/>
  })
  // return(
  //   <div>
  //     CardsList Component
      
  //   </div>
  // )
}

export default CardsList;