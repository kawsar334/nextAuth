"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname();
    if(!pathname.includes('dashboard'))
    {
          return (
            <div className="flex justify-between items-center px-10 py-3  sticky  w-full top-0 left-0 z-50  bg-teal">
              <div className="">
              <Link href="/">Logo</Link>
              </div>
              <ul className="flex justify-between flex-col md:flex-row  absolute md:static left-0 top-10 bg-teal w-full   md:w-1/2  p-4 text-white">
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="/posts">
                  <li>Posts</li>
                </Link>
                <Link href="/products">
                  <li>Products</li>
                </Link>
                <Link href="/products/add">
                  <li>Add Product</li>
                </Link>
                <Link href="/meals">
                  <li>Meals</li>
                </Link>
                <Link href="/about">
                  <li>About</li>
                </Link>
                <Link href="/register">
                  <li>Register</li>
                </Link>
              </ul>

              <span className="text-xl font-semibold cursor-pointer  md:hidden ">Menu</span>
            </div>
          );
    } else {
        return <>  
        
        Hi there 
        </>
  }
};

export default Navbar;