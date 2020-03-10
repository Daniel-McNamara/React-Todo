import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    //console.log(props);
    return (
        <div>
            {props.todoList.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button onClick={props.clearList}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList;


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
