import React, { useState } from 'react'
import classes from './Counter.module.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleButton = () => setCount(count + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={handleButton}>Button</button>
    </div>
  )
}
