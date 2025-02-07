// import { redirect } from 'next/navigation';
// import dbConnect from "@/lib/dbConnect";
import React from "react";
import { getProducts } from "../actions/products/getProduct";
// /
export default async function ProductsPage() {

  // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
  //   cache: "force-cache",
  // });
  // const data = await res.json();

  const data = await getProducts();

  return (
    <ul className="text-center mt-8">
      {data?.map((singleProduct) => {
        return <li key={singleProduct._id}>{singleProduct?.productName}</li>;
      })}
    </ul>
  );
}
