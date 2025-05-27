import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json([
    { message: 'Hello World', name: 'John' },
    { message: 'Good Bye World', name: 'Eva' },
    { message: 'Hello Mars', name: 'Joe' },
    { message: 'Hello Jupiter', name: 'Jane' },
    { message: 'Hello Saturn', name: 'Jack' },
    { message: 'Hello Uranus', name: 'Jill' },
    { message: 'Hello Neptune', name: 'Jenny' },
  ])
}
export async function POST(req: Request) {
  const data = await req.json()
  const { message, name } = data

  return NextResponse.json({
    message: `${message} ${name}`,
  })
}
