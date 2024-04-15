import './App.css'
// import dummyData from './Components/Dummydata'
import { Routes, Route } from 'react-router-dom'
import SuperData from './Components/SuperData'
import Add from './Components/Add'
// import Add from './Components/Add'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<SuperData/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
      </Routes>
    </div>
    
    
  )
}

export default App
