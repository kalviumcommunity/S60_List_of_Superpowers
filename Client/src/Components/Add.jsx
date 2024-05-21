import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
    const back = useNavigate();
    const [Name, setName] = useState('');
    const [Super_Power_Category, setSuper_Power_Category] = useState('');
    const [Super_Power, setSuper_Power] = useState('');
    const [Image, setImage] = useState('');
    const [Creator, setCreator] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleCategory = (event) => {
        setSuper_Power_Category(event.target.value);
    }

    const handleSuperpower = (event) => {
        setSuper_Power(event.target.value);
    }

    const handleImage = (event) => {
        setImage(event.target.value);
    }

    useEffect(() =>{
        const cookieStored = document.cookie;
        const breakCookie = cookieStored.split("; ");
        const collectedCookie = {};
        
        for(const cookiy of breakCookie){
            const[data, value] = cookiy.split("=")
            collectedCookie[data] = value
        }

        const ownerName = collectedCookie["Creator"]
        setCreator(ownerName)
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/post", { Name, Super_Power_Category, Super_Power, Image, Creator})
            .then(() => {
                back("/superdata");
            })
            .catch((error) => {
                console.log('error', error);
            });
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen dark">
                <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-200 mb-4">Add Superpower</h2>

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <input placeholder="Name" required value={Name} onChange={handleName} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                        <input placeholder="Category" required value={Super_Power_Category} onChange={handleCategory} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                        <input placeholder="Superpower" required value={Super_Power} onChange={handleSuperpower} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                        <input placeholder="Image URL" required value={Image} onChange={handleImage} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                        <h3>Onwer: {Creator}</h3>
                        <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Add Superpower</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Add;
