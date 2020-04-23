import React from 'react';
import {todoData} from '../todoData';
import TodoItem from './TodoItem';
import '../style/main.css'


function Main() {
    const todoList = todoData.map(item => <TodoItem key={item.id} info={item} />);
    return (
        <ul className="todoList">
            {todoList}
        </ul>
    )
}


export default Main;