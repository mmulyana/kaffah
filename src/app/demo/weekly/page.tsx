'use client'

import Header from '@/component/ui/header'
import PrayTracker, { PrayTrackerProps } from '@/component/ui/pray-tracker'
import { generateWeekData, getCurrentWeekNumber } from '@/utils/time'
import { useEffect, useState } from 'react'

export default function Page() {
  const [index, setIndex] = useState(0)
  const [data, setData] = useState(generateData(index))

  useEffect(() => {
    setData(generateData(index))
  }, [index])

  function handleIndex(type: 'INC' | 'DEC') {
    if (type === 'INC') return setIndex((prev) => prev + 1)
    setIndex((prev) => prev - 1)
  }

  function handleUpdate(name: string, id: string) {
    const prayerIndex = data.findIndex((prayer) => prayer.name === name)
    if (prayerIndex !== -1) {
      const updatedPrayersData = [...data]
      const dataIndex = updatedPrayersData[prayerIndex].data.findIndex(
        (item) => item.id === id
      )
      if (dataIndex !== -1) {
        updatedPrayersData[prayerIndex].data[dataIndex].isDone =
          !updatedPrayersData[prayerIndex].data[dataIndex].isDone
        setData(updatedPrayersData)
      }
    }
  }

  return (
    <section className='pb-10'>
      <Header index={index} handleIndex={handleIndex} />
      <div className='flex flex-col gap-5 w-full h-fit'>
        {data.map((d) => (
          <PrayTracker key={d.name} {...d} onClick={handleUpdate} />
        ))}
      </div>
    </section>
  )
}

const weekNumber = getCurrentWeekNumber()

function generateData(index: number) {
  return [
    {
      name: 'Fajr',
      data: generateWeekData(weekNumber - index),
    },
    {
      name: 'Dhuhr',
      data: generateWeekData(weekNumber - index),
    },
    {
      name: 'Asr',
      data: generateWeekData(weekNumber - index),
    },
    {
      name: 'Maghrib',
      data: generateWeekData(weekNumber - index),
    },
    {
      name: 'Isha',
      data: generateWeekData(weekNumber - index),
    },
  ]
}
