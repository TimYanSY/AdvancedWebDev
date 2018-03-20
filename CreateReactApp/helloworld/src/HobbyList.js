import React, {Component} from 'react'

class HobbyList extends React.Component {
  render() {
    const Hobbies = ["Sleeping", "Eating", "Cuddling"];
    const style = {fontSize: '1.5em'};
    return (
      <div>
        <ul>
          {Hobbies.map((h, idx) => {
            return <li key={idx} style={style}>{h}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default HobbyList;
