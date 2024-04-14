import PrayTracker, { PrayTrackerProps } from '@/component/ui/pray-tracker'
import { generateWeekData, getCurrentWeekNumber } from '@/utils/time'

export default async function Page() {
  return (
    <section className='max-w-[560px] mx-auto pb-10'>
      <div className='flex flex-col gap-5 w-full h-fit'>
        {data.map((d) => (
          <PrayTracker key={d.name} {...d} />
        ))}
      </div>
    </section>
  )
}

const weekNumber = getCurrentWeekNumber()

const data: PrayTrackerProps[] = [
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
