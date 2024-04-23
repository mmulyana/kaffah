import { useEffect, useState } from 'react'
import IconCheck from '../icon/icon-check'

type PrayData = {
  id: string
  isDone: boolean
  date: string
  day: string
}
export type PrayTrackerProps = {
  name: string
  data: PrayData[]
  onClick?: (...param: any) => void
}

export default function PrayTrackerDemo(props: PrayTrackerProps) {
  return (
    <div className='w-full h-fit bg-white px-6 pt-4 pb-5 border-[1.5px] border-[#F0F0F0] rounded-lg'>
      <p className='text-neutral-dark font-medium'>{props.name}</p>
      <div className='flex justify-between items-center mt-3'>
        {props.data.map((item) => (
          <PrayDate
            {...item}
            onClick={props.onClick}
            name={props.name}
            key={item.id}
          />
        ))}
      </div>
    </div>
  )
}

type PrayDateProps = PrayData & {
  name: string
  onClick?: (...param: any) => void
}

function PrayDate(props: PrayDateProps) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <p className='m-0 text-neutral-light text-sm'>{props.day}</p>
      <CheckPray {...props} />
    </div>
  )
}

type checkPrayProps = Omit<PrayData, 'day'> & {
  name: string
  onClick?: (...param: any) => void
}

function CheckPray(props: checkPrayProps) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!!isClient) return <CheckPrayItem {...props} />

  return (
    <div className='h-10 w-10 rounded-full flex items-center justify-center bg-neutral-light animate-pulse'></div>
  )
}

function CheckPrayItem(props: checkPrayProps) {
  if (!!props.isDone) {
    return (
      <div
        onClick={() => props.onClick?.(props.name, props.id)}
        className='h-10 w-10 rounded-full flex items-center justify-center bg-primary-light cursor-pointer'
      >
        <IconCheck />
      </div>
    )
  }

  return (
    <div
      onClick={() => props.onClick?.(props.name, props.id)}
      className='h-10 w-10 rounded-full flex items-center justify-center hover:bg-neutral-light/10 cursor-pointer'
    >
      {props.date}
    </div>
  )
}
