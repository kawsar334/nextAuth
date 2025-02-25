import Link from "next/link";

import style from './post.module.css';

export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}
export const metadata = {
  title: "All Posts",
  description: "Loading JSON plachholder posts using Server components",
};

export default async function Posts() {
    const posts = await getPosts();
  return (
      <div className="grid   grid-cols-4 gap-8  mt-12 container mx-auto">
          {
              posts.map((singlePost) => {
                  return (
                    <div
                      key={singlePost.id}
                      className="border-2 "
                    >
                      <h3 className={`text-2xl font-bold ${style.title}`}>
                        {singlePost.title}
                      </h3>
                      <p className={`${style["body-color"]}`}>{singlePost.body}</p>
                      <button className="bg-blue-400 p-2  text-white mt-auto ">
                        <Link href={`/posts/${singlePost.id}`}>Details</Link>
                      </button>
                    </div>
                  );
              })
          }
    </div>
  )
}
