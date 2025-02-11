import LoginBtn from "@/components/LoginBtn";
import LogOutBtn from "@/components/LogOutBtn";
import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";



export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div className="flex items-center justify-center h-screen">
      {session?.user ? (<LogOutBtn/>) : (<LoginBtn/>)}
   
      <UserInfo />
      <p>From Client Component</p> <br />
      <p>{ JSON.stringify(session)}</p>
   </div>
  );
}
