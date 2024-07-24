import React, { useState } from "react";
import './todo-list-item.css';





const TodoListItem = ({item, getId}) => {
console.log(item);

const [ done, setDane ] = useState(false);

const [ important , setImportant ] = useState(false);

const onLabelClick = () => {
    // console.log(`Done ${item}`)

    setDane(true) 
    console.log(done)
    };

    console.log(done);
    const style = {
        color: important ? 'tomato' : 'black',
        fontWeight: important ? 'bold' : 'normal',
        textDecoration: done ? 'line-through' : 'none'
    };

    const onMarcImportmant = () => {
        setImportant(true)
    }

    return (
        <span className="todo-list-item">
    <span className="todo-list-item-label" 
    style={style} 
    onClick={onLabelClick}>
    { item.label }
    </span>
    <button type="button"
        className="btn btn-outline-success btn-sm freh"
        onClick={onMarcImportmant}>
    <i className="fa fa-exclamation" aria-hidden="true"></i>

     </button>
    <button type="button"
        onClick = {() => getId(item.id)}
        className="btn btn-outline-danger btn-sm freh">
    <i className="fa fa-trash-o"/>

    </button>
    </span>
)
}
export default TodoListItem;