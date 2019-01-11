import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header className="App">
        <h1>TodoList</h1>
        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
      </header>
    )
  }
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header
