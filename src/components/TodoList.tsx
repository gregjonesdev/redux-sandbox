import * as React from "react";
import PropTypes from 'prop-types';
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }: {
  todos: any,
  toggleTodo: any,
}) => (
  <ul>

  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
