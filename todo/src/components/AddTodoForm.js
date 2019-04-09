import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: '',
    }
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodoText);
    this.setState({ newTodoText: '' })
  };

  render() {
    return (
      <form
        onSubmit={this.addTodo}
      >
        <input
          type='text'
          name='newTodoText'
          value={this.state.newTodoText}
          onChange={this.handleChanges}
        />
        <button type='submit'>Add Todo</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  { addTodo }
)(AddTodoForm);