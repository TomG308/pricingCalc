import React, { Component } from 'react';

import InputComponent from './InputComponent/formComponent.jsx'
import TableComponent from './TableComponent/TableComponent.jsx'

class priceCalc extends Component {

    constructor() {
        super()
    
        this.state = {
          input: '',
          items: []
        }
      }

      handleFormSubmit = (e) => {
        e.preventDefault();
    
        let items = [...this.state.items];
    
        items.push({userInput: this.state.userInput});
    
        this.setState({
            items,
            input: ''
          });
      }

      handleInputChange = (e) => {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;
    
        this.setState({
          [name]: value
        })
      };

    render() {
        return (
          <div className>
            <h1>ho1 priceCalc</h1>
            <InputComponent 
              handleFormSubmit={ this.handleFormSubmit } 
              handleInputChange={ this.handleInputChange } 
              newUserInput={ this.state.userInput } 
            />
            <TableComponent items={ this.state.items }/>
          </div>
        );
      }
    }

export default priceCalc;