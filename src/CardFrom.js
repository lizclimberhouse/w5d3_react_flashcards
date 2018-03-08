import React from 'react';
import { Button, Form } from 'semantic-ui-react'

class CardFrom extends React.Component {
  state = { front: '', back: '' };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
    // debugger
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCardFunction(this.state); //turns into "card" variable in App.js addCard function
    this.setState({ front: '', back: ''});
  }

  render() {
    const { addCardFunction } = this.props;
    const { front, back } = this.state;
    return(
      <Form onSubmit={this.handleSubmit}> 
        <Form.Group>
          <Form.Input name='front' value={front} onChange={this.handleChange} label='Front' placeholder='Front' />
          <Form.Input name='back' value={back} onChange={this.handleChange} label='Back' placeholder='Back' />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default CardFrom;
