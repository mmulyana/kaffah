import prisma from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { date, name, userId: userID } = await req.json()
    const data = await prisma.pray_log.create({
      data: {
        name,
        isDone: true,
        date: new Date(date),
        userID,
      },
    })
    return NextResponse.json(
      {
        data,
        message: 'success',
      },
      {
        status: 200,
      }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
