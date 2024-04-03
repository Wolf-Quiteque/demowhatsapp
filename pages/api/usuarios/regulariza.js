import clientPromise from "../../../lib/mongodb";
import makeid from "../../../lib/random";
import { hashPassword } from "../../../lib/auth";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }
  return
  const cliente = await clientPromise;
  const db = cliente.db("anje");
  // Update many documents
  const result = await db
    .collection("usuarios")
    .updateMany({ classe: { $exists: true } }, { $set: { estado: true}});

  res.json();
}
