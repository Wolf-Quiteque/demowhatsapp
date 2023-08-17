import { hashPassword } from "../../../lib/auth";
import clientPromise from "../../../lib/mongodb";
import makeid from "../../../lib/random";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  var data = req.body;
  const client = await clientPromise;

  const db = client.db("anje");
  const now = new Date();

  const existingUser = await db
    .collection("usuarios")
    .findOne({ email: data.email });

  if (existingUser) {
    res.status(422).json({ message: "Email já existe" });
    return;
  }

  const userpassword = makeid();
  const hashedPassword = await hashPassword(userpassword);

  data.password = hashedPassword;
  data.createdAt = new Date(now.getTime() + 1);
  const response = await db.collection("usuarios").insertOne(data);

  res.status(200).json({ message: "success" });
}

export default handler;
