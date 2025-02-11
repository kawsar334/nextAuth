"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function LogOutBtn() {
  return (
    <div>
      <button onClick={() => signOut()}>LogOut</button>
    </div>
  );
}
