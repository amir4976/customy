import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import connectToDB from "@/utils/ConnectToDB";
import Customer from "@/Moduls/Customers";
export async function GET(req, res) {
  try {
    await connectToDB();
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    const decodedToken = jwt.verify(token?.value, "your-256-bit-secret");
    const email = decodedToken?.email;
    const user = await Customer.findOne({ email });
    

    return Response.json(user);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "User created successfully" });
  }

  return Response.json();
}
