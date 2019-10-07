import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

interface IProps {
    dispatch: any;
    // any other props that come into the component
}

const AddTodo = ({ dispatch }: IProps) => {
  let input: any;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
