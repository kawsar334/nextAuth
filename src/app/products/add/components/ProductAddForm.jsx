'use client'

export default function ProductAddForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const payload = { productName }
        const res = await fetch("/api/items", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await res.json();
        form.reset()
        console.log(result);
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
