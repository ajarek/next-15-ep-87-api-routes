import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { message: "Hello World", name: "John" },
    { message: "Good Bye World", name: "Eva" },
  ]);
}


