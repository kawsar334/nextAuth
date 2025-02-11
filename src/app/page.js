
import LoginBtn from "@/components/LoginBtn";
import LogOutBtn from "@/components/LogOutBtn";
import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";



export default async function Home() {
  const session = await getServerSession(authOptions)
  // console.log('sesion data', session);
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      {session?.user ? (
        <>
          <LogOutBtn />
        </>
      ) : (
        <>
          
          <LoginBtn />
        </>
      )}
      <UserInfo /> <br />
      {/* <p>From Client Component</p> <br /> */}
      <p className="border-2 border-blue-800">{JSON.stringify(session)}</p>
    </div>
  );
}
