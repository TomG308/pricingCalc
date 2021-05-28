import  React, { Component } from 'react'


class TableComponent extends Component {
    render() {
        const items = this.props.items;
        return (
            <div>
                <h2>Ho1 table component</h2>
            <table>
            <tr>
            <th>User Input</th>
            </tr>
            {items.map(item => {
                return (
                    <tr>
                    <td>{item.userInput}</td>
                    </tr>
                );
            })}
            </table>
            </div>
        );
    }
}

export default TableComponent