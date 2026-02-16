import  {useState} from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light')

const changeTheme = (dets) => {
  setTheme(dets)
}
  return (
    <div>
      <h2>Theam is {theme}</h2>
      <Navbar changeTheme={changeTheme}/>
    </div>
  )
}

export default App
