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
      ], newToDoDescription: ''
    };
  }

  deleteTodo(index) {
    let array = this.state.todos.slice();
    array = array.filter(todo => array.indexOf(todo) !== index);
    this.setState({ todos: array });
  }
  handleChange(e){
    this.setState({ newToDoDescription: e.target.value })
  }
  handleSubmit(e){
    e.preventDefault();
    if (!this.state.newToDoDescription) { return }
    const newTodo = { description: this.state.newToDoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newToDoDescription: '' });
  }
  toggleComplete(index){
    console.log('this worked');
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }
  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todos, index) =>
            <ToDo key={ index } description={ todos.description } isComplete={ todos.isCompleted} toggleComplete={ () => this.toggleComplete(index)} deleteTodo={() => this.deleteTodo(index)} />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newToDoDescription } onChange={ (e) => this.handleChange(e) }/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
