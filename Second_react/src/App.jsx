import React, { useState } from 'react'



const App = () => {
  const [marks, setMarks] = useState([45,65,78,28,94]);

  function addGress(){
    setMarks(marks => marks.map(num =>{const newMark = num+5
      return num > 95? num:newMark;
    }));

  }

  return (
    <div>
        {marks.map((num,idx) => <h1>students marks {idx+1} = {num}</h1> )}

        <button onClick={addGress}>Add gressing</button>
    </div>
  )
}

export default App
