import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(_request: NextRequest, _response: NextResponse) {
  try {
    const prisma = new PrismaClient()
    const data = await prisma.skills.findMany()
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function CREATE(request: NextApiRequest, response: NextApiResponse) {
  const { skillType, skillName } = JSON.parse(request.body)
  try {
    const prisma = new PrismaClient()
    // TODO 生成する値は仮埋め
    const data = await prisma.skills.create({
      select: {
        skilltype: true,
        skillname: true
      },
      data: {
        skilltype: '',
        skillname: ''
      }
    })
    return response.status(200).json({ data })
  } catch (error) {
    response.status(500).json({ error })
  }
}

async function DELETE(request: NextApiRequest, response: NextApiResponse) {
  const { id } = JSON.parse(request.body)

  try {
    const prisma = new PrismaClient()
    const data = await prisma.skills.delete({
      where: {
        id: parseInt(id, 10)
      }
    })

    return response.status(200).json({ data })
  } catch (error) {
    return response.status(500).json({ error })
  }
}
