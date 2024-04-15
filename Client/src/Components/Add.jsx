import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function Add() {

    const back = useNavigate()
    const [Name,setName] = useState('')
    const [Super_Power_Category, setSuper_Power_Category] = useState('')
    const [Super_Power, setSuper_Power] = useState('')
    const [Image, setImage] = useState('')


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

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3000/post", {Name, Super_Power_Category, Super_Power, Image})
        .then(() => {
            back("/")
        })
        .catch((error) => {
            console.log('error',error)
        })
    }


    return(
        <form onSubmit={handleSubmit}>
            <input required type="text" name="Name" placeholder="Name" onChange={handleName} />
            <input required type="text" name="Category" placeholder="Human or Superhuman or  God level" onChange={handleCategory} />
            <textarea required type="text" name="Super-powers" placeholder="Drop the Super-powers" onChange={handleSuperpower} ></textarea>
            <input required type="text" name="Image" placeholder="Drop the image link" onChange={handleImage} />
            <button>Add Data</button>
        </form>
    )
}

export default Add;