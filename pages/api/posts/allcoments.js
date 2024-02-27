import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "bson";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const { id } = data;

  const cliente = await clientPromise;
  const db = cliente.db("anje");
  const resul = await db.collection("posts").findOne({ _id: new ObjectId(id) });
  res.json(resul);
}
