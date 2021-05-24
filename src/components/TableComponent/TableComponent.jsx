import  React, { Component } from 'react'


class TableComponent extends Component {
    render() {
        const items = this.props.items;
        return (
            <div>
            <table>
            <tr>
            <th>Username</th>
            </tr>
            {items.map(item => {
                return (
                    <tr>
                    <td>{item.username}</td>
                    </tr>
                );
            })}
            </table>
            </div>
        );
    }
}

export default TableComponent