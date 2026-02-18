import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
const navigate = useNavigate()

    return (
    <div>
      <h2>This is home page</h2>
      <button onClick={()=> navigate('/products')}>Explore all products</button>
    </div>
  )
}

export default Home
