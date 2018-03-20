import React, { Component } from 'react';

class List extends Component {
  render() {
    const things = this.props.list.map((ele, idx) => <li key = {idx}>{ele}</li>)
    return (
      <div>
        <ol>
          {things}
        </ol>
      </div>
    );
  }
}

export default List;
