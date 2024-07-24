


import AppHeader from '../app-header';
import SearchPaner from '../search-panel';
import TodoList from '../todo-list/todo-list';

import './app.css';
import ItemStatusFilter from '../item-status-filter';
import { useState } from 'react';
import ItemAddFrom from '../item-add-form/item-add-form';




const App = () => {

const [state, setState] = useState(false)

const maxId = 100;

const todoData = [
  { label: 'Drink Coffe', important: false, id:1 },
  { label: 'Make Awesome', important: true, id:2 },
  { label: 'Heve a link', important: false, id:3 },
]


const deleteItem = (id) => {
  setState(({todoData}) => {
    const idx = todoData.findIndex((el) => el.id === id);


    const newArray = [
      ...todoData.slice(0, idx),
      ...todoData.slice(idx + 1)
    ];
    return {
      todoData: newArray
    };
  });
  console.log(state);
 };

const addItem = (text) => {
  const newItem = {
    label: text,
    important: false,
    id: maxId++
  }
};



const getId = (id) => {
  const resalt = todoData.filter((el) => 
    el.id !== id 
  )
  console.log(id);
  console.log(resalt);
}

  return (
    <div>
    <AppHeader />
    <SearchPaner />
    <ItemStatusFilter />
    <TodoList
      getId={getId}
      todos={todoData}
      onDeleted={deleteItem}/>
      <ItemAddFrom onItemAdded={addItem}/>
    <span>{ (new Date()).toString() }</span>
</div>
  )
};
export default App;