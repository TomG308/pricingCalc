import  React, { Component } from 'react'


class TableComponent extends Component {
    render() {
      const items = this.props.items;
      return (
        <div id="Table">
          <table>
            <tbody>
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
            </tbody>
          </table>
        </div>
      );
    }
  }

export default TableComponent