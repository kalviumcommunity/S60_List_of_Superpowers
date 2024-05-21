import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function CreateUser() {
  const [User_Name, setUser_Name] = useState("");
  const [User_Age, setUser_Age] = useState('');
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const home = useNavigate();

  const handleUser_Name = (event) => {
    setUser_Name(event.target.value);
  };

  const handleUserEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUser_Age = (event) => {
    setUser_Age(event.target.value);
  };

  const handleUserPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    home("/superdata");
    axios.post("http://localhost:3000/createuser", {
        User_Name,
        User_Age,
        Email,
        Password,
      })
      .then((result) => {
        console.log(result)
        document.cookie = `Email = ${Email}; expires Sat, 26 Mar 2050 23:59:59 GMT`
        document.cookie = `Creator = ${User_Name}; expires Sat, 26 Mar 2050 23:59:59 GMT`
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
      <div className="relative px-4 py-10 bg-black mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto text-white">
          <form onSubmit={handleSubmit}>
          <div className="flex items-center space-x-5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="50"
              viewBox="0 0 397 94"
              fill="none"
            >
              {/* SVG Path Data */}
            </svg>
          </div>
          <div className="mt-5">
            <label
              htmlFor="User_Name"
              className="font-semibold text-sm text-gray-400 pb-1 block"
            >
              User_Name
            </label>
            <input
              id="User_Name"
              type="text"
              required
              value={User_Name}
              onChange={handleUser_Name}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
            />
            <label
              htmlFor="Email"
              className="font-semibold text-sm text-gray-400 pb-1 block"
            >
              Email
            </label>
            <input
              id="Email"
              type="text"
              required
              value={Email}
              onChange={handleUserEmail}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
            />
            <label
              htmlFor="age"
              className="font-semibold text-sm text-gray-400 pb-1 block"
            >
              Age
            </label>
            <input
              id="age"
              type="number"
              required
              value={User_Age}
              onChange={handleUser_Age}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
            />
            <label
              htmlFor="Password"
              className="font-semibold text-sm text-gray-400 pb-1 block"
            >
              Password
            </label>
            <input
              id="Password"
              type="Password"
              value={Password}
              required
              onChange={handleUserPassword}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-center items-center">
            <div>
              <button
                className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              onSubmit={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <Link to="/Userlogin">
            <button
              className="text-xs font-display font-semibold text-gray-500 hover:text-gray-400 cursor-pointer"
            >
              Already a user? Login
            </button>
            </Link>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
