import { postRequest } from "@/utils/axiosUtility";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const data = await req.json();
  //   console.log(data);
  try {
    const res = await postRequest("/auth/users/", data);
    return NextResponse.json(
      { res, message: "Account created sucessfully" },
      { status: 201 }
    );
  } catch (error: any) {
    // console.error(error.data);
    return NextResponse.json(
      { res: error, message: "Something went wrong" },
      { status: 500 }
    );
  }
};
