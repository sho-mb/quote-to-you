import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('category')
  const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${query}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': process.env.API_KEY as string,
    },
  })
  const data = await res.json();
  return Response.json({data})
}