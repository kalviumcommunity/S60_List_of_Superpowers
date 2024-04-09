import './App.css'
import dummyData from './Dummydata/Dummydata'

function App() {

  return (
    <>
    <img src={dummyData.Image} alt="" />
    <h1>Name: {dummyData.Name}</h1>
    <h3>Category: {dummyData.Super_Power_Category}</h3>
    <h4>Powers: {dummyData.Super_Power}</h4>
    </>
  )
}

export default App
