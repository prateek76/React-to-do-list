import React, { Component } from 'react';
import Header from './components/layout/Header';
import './App.css';
import Todos from'./components/Todos';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'AFC asian cup',
        completed: true
      },
      {
        id: 2,
        title: 'La liga',
        completed: false
      },
      {
        id: 3,
        title: 'Premier league',
        completed: true
      },
      {
        id: 4,
        title: 'Uefa champions legue',
        completed: false
      }
    ]
  }

  //toggle todo
  markComplete = (id) => {
    console.log(id);
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) } );
  }

  //delete Todo
  delTodo = (id) => {
    console.log(id);
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {

    //console.log(this.state.todos);
    return (
      <div>
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
