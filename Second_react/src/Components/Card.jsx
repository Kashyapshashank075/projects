import React from 'react'

const Card = ({user}) => {
  return (
    <div>
      {user.img}
      {user.fullName}
      
      {user.likes}
    </div>
  )
}

export default Card
