import React from "react";
import './TodoItem.css'

const TodoItem = (props) => {
    const classes = []
    if(props.todo.completed){
        classes.push('done')
    }
    console.log(props, props.todo.id)
    return (
        <li className='li'>
            <span className={classes.join(' ')}>
                <input
                    className='checkInput'
                    type='checkbox'
                    checked={props.todo.completed}
                    onChange={() => props.onChange(props.todo.id)}/>
                <strong>{props.index}</strong>
                {props.todo.title}
            </span>
            <button className='deleteBtn' onClick={() => props.removeTodo(props.todo.id)}>&times;</button>
        </li>
    )
}

export default TodoItem