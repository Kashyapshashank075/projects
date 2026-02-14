import React from 'react'

const User = (props) => {
  return (
    <div className='card'>
      <h2>{props.elem.data}</h2>
      <p>{props.elem.data}</p>
    </div>
  )
}

export default User
