import prisma from '@/utils/db'
import { PRAY_NAMES, fillEmptyPrayData } from '@/utils/pray'
import { convertToDay, generateWeekDates, getWeekDates } from '@/utils/time'
import { NextRequest, NextResponse } from 'next/server'

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

    const week = generateWeekDates(start_date, end_date)

    const dataPrayInWeek = await Promise.all(
      week.map(async (i) => {
        const dateTmp = new Date(i)
        const date = dateTmp.toISOString()
        const data = await prisma.pray_log.findMany({
          where: {
            userID: params.id,
            date: {
              equals: date,
            },
          },
        })

        return {
          name: i,
          data,
        }
      })
    )

    const data = dataPrayInWeek.map((d) => {
      const name = convertToDay(d.name)
      let tmp = fillEmptyPrayData(d.data, d.name, params.id)

      const map: Map<string, typeof tmp> = new Map()
      tmp.forEach((obj) => map.set(obj.name, obj))

      const data = [...PRAY_NAMES].map((name) => map.get(name))

      return {
        name,
        data,
      }
    })

    return NextResponse.json({
      data: data,
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
