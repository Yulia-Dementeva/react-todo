import './App.css';
import TodoList from "./components/TodoList/TodoList";
import React, {useState} from "react";
import AddTodo from "./components/AddTodo/AddTodo";



function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'сделать это'},
        {id: 2, completed: true, title: 'сделать то'},
        {id: 3, completed: false, title: 'сделать сё'}
    ])


    function toggleTodo(id) {
        setTodos(todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeTodo(id){
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title){
        setTodos(todos.concat([{
            title: title,
            id: Date.now(),
            completed: false
        }]))
    }

    console.log(Date.now())

    return (
            <div className="wrapper">
                <h1 className='header'>Список дел</h1>
                <AddTodo onCreate={addTodo}></AddTodo>
                {(todos.length > 0 )
                    ? <TodoList todos={todos} onToggle={toggleTodo} removeTodo={removeTodo}></TodoList>
                    : <p>Нет задач</p>
                }
                 </div>
    );
}

export default App;
