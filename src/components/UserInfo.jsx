"use client";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const session = useSession();

  
  return (
    <div className="border-2 ">
          <p>{ JSON.stringify(session)}</p>
    </div>
  );
}
