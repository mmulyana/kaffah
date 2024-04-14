import IconCheck from '../icon/icon-check'

export type PrayTrackerProps = {
  name: string
  data: {
    id: string
    isDone: boolean
    date: string
    day: string
  }[]
}

export default function PrayTracker(props: PrayTrackerProps) {
  return (
    <div className='w-full h-fit bg-white px-6 pt-4 pb-5 border border-[#F0F0F0] rounded-lg'>
      <p>{props.name}</p>
      <div className='flex justify-between items-center mt-3'>
        {props.data.map((item) => (
          <PrayDate {...item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

type PrayDateProps = {
  day: string
  isDone: boolean
  date: string
}

function PrayDate(props: PrayDateProps) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <p className='m-0 text-neutral-light text-sm'>{props.day}</p>
      <CheckPray {...props} />
    </div>
  )
}

type checkPrayProps = {
  isDone: boolean
  date: string
}

function CheckPray(props: checkPrayProps) {
  if (!props.isDone) {
    return (
      <div className='h-10 w-10 rounded-full flex items-center justify-center hover:bg-neutral-light/10 cursor-pointer'>
        {props.date}
      </div>
    )
  }

  return (
    <div className='h-10 w-10 rounded-full flex items-center justify-center bg-primary-light cursor-pointer'>
      <IconCheck />
    </div>
  )
}
