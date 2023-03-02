const { MongoClient, ServerApiVersion } = require("mongodb");

// /api/new-meetup
// POST /api/new-meetup

import { NextApiHandler } from "next/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Message = {
  message: string;
};

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Message>
) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const client = new MongoClient(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
