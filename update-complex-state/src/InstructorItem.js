import React, { Component } from 'react';

class InstructorItem extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h4>Hobbies: {this.props.hobbies.join(', ')}</h4>
      </div>
    );
  }
}

export default InstructorItem;
