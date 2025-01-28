import Link from "next/link";


export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}

export default async function Posts() {
    const posts = await getPosts();
  return (
      <div className="grid grid-cols-4 gap-8  mt-12 container mx-auto">
          {
              posts.map((singlePost) => {
                  return (
                    <div
                      key={singlePost.id}
                      className="border-2 border-slate-300"
                    >
                      <h3 className="text-2xl font-bold">{singlePost.title}</h3>
                      <p>{singlePost.body}</p>
                      <button className="bg-blue-400 p-2 mt-2 text-white ">
                        <Link href={`/posts/${singlePost.id}`}>Details</Link>
                      </button>
                    </div>
                  );
              })
          }
    </div>
  )
}
