import IconCheck from '../icon/icon-check'

type PrayTrackerProps = {
  name: string
  data: {
    id: string
    isDone: boolean
    date: string
    day: string
  }[]
}

function PrayTracker(props: PrayTrackerProps) {
  return (
    <div className='w-full h-fit'>
      <p>{props.name}</p>
      {props.data.map((item) => (
        <PrayDate {...item} key={item.id} />
      ))}
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
    <div className='flex flex-col items-center gap-4'>
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
      <div className='h-10 w-10 rounded-full flex items-center justify-center'>
        {props.date}
      </div>
    )
  }

  return (
    <div className='h-10 w-10 rounded-full flex items-center justify-center'>
      <IconCheck />
    </div>
  )
}
