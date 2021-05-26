import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
    console.log(props)
    return (
        <ul className='todoElements'>
            { props.todos.map((todo, index) =>
                <TodoItem todo={todo} key={todo.id} index={index + 1 + ') '} onChange={props.onToggle} removeTodo={props.removeTodo}></TodoItem>) }
        </ul>
    )
}

export default TodoList