import React, { Component } from 'react';
import CardsList from './CardsList';
import CardFrom from './CardFrom';
import { Container, Divider, Header } from 'semantic-ui-react';

class App extends Component {
  state = { 
    cards: [
      { id: 0, front: "Front of card 1", back: "This is the back of card 1, This is the back of card 1, This is the back of card 1"},
      { id: 1, front: "Front of card 2", back: "This is the back of card 2, This is the back of card 2, This is the back of card 2"},
    ]
  };

  getId = () => {
    // we are just using this as a helper bc we're not using a database
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addCard = (card) => {
    const { cards } = this.state;
    // const cardId = { card, id: this.getId() }
    this.setState({ cards: [card, ...cards] }); // ...this.state.cards] });
  }

  deleteCard = (del) => {
    debugger
  }

  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>React Flash Cards</Header>
        <Divider />
        <CardFrom addCardFunction={this.addCard} />
        <br />
        <br />
        <CardsList cardsObject={this.state.cards} deleteCardFunction={this.deleteCard} />
      </Container>
    );
  }
}

export default App;
