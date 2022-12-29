import React from 'react'

type props = {
    onClick?: () => void,
    children: string
}

function Button({onClick, children}: props) {
  return (
    <button onClick={onClick} className='bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-400'>
        {children}
    </button>
  )
}

export default Button