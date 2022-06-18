import React from 'react'

const Button = ({text, ...btnInfo}) => {
  return (
    <>  
    <button {...btnInfo}>
        {text}
    </button>
    </>
  )
}

export default Button