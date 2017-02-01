import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an awesome App', isComplete: false},
        {id: 3, name: 'Ship it', isComplete: false},
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(evt) {
    this.setState({
      currentTodo: evt.target.value
    }) 
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <p className="Todo-App">
          <form>
            <input type="text" onChange={this.handleInputChange} value={this.state.currentTodo}>
            </input>
          </form>
          <div className="Todo-List">
          <ul>
            {this.state.todos.map(todo => 
              <li key={todo.id}>
                <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name} 
              </li>)}
              
          </ul>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
