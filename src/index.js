import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Todo from './components/Todo'
import Timer from './components/Timer'

const App = () => {
    const [value, setValue] = useState('Go swimming')
    const [todos, setTodos] = useState(['Homework', 'Go poo'])

    const addTodo = () => {
        if (!value) return
        setTodos((todo) => [...todo, value])
    }

    const handleChange = (e) => setValue(e.target.value)

    return (
        <div>
            <h1>React - Webpack</h1>
            <input type="text" placeholder="Input todo" value={value} onChange={handleChange} />
            <Todo todos={todos} addTodo={addTodo} title="My Todos" />
            <br />
            <Timer color="red" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))