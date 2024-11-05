import axios from "axios";

export default async function authorization(email: string, password: string): Promise<string | null> {
  try {
    const { data } = await axios.post(`/api/authentication`, {
      data: {
        login: email,
        password: password
      }
    });

    return data.accessToken;
  } catch (error) {
    return null;
  }
}

export function verifyToken(token: string) {
  return token === process.env.JWT_SECRET_TOKEN;
}
