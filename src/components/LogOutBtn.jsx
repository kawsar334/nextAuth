"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function LogOutBtn() {
  return (
    <div>
      <button className="bg-blue-700 text-teal border  p-2 px-4" onClick={() => signOut()}>LogOut</button>
    </div>
  );
}
