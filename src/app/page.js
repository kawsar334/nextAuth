import LoginBtn from "@/components/LoginBtn";
import UserInfo from "@/components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";


export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div className="flex items-center justify-center h-screen">
      
      <LoginBtn />
      <UserInfo />
      <p>From Client Component</p> <br />
      <p>{ JSON.stringify(session)}</p>
   </div>
  );
}
