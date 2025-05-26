
async function getPosts() {
  const response = await fetch('http://localhost:3000/api/hello');
  const data = await response.json();
  return data;
}

export default async function Home() {
  const posts =await getPosts();
  
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
      <h1>Posts</h1>
       {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.message}</h2>
          <p>{post.name}</p>
        </div>
      ))}
      
   
    </div>
  );
}
