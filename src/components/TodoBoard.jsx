import React from 'react';
import TodoList from './TodoList';

function TodoBoard (props) {           
    return (
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item)=><TodoList item={item}/>)}
        </div>
        
    );
} 

export default TodoBoard