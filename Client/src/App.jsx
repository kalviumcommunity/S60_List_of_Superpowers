import './App.css'
// import dummyData from './Components/Dummydata'
import { Routes, Route } from 'react-router-dom'
import SuperData from './Components/SuperData'
import Add from './Components/Add'
import Change from './Components/Change'
import CreateUser from './Components/createUser'
import Userlogin from "./Components/Userlogin"
// import Add from './Components/Add'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<CreateUser/>}></Route>
        <Route path='/Userlogin' element={<Userlogin/>}></Route>
        <Route path='/superdata' element={<SuperData/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
        <Route path='/update/:id' element={<Change/>}></Route>
      </Routes>
    </div>
    
    
  )
}

export default App
