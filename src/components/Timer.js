import { useState, useEffect, memo } from "react"

const Timer = ({ color }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount((c) => c + 1)
    }, 3000)
  })

  return <h3 style={{ color }}>I have rendered {count} times!</h3>
}

export default memo(Timer)
