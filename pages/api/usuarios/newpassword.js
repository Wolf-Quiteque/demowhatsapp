import clientPromise from "../../../lib/mongodb";
import makeid from "../../../lib/random";
import { hashPassword } from "../../../lib/auth";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const { email, ...restofData } = data;

  const cliente = await clientPromise;
  const db = cliente.db("anje");
  const userpassword = makeid();
  const newpassword = await hashPassword(userpassword);
  const result = await db
    .collection("usuarios")
    .updateOne({ email: email },  { $set:{password: newpassword} });
  console.log(result)
  res.json({password:userpassword});
}
