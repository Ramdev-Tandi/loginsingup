import React, { useRef, useState } from "react";
import { checkValidation } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../utils/constants";

const Login = () => {
    const navigate = useNavigate();
    const [isSignInForm , setisSignInForm] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const signInClick = () =>{
        console.log(password)
        const message = checkValidation(email.current.value,password.current.value);
        setErrorMessage(message);
        if(!message){
            navigate("/browse");
        }   
    }

    return (
        <div className="relative">
            <div className="absolute z-0 inset-0">
                <img className="h-full w-full object-cover" alt="background-Img" src={IMG_URL} />
            </div>
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <form onSubmit={(e)=>e.preventDefault()} className="border border-black p-4 grid grid-flow-row w-full max-w-screen-sm md:max-w-md lg:max-w-lg rounded-lg bg-gray-500">
                    <h1 className="text-white font-bold text-2xl m-2 p-1">{isSignInForm?"LogIn":"SignUp"}</h1>
                    {(!isSignInForm) && <input className="rounded-lg m-2 p-2" type="text" placeholder="Full Name" />}
                    <input ref={email} className="rounded-lg m-2 p-2" type="text" placeholder="Email" />
                    <input ref={password} className="rounded-lg m-2 p-2 " type="password" placeholder="Password" />
                    <p className="text-red-500 ml-2 p-1">{errorMessage}</p>
                    <button onClick={signInClick} className="rounded-lg m-2 p-2 bg-red-600 text-white">{isSignInForm?"LogIn":"SignUp"}</button>
                    <p onClick={()=>setisSignInForm(!isSignInForm)} className="cursor-pointer m-2 p-1 text-white">{isSignInForm?"New to SignUp Now?":"Already registered? Sign In Now"}</p>
                </form>
            </div>
        </div>
    );
};

export default Login;