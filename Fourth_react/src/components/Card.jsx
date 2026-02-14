import React from 'react'

const card = (props) => {
  return (
    <div className='card'>
      <img src={props.elem.imgURL} alt="" />
      <h3>{props.elem.userName}</h3>
      <h4>{props.elem.userEmail}</h4>
      <p>{props.elem.userDetails}</p>
      <button onClick={()=>{
        props.deleteHandler(props.idx)}
      } className='remove'>Remove</button>
    </div>
  )
}

export default card
