import axios from 'axios';
import { useState, useEffect } from 'react';

function SuperData(){
    const [info,setInfo] = useState([])

    useEffect(() =>{
        const dataFetching = async() => {
            try{
                const fetchedData = await axios.get("http://localhost:3000/get");
                console.log(fetchedData.data.source)
                setInfo(fetchedData.data.source)
            } catch(error){
                console.log("here",error)
            }
        }
        dataFetching()
    },[])

    return(
        <div>
            {
                info.map((element) =>{
                    return(
                        <div key={element._id}>
                            <img src= {element.Image} alt="" />
                            <h1>Name: {element.Name}</h1>
                            <h2>Category: {element.Super_Power_Category}</h2>
                            <h3>Superpower: {element.Super_Power}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SuperData;