import { Client } from "@petfinder/petfinder-js"
import { NextApiRequest, NextApiResponse } from "next"

const client = new Client({
  apiKey: process.env.API_KEY,
  secret: process.env.SECRET,
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data: { animals },
  } = await client.animal.search({ type: "Dog", limit: 1, sort: "random" })

  res.status(200).json(animals[0])
}
