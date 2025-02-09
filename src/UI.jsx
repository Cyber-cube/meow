import './UI.css'
import { useState } from 'react'

function UI() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  return (
    <div className="main">
      <div className='text-div'>
        <p className='text'>Meow mew me me meow meow m?</p>
      </div>
      <div className='btn-div'>
        <button className='btn yes'>Yes</button>
        <button onClick={() => {
          setY(Math.floor(Math.random() * 151))
          setX(Math.floor(Math.random() * 151))
        }} className='no btn' style={{ transform: `translate(${x}px, ${y}px)` }}>No</button>
      </div>
    </div>
  )
}

export default UI;
