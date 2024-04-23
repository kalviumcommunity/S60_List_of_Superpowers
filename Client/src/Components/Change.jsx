import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

function Change (){

    const {id} = useParams()
    const back = useNavigate()
    const [Name,setName] = useState('')
    const [Super_Power_Category, setSuper_Power_Category] = useState('')
    const [Super_Power, setSuper_Power] = useState('')
    const [Image, setImage] = useState('')

    useEffect(() =>{
        const getPowers = async() =>{
            axios.get("http://localhost:3000/getid/"+id)
            .then(powers => {
                setName(powers.data.Name)
                setSuper_Power_Category(powers.data.Super_Power_Category)
                setSuper_Power(powers.data.Super_Power)
                setImage(powers.data.Image)
            })
        }
        getPowers()
    },[])
    


    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleCategory = (event) => {
        setSuper_Power_Category(event.target.value)    
    }
    
    const handleSuperpower = (event) => {
        setSuper_Power(event.target.value)
    }

    const handleImage = (event) =>{
        setImage(event.target.value)
    }

    const handleSubmit = (event) =>{ 
        event.preventDefault()
        axios.put("http://localhost:3000/put/"+id,{Name, Super_Power_Category, Super_Power, Image})
        .then(() => {
            back("/")
        })
        .catch((err) => {
            console.log("err", err)
        })
    }

    return(
        <div>
            <div>
            <div className="flex flex-col items-center justify-center h-screen dark">
                <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-200 mb-4">Change Superpower</h2>

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <input placeholder="Name" value={Name} onChange={handleName} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                        <input placeholder="Category" value={Super_Power_Category} onChange={handleCategory} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                        <input placeholder="Superpower" value={Super_Power} onChange={handleSuperpower} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                        <input placeholder="Image URL" value={Image} onChange={handleImage} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />

                        <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Change Superpower</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Change;