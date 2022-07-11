import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../actions/counter'

const Counter = () => {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <>
            <h3>Counter {counter}</h3>
            <button style={{ marginRight: '2px' }} onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement(5))}>-</button>
        </>
    )
}

export default memo(Counter)