// import { redirect } from 'next/navigation';
import React from "react";
// /
export default async function ProductsPage() {
  const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
    cache: "force-cache",
  });
  const data = await res.json();

  // if (data?.data?.length > 3) {
  //     redirect('/')
  // }

  return (
    <ul className="text-center mt-8">
      {data?.data?.map((singleProduct) => {
        return <li key={singleProduct._id}>{singleProduct?.productName}</li>;
      })}
    </ul>
  );
}
