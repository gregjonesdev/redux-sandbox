import React from "react";
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />

    <Footer />
  </div>
)

export default App;

// Type '{}' is missing the following properties from type
// 'Pick<InferProps<{ todos: Validator<InferProps<
// { is: any;
// completed: Validator<boolean>;
// text: Validator<string>; }>[]>; toggleTodo: Validator<(...args: any[]) => any>; }>, "todos" | "toggleTodo">': todos, toggleTodo


//     <VisibleTodoList />
