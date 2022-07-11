import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers'
import Todo from './components/Todo'
import Timer from './components/Timer'
import Counter from './components/Counter'

const store = createStore(allReducers)

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
            <h1>React - Redux - Webpack</h1>
            <input type="text" placeholder="Input todo" value={value} onChange={handleChange} />
            <Todo todos={todos} addTodo={addTodo} title="My Todos" />
            <br />
            <Timer color="red" />
            <Counter />
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)