export async function POST(req: Request) {
  const body = await req.json();
  
  const login = body['login'];
  const password = body['password'];

  if (login === process.env.ADMIN_EMAIL && password === process.env.ADMIN_ACCESS_KEY) {
    return Response.json({
      accessToken: process.env.JWT_SECRET_TOKEN
    });
  } else {
    return Response.json({ }, { status: 401});
  }
}
