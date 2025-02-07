'use client'

import { postSingleData } from "@/app/actions/products/postSingleProduct";
import { useRouter } from "next/navigation";

export default function ProductAddForm() {
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const payload = { productName }
        // const res = await fetch("/api/items", {
        //     method: "POST",
        //     body: JSON.stringify(payload),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        // const result = await res.json();
        const result = await postSingleData(payload)
        form.reset()
        console.log(result);
        router.push('/products')
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="text" name="productName" placeholder='Product Name' className="border-2" />
              <button type='submit' className="border-2 ml-2">Submit</button>
          </form>
    </div>
  )
}
