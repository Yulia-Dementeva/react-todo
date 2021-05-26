import React, {useState} from "react";
import './AddTodo.css'

function AddTodo(props) {
    console.log(props)
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if(value.trim()){
            props.onCreate(value)
            setValue('')
        }
    }

    return (
        <form className='addTodoForm' onSubmit={submitHandler}>
            <input placeholder='Введите задачу' className='inputForm' value={value} onChange={event => setValue(event.target.value)}/>
            <button className='pressed-button'>Добавить</button>
        </form>
    )
}

export default AddTodo