import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import Todos from'./components/Todos';
import AddItem from './components/AddItem';
import About from './components/pages/About';
import uuid from 'uuid';

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
    //console.log(id);
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //add Todo
  addTodo = (title) => {
    if(title.trim() === "") return;
    console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {

    //console.log(this.state.todos);
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <div className="container">
                <AddItem addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </div>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
