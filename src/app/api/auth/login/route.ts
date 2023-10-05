import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AxiosUtility, postRequest } from "@/utils/axiosUtility";

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  try {
    const res = await AxiosUtility.post("/auth/jwt/create/", {
      email: data.email,
      password: data.password,
    });
    const response = new NextResponse(JSON.stringify(res.data));
    return response;
  } catch (e: any) {
    // console.log(e.response.data.message)
    return new Response(JSON.stringify(e.response.data), {
      status: e.response.status,
    });
  }
}
