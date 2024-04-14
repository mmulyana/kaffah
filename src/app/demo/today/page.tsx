'use client'

import PrayTracker, { PrayTrackerProps } from '@/component/ui/pray-tracker'
import { generateWeekData, getCurrentWeekNumber } from '@/utils/time'
import { useState } from 'react'

export default function Page() {
  const [data, setData] = useState(dummies)

  function handleUpdate(name: string, id: string) {
    const prayerIndex = data.findIndex(
      (prayer) => prayer.name === name
    )
    if (prayerIndex !== -1) {
      const updatedPrayersData = [...data]
      const dataIndex = updatedPrayersData[prayerIndex].data.findIndex(
        (item) => item.id === id
      )
      if (dataIndex !== -1) {
        updatedPrayersData[prayerIndex].data[dataIndex].isDone = !updatedPrayersData[prayerIndex].data[dataIndex].isDone
        setData(updatedPrayersData)
      }
    }
  }

  return (
    <section className='pb-10'>
      <div className='flex flex-col gap-5 w-full h-fit'>
        {data.map((d) => (
          <PrayTracker key={d.name} {...d} onClick={handleUpdate} />
        ))}
      </div>
    </section>
  )
}

const weekNumber = getCurrentWeekNumber()

const dummies: PrayTrackerProps[] = [
  {
    name: 'Fajr',
    data: generateWeekData(weekNumber - 1),
  },
  {
    name: 'Dhuhr',
    data: generateWeekData(weekNumber - 1),
  },
  {
    name: 'Asr',
    data: generateWeekData(weekNumber - 1),
  },
  {
    name: 'Maghrib',
    data: generateWeekData(weekNumber - 1),
  },
  {
    name: 'Isha',
    data: generateWeekData(weekNumber - 1),
  },
]
