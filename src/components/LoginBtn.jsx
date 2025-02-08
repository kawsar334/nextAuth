"use client"
import {  signIn,  } from "next-auth/react";
const LoginBtn = () => {
    return (
        <div>
            <button className="bg-blue-300 p-2 px-4 rounded-xl" onClick={() => signIn()}>LogIn</button>
        </div>
    );
};

export default LoginBtn;