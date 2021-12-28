import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <List>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={props.removeTodo}
          toggleComplete={props.toggleComplete}
        />
      ))}
    </List>
  );
}

export default TodoList;