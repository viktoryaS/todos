import React from "react";

import TodoListItem from "../todo-list-item";
import './todo-list.css';


const TodoList = ({ todos, getId }) => {

  const elements = todos.map((item) => {
    // const { id, ...itemProps } = item;

    return (
      <li  className="list-group-item">
        <TodoListItem 
          item = {item}
          getId={getId}
         />
      </li>
    )
  })
    
     return(
        <ul className="list-group todo-list">
        { elements }
        </ul>
    
    );
    };
    export default TodoList;