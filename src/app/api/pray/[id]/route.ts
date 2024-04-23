import prisma from '@/utils/db'
import { fillEmptyData, getWeekDates } from '@/utils/pray'
import { getFirstDay } from '@/utils/time'
import { NextRequest, NextResponse } from 'next/server'

interface PrayLog {
  id: number
  name: string
  date: string
  isDone: boolean
  userID: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const searchParams = request.nextUrl.searchParams
    const s = searchParams.get('s') as string
    const e = searchParams.get('e') as string

    let start_date = null
    let end_date = null
    if (!s || !e) {
      const { first, last } = getWeekDates()
      start_date = new Date(first).toISOString()
      end_date = new Date(last).toISOString()
    } else {
      start_date = new Date(s).toISOString().slice(0, 10)
      end_date = new Date(e).toISOString().slice(0, 10)
    }

    const data = await Promise.all(
      ['fajr', 'dhuhr', 'asr', 'magrib', 'isha'].map(async (i) => {
        const data = await prisma.pray_log.findMany({
          where: {
            userID: params.id,
            name: i,
            date: {
              lte: new Date(end_date),
              gte: new Date(start_date),
            },
          },
        })

        return {
          name: i,
          data,
        }
      })
    )

    const newData = data.map((d) => ({
      name: d.name,
      data: fillEmptyData(d.name, params.id, start_date, end_date, d.data),
    }))

    return NextResponse.json({
      data: newData,
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ mesage: error }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await prisma.pray_log.delete({
      where: {
        id: parseInt(params.id),
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
