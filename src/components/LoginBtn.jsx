"use client"
import {  signIn,  } from "next-auth/react";
const LoginBtn = () => {
    return (
        <div>
            <button className="bg-blue-300 bg-teal text-white font-semibold my-3 border w-[200px] p-2 px-4 rounded-xl" onClick={() => signIn()}>LogIn</button>
        </div>
    );
};

export default LoginBtn;