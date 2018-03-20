import React, { Component } from 'react';
import './App.css';
import InstructorItem from './InstructorItem';

function randomPosition(array) {
  return Math.floor(Math.random() * array.length);
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout(() => {
      const newInstructors = this.state.instructors.slice();
      const element = newInstructors[randomPosition(newInstructors)];
      element.hobbies = element.hobbies.splice(randomPosition(element.hobbies), 1);
      this.setState({instructors: newInstructors});
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem
        key={index}
        name={instructor.name}
        hobbies={instructor.hobbies}
      />
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
