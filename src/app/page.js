import LoginBtn from "@/components/LoginBtn";
import UserInfo from "../../nextjs-data-fetching/src/components/UserInfo";


export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      
      <LoginBtn />
      <UserInfo/>
   </div>
  );
}
