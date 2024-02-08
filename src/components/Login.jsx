import { useState } from 'react';

import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

const history = useNavigate();

const [email, setEmail] = useState('');  
const [password, setPassword] = useState('');  


//function for handling form submission//
const handleSubmit = async (event) => {
  event.preventDefault(); //to prevent page reload and loss our state. 

    try {
      const res = await axios.post('http://localhost:8000/login',
      { email, password })
      
        if(res.data === "exist"){
         history('/');
         alert("Successfully logged in")
        }
        else if(res.data === "notexist") {
          alert("User have not registered")
        }
      }
         catch (e) {
        alert('wrong details');
        console.log(e);
      }
    
} 


    return (
      <>
        
        <div className="flex min-h-full flex-1 flex-col justify-center  px-6 py-40 lg:px-8">
          <div className="flex justify-center flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
            
  
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
<div></div>  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="POST" onSubmit={handleSubmit} method="POST" >
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    value={password}
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
              
              <br />

            <Link to="/register" >Sign-up Page</Link>
          </div>
        </div>
      </>
    )
  }
  
  