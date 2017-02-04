import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm} from './components/todo'
import {TodoList} from './components/todo'
import {addTodo, generateId} from './lib/todoHelpers'

class App extends Component {
  state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an awesome App', isComplete: false},
        {id: 3, name: 'Ship it', isComplete: false},
      ],
      currentTodo: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: ''
    })
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name.'
    })
  }

  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    }) 
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit: this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}/>
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
