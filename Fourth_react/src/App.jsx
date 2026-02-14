import { useState } from 'react'
import Card from './components/Card';

function App() {
  const [userName, setuserName] = useState('')
  const [imgURL, setimgURL] = useState('')
  const [userEmail, setuserEmail] = useState('')
  const [userDetails, setuserDetails] = useState('')
  const [allUsers, setallUsers] = useState(JSON.parse(localStorage.getItem('all-users')) || []
)

  
  const SubmitHandler = (e)=> {
    e.preventDefault()

    const oldUsers = [...allUsers];
    oldUsers.push({userName,imgURL,userEmail,userDetails})

    setallUsers(oldUsers)
    localStorage.setItem('all-users',JSON.stringify(oldUsers))
    // console.log('submitted');
    setuserName('')
    setimgURL('')
    setuserEmail('')
    setuserDetails('')
    
  }

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers]

    copyUsers.splice(idx, 1)

    setallUsers(copyUsers)

    localStorage.setItem('all-users', JSON.stringify(copyUsers))
  }

  return (
    <div>
      <form onSubmit={(e)=>{SubmitHandler(e)}}>
        <input type="text" placeholder='Enter User Name'
        value={userName}
         onChange ={(e)=>{setuserName(e.target.value)}}
          />
          <input type="text" placeholder='Enter image url'
        value={imgURL}
         onChange ={(e)=>{setimgURL(e.target.value)}}
          />
          <input type="text" placeholder='Enter User Email'
        value={userEmail}
         onChange ={(e)=>{setuserEmail(e.target.value)}}
          />
          <input type="text" placeholder='Enter User Details'
        value={userDetails}
         onChange ={(e)=>{setuserDetails(e.target.value)}}
          />
          
       
        <button className='add' onClick={SubmitHandler}>Create user</button>
      </form>
<div className='main-div'>
     
  {allUsers.map(function(elem,idx){
   return <Card idx={idx} elem={elem} deleteHandler={deleteHandler}/>
  })}
</div>

    </div>
  )
    
   

}

export default App
