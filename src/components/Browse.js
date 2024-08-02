import React from "react";
import { useNavigate } from "react-router-dom";

const Browse = () =>{
    const navigate = useNavigate();
    const isLogOutButton = () =>{
        navigate("/");
    }
    return(
        <div className="flex justify-end">
            <button onClick={isLogOutButton} className="border border-black p-2 mr-5 text-white bg-red-500 font-bold rounded-sm">LogOut</button>
        </div>
    );
};

export default Browse;