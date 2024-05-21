import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SuperData(){
    const [info,setInfo] = useState([])
    const navigate = useNavigate()

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

    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:3000/delete/${id}`);
            setInfo(oldInfo => oldInfo.filter(element => element._id !== id));
            console.log("Deleted the data successfully.")
        } catch(err) {
            console.log("An error accoured when deleting the data:",err)
        }

    };

    const Signout = () => {
            document.cookie = "Email=; expires=Wed, Mar 26 2005 00:00:00 GMT";
            document.cookie = "Password=; expires=Wed, Mar 26 2005 00:00:00 GMT";
            document.cookie = "Creator=; expires=Wed, Mar 26 2005 00:00:00 GMT"
            navigate("/");
    }

    return(
    <div>
       
            <button  onClick={() => navigate('/Add')} className='rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500'>
                <span className='text-gray-200 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300'>Add Data</span>
                <span
    className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
  >
    <svg
      className="svg w-8 text-white"
      fill="none"
      height="24"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="12" x2="12" y1="5" y2="19"></line>
      <line x1="5" x2="19" y1="12" y2="12"></line>
    </svg>
  </span> </button>
  <button onClick={() => navigate('/search')} >Search</button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={Signout}>Sign out</button>
        
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
            {
                info.map((element) =>{
                    return(
                        <div key={element._id} className="bg-[rgb(242, 123, 80)] p-4 rounded-lg shadow-md" >
                          <div className='flex flex-col items-center'>
                          <img src= {element.Image} alt="" className='w-60 h-60 rounded-md' />
                            <h1> <strong>Name:</strong>  {element.Name}</h1>
                            <h2> <strong>Category:</strong>  {element.Super_Power_Category}</h2>
                            <h3> <strong>Superpower:</strong> {element.Super_Power}</h3>
                            <Link to={`/update/${element._id}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Update</button>
                            </Link>
                            <button onClick={() => handleDelete(element._id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default SuperData;