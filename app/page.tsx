import ButtonAddCookie from '@/components/ButtonAddCookie'
import ButtonDeleteCookie from '@/components/ButtonDeleteCookie'
import ButtonGetCookie from '@/components/ButtonGetCookie'

async function getPosts() {
  const response = await fetch('http://localhost:3000/api/hello')
  const data = await response.json()
  return data
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className='container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-64px)] gap-4 '>
      <h1 className='mb-4'>Posts</h1>
      {posts.map((post: { name: string; message: string }) => (
        <div
          key={post.name}
          className='w-64 flex items-center justify-between p-2 border '
        >
          <h2>{post.message}</h2>
          <p>{post.name}</p>
        </div>
      ))}
      <div className='flex items-center gap-4'>
        <ButtonAddCookie />
        <ButtonDeleteCookie />
        <ButtonGetCookie />
      </div>
    </div>
  )
}
