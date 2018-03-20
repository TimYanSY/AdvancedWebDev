import React, { Component } from 'react';

class Box extends Component {

  render() {
    const style = {
      backgroundColor: this.props.color,
      width: 200,
      height: 200,
      display: 'inline-block',
    };
    return <div style={style}>{this.props.color}</div>
  }
};

export default Box;
