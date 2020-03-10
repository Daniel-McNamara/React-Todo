import React from 'react';
import './Todo.css';

const Todo = props => {
    //console.log('todo props', props)
    return (
        <div
            onClick={() => props.toggleItem(props.item.id)}
            className = {`items${props.item.completed ? ' purchased' : ''}`}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo; 