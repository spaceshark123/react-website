import { useState } from 'react'
import './Button.css'

const updateClass = (toggle: boolean) => {
    return toggle.toString() + " toggle";
}


function Button() {
  const [toggle, setToggle] = useState(false)

  return (
      // toggle button that turns on when mouse is held down over it (dragging or clicking)
      <button
            className={updateClass(toggle)} onMouseOver={() => setToggle(!toggle)}
      >
          { toggle ? "1" : "0" }
      </button>
      
  )
}

export default Button