

export const getSinglePost = async (post_id) => {
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
     const data = await res.json();
     return data;
}

export async function generateMetadata({ params }) {
  // read route params
  const id = (await params).id;

  // fetch data
  const singlePost = await getSinglePost(id)


  return {
    title: singlePost.title,
  description: singlePost.body,
  };
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
