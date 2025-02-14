"use client";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const session = useSession();

  const userInfo = JSON.stringify(session)
  
  return (
    <div className="border-2 ">
          {userInfo?.data ?(<p>{userInfo}</p>) :(<p>You are Not authenticated  </p>)}
    </div>
  );
}
