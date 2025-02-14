
import LoginBtn from "@/components/LoginBtn";
import LogOutBtn from "@/components/LogOutBtn";
import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";



export default async function Home() {
  const session = await getServerSession(authOptions)
  const UserInfo = JSON.stringify(session)
  return (
    <div className="flex items-center flex-col justify-center h-screen bg-[rgba(0,0,0,0.1)] bg-opacity-45">
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
      <div className="w-[90%] md:w-[50%] p-5 h-[400px] border mx-auto bg-white  flex justify-start  flex-col gap-5 rounded   items-center">

        {UserInfo?.data ? <p className="border-2 border-blue-800">{JSON.stringify(session)}</p> : (<p>User Information Not found Please Login or register</p>)}
      </div>
    </div>
  );
}
