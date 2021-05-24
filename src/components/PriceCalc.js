import React, { Component } from 'react';

import InputComponent from './InputComponent/InputComponent.jsx'
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
    
        items.push({username: this.state.username});
    
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

    // render() {
    //     return(
    //         <div>
    //             <h2>H0i! priceCalc component</h2>
    //         <form>
    //             <label>
    //                 testName:
    //                 <input type="text" name="name" />
    //             </label>
    //             <input type="submit" value="submit" />    
    //         </form>
    //         </div>
    //     )
    // }

    render() {
        return (
          <div className>
            <h1>ho1 priceCalc</h1>
            <InputComponent 
              handleFormSubmit={ this.handleFormSubmit } 
              handleInputChange={ this.handleInputChange } 
              newUsername={ this.state.username } 
            />
            <TableComponent items={ this.state.items }/>
          </div>
        );
      }
    }

export default priceCalc;