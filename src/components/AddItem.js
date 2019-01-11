import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export class AddItem extends Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => {
    this.setState({ title: e.target.value });
    //console.log(e.target.value);
  }

  render() {
    return (
      <div style={formStyle}>
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <TextField 
                type="text"
                label="Add Todo"
                name="title"
                style={{flex: 10}}
                variant="outlined"
                margin="dense"
                value={this.state.title}
                onChange={this.onChange}
            />
            <Button type="submit" color="inherit" variant="contained" style={btnStyle}>submit</Button>
        </form>
      </div>
    )
  }
}

const btnStyle = {
    flex: .5,
    marginTop: '7px',
    marginBottom: '7px'
}

const formStyle = {
    padding: '5px',
}

// PropTypes
AddItem.propTypes = {
  addTodo: propTypes.func.isRequired
}

export default AddItem
