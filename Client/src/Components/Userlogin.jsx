import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"


function Userlogin (){

    const [Email,setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate = useNavigate()
    const [failed, setFailed] = useState("")
    const [owner, setOwner] = useState('')

    const handleMail = (event) =>{
        setEmail(event.target.value)
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }

    const handlefailer = () => {
        setFailed("Wrong info 😡, Who are you, Please fill correct info")
    }

    const handleOwner = (event) =>{
      setOwner(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3000/Userlogin",{Email,Password,owner})
        .then(result => {
            if(result.data.correct == "Access Granted"){
                navigate('/superdata')
                console.log("success")
                document.cookie = `Email = ${Email}; expires Sat, 26 Mar 2050 23:59:59 GMT`
                document.cookie = `Password = ${Password}; expires Sat, 26 Mar 2050 23:59:59 GMT`
                document.cookie = `Creator = ${owner}; expires Sat, 26 Mar 2050 23:59:59 GMT`
            }else{
                handlefailer()
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <div>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your email address" required onChange={handleMail} />
                <input type="text" placeholder="Enter your mail password" required onChange={handlePassword} />
                <button>Login</button>
            </form> */}
            <form
  className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800 flex flex-col justify-center items-center h-screen"
  onSubmit={handleSubmit}
>
  <div className="px-8 py-10 md:px-10 w-full max-w-md">
    <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">
      Welcome Back!
    </h2>
    <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">
      We missed you, sign in to continue.
    </p>
    <div className="mt-10">
      <div className="relative">
        <label 
        className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
        htmlFor="Name">
          Name
        </label>
        <input
          placeholder="Name"
          className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
          name="Name"
          id="Name"
          type="Name"
          required
         
          onChange={handleOwner}
        />
      </div>
      <div className="relative">
        <label
          className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
          htmlFor="email"
        >
          Email
        </label>
        <input
          placeholder="you@example.com"
          className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
          name="email"
          id="email"
          type="email"
          required
          value={Email}
          onChange={handleMail}
        />
      </div>
      <div className="mt-6">
        <label
          className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
          htmlFor="password"
        >
          Password
        </label>
        <input
          placeholder="••••••••"
          className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
          name="password"
          id="password"
          type="password"
          required
          value={Password}
          onChange={handlePassword}
        />
      </div>
      <div className="mt-10">
        <button
          className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
          type="submit"
          onSubmit={handleSubmit}
        >
          Lets Go
        </button>
      </div>
    </div>
  </div>
  <div className="px-8 py-4 bg-blue-200 dark:bg-zinc-800 w-full max-w-md">
    <div className="text-sm text-blue-900 dark:text-blue-300 text-center">
      Dont have an account?{' '}
      <a className="font-medium underline" href="#">
        Sign up
      </a>
    </div>
  </div>
</form>
{failed && <p>{failed}</p>}
        </div>
    )
}

export default Userlogin;