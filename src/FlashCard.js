import React from 'react';
import { Card } from 'semantic-ui-react'

class FlashCard extends React.Component {

  state = { flipped: false };

  handleClick = () => {
    // debugger
    this.setState( { flipped: !this.state.flipped } );
  }

  render() {
    const { flipped } = this.state;
    const { cardObject: { front, back } } = this.props;
    const { deleteCardFunction: { card } } = this.props;
    // const cardObject = this.props.cardObject;

    return(      
      <Card onClick={this.handleClick}>
        <Card.Content>
          <Card.Header textAlign='center'>{ flipped ? back : front }</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}

export default FlashCard;