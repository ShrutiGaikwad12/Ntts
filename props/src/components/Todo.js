import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
// import CloseIcon from " @mui/icons-material/Close";
import React from "react";
import uuid from "uuid";


function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        {/* <CloseIcon /> */}
      </IconButton>
    </ListItem>
  );
}

export default Todo;