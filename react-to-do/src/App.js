import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {description: 'Take trash out', isCompleted: true},
        {description: 'Vacuum house', isCompleted: false},
        {description: 'Do laundry', isCompleted: false}
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todos, index) =>
            <ToDo key={ index } description={ todos.description } isComplete={ todos.isCompleted} />
          )}
        </ul>
      </div>
    );
  }
}

export default App;
