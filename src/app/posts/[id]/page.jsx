

export const getSinglePost = async (post_id) => {
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
     const data = await res.json();
     return data;
}

export default async function SinglePost({ params }) {
    const id = await params.id;
    const singlePost = await getSinglePost(id);
   
  return (
      <div>
          <h3 className="text-3xl font-bold">{singlePost.title}</h3>
          <p>{ singlePost.body}</p>
      </div>
  )
}
