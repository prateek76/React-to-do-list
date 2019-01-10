import React, { Component } from 'react'
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';

export class TodoItem extends Component {

  getStyle = () => {

    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
    
  }

  render() {

    //destructure
    const { id,title } = this.props.todo;

    return (
      <div style={this.getStyle()}> 
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
          {title}
          {' '}<Button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} color="primary" size="small" variant="text"><Delete color="action" /></Button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: propTypes.object.isRequired
}

const btnStyle = {
  float: 'right'
}

export default TodoItem
