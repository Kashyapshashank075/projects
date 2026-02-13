import { useState } from 'react'
import  Man  from "./Components/Man";
import Women from "./Components/Women"

function App() {
  const [gender, setGender] = useState('Man')

  function genderChange(){
    if(gender == 'Man'){
      setGender('Women')
    }
    else{
      setGender('Man')
    }
  }

  return (
    <div>
      <h2>{gender}</h2>
      <button onClick={genderChange}>Change Gender</button>
      <div>
       {gender ==   'Man'? <Man/>: <Women/>}
      </div>
       
    </div>
  )
}

export default App
