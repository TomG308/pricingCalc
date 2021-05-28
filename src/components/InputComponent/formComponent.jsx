import React, { Component } from 'react';

class inputComponent extends Component {
    render() {
      return (
        <div>
          <h2>Ho1 form component</h2>
          <h3>Add a new item to the table:</h3>  
          <form onSubmit={this.props.handleFormSubmit}>
            <label htmlFor="username">
            User input:
            <input 
              id="userInput" 
              value={this.props.newUserInput} 
              type="text" 
              name="userInput" 
              onChange={this.props.handleInputChange} 
            />
            </label>
            <button type="submit" value="Submit">Add Item</button>
          </form>
        </div>
      );
    }
  }

  export default inputComponent