import React, { Component } from 'react';
import './App.css';
import List from './list'

class App extends Component {
  static defaultProps = {
    myList: ['clean room', 'study js']
  }

  constructor(props) {
    super(props);
    this.state = {
      myList: this.props.myList
    }
  }

  render() {
    return (
      <div>
        <List
          list={this.state.myList}
        />
        <form onSubmit={
          (e) => {
            e.preventDefault();
            const myList = [...this.state.myList, this.state.inputText];
            this.setState({myList, inputText: ''});
          }
        }>
          <input
            type="text"
            name="inputText"
            value={this.state.inputText}
            onChange={(e) => {
              this.setState({inputText: e.target.value})
            }}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default App;
