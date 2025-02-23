import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const { email, ...restofData } = data;

  const cliente = await clientPromise;
  const db = cliente.db("anje");

  const result = await db
    .collection("usuarios")
    .deleteOne({ email: email });

  res.json(result);
}
