import React from 'react'

const User = (props) => {
  return (
    <div className='card'>
      <h2>{props.elem.name}</h2>
      <p>{props.elem.website}</p>
    </div>
  )
}

export default User
