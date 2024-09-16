export async function GET() {
  const res = await fetch('https://zenquotes.io/api/random', { cache: 'no-store' })
  const data = await res.json()
  return Response.json({data})
}