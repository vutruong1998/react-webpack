import React, { memo } from 'react'

const Todo = ({ title, todos, addTodo }) => {
    return (
        <>
            <h3>{title}</h3>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>
            })}
            <button onClick={addTodo}>Add todo</button>
        </>
    )
}

export default memo(Todo)