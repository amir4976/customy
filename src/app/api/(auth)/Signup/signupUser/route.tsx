import { hashPassword, generateToken } from "@/utils/tools";
import connectToDB from "@/utils/ConnectToDB";
import Customer from "@/Moduls/Customers";
export async function POST(req, res) {
  await connectToDB();
  try {
    const reqBody = await req.json();
    const {
      username,
      password,
      email,
      education,
      job,
      zipCode,
      phone,
      optionalPhone,
      province,
      city,
      postalCode,
      address,
    } = reqBody;
    console.log(address);
    const hashedPassword = await hashPassword(password);
    console.log(reqBody);
    const tokenGenration = generateToken(email);
    console.log(tokenGenration);

    const user = {
      username,
      zipCode,
      email,
      password: hashedPassword,
      phone,
      province,
      city,
      postCode: postalCode,
      education,
      job,
      optionalPhone,
      address,
      token: tokenGenration,
    };
    console.log(user);
    Customer.create(user);
  } catch (error) {
    console.log(error);
  }
  return Response.json({ message: "User created successfully" });
}
