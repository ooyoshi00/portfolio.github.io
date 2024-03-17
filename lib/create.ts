import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from './prisma'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { title, description } = JSON.parse(request.body)
  try {
    const data = await prisma.post.create({
      select: {
        id: true,
        title: true,
        description: true
      },
      data: {
        title: title,
        description: description
      }
    })
    return response.status(200).json({ data })
  } catch (error) {
    response.status(500).json({ error })
  }
}

export default handler
