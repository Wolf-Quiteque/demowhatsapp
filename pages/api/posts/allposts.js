import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  try {
    const cliente = await clientPromise;
    const db = cliente.db("anje");
    const result = await db
      .collection("posts")
      .aggregate([
        {
          $lookup: {
            from: "usuarios",
            localField: "email",
            foreignField: "email",
            as: "user_info",
          },
        },
        {
          $unwind: "$user_info",
        },
        {
          $project: {
            _id: 1,
            avatar: "$user_info.avatar",
            imageUrl: 1,
            content: 1,
            user: {
              name: "$user_info.nome",
              membership: "$user_info.classe",
              tipo: "$user_info.tipo",
            },
            timestamp: 1,
            comments: 1,
            likes: 1,
          },
        },
      ])
      .toArray();

    res.status(200).json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
