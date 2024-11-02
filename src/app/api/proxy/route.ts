import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const url = searchParams.get('url');
  
  if (!url) {
    return Response.json({ error: "URL is required!" }, { status: 404 });
  }

  try {
    const response = await axios.get(url);
    return Response.json(response.data, { status: 200 });
  } catch (error: any) {
    console.log(error.response.data);
    return Response.json(error.response.data, { status: 200 });
  }
}
