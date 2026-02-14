import {useState,useEffect} from 'react'
import axios from 'axios'
import User from './components/User'

const App = () => {

  const [alldata, setData] = useState([])

  const getData = async () =>{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setData(response.data);
    console.log(response);
    

      
  }
    useEffect(function(){
    getData()
  },[])

  return (
    <div>
    <div>
      {alldata.map(function (elem,idx){
        return <div key={idx}>
          <User elem={elem} />
        </div>
      })}
    </div>
    </div>
    

  )
  
}

export default App
