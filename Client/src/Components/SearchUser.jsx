import axios from "axios";
import { useEffect, useState } from "react";



function UserSearch() {
    const [user, setUser] = useState([])
    const [power, setPower] = useState([])
    const [data, setData] = useState('')

    // console.log(data)
    useEffect(()=>{
        const fetchUserData = async() =>{
            try{
                const UserData = await axios.get("http://localhost:3000/Userlogin")
                setUser(UserData.data.userData)
            }catch(err) {
                console.log(err)
            }
        }
        fetchUserData()
    },[])


    useEffect(() =>{
        const fetchPowerData = async() => {
            try{
                const PowerData = await axios.get("http://localhost:3000/get")
                // console.log(PowerData.data)
                setPower(PowerData.data.source);
            } catch(err){
                console.log(err)
            }
        }
        fetchPowerData()
    },[])
  

    const dataCreator = (event) => {
        setData(event.target.value)
        // console.log(event.target.value)
    }


    return(
        <div>
            <div>
                <div>
                    <h2>Search</h2>
                    <select onChange={dataCreator} >
                        <option value="none">None</option>
                        
                        {user.map((element) => (
                            <option value={element.User_Name} key={element._id}>
                                {element.User_Name}
                            </option>
))}
                    </select>
                </div>
                <div>
                    {
                        power.filter((index) => data === index.Creator)
                    .map((ele) => {
                            return(
                                <div key={ele._id}>
                                    <img src={ele.Image} alt="" />
                                    <h1>Name: {ele.Name}</h1>
                                    <h2>Category: {ele.Super_Power_Category}</h2>
                                    <h3>Super_Power: {ele.Super_Power}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default UserSearch;