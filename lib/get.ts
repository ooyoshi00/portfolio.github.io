import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from './prisma'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const data = await prisma.post.findMany()
    return response.status(200).json({ data })
  } catch (error) {
    response.status(500).json({ error })
  }
}

export default handler
