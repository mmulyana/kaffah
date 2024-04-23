import { PrayAction } from '@/action/pray'
import IconCheck from '../icon/icon-check'
import { getDayByDate } from '@/utils/time'
type Props = {
  name: string
  userId: string
  data: {
    id: string
    name: string
    date: string
    isDone: boolean
  }[]
}
export default function PrayTracker(props: Props) {
  return (
    <div className='w-full h-fit bg-white px-6 pt-4 pb-5 border-[1.5px] border-[#F0F0F0] rounded-lg'>
      <p className='text-neutral-dark font-medium'>{props.name}</p>
      <div className='flex justify-between items-center mt-3'>
        {props.data.map((item) => (
          <PrayDate
            key={item.id}
            data={item}
            userId={props.userId}
            name={props.name}
          />
        ))}
      </div>
    </div>
  )
}

type PrayDateProps = {
  name: string
  userId?: string
  data: {
    id: string
    name: string
    date: string
    isDone: boolean
  }
}
function PrayDate(props: PrayDateProps) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <p className='m-0 text-neutral-light text-sm'>
        {getDayByDate(props.data.date)}
      </p>
      <form action={PrayAction}>
        <input
          name='isDone'
          defaultValue={props.data.isDone ? 'true' : 'false'}
          hidden
        />
        <input name='date' defaultValue={props.data.date} hidden />
        <input name='name' defaultValue={props.data.name} hidden />
        <input name='userId' defaultValue={props.userId} hidden />
        <input name='id' defaultValue={props.data.id} hidden />
        <CheckPrayItem
          isDone={props.data.isDone}
          date={props.data.date.slice(8, 10)}
        />
      </form>
    </div>
  )
}

type CheckPrayItemProps = {
  isDone: boolean
  date: string
}
function CheckPrayItem(props: CheckPrayItemProps) {
  if (!!props.isDone) {
    return (
      <button
        type='submit'
        className='h-10 w-10 rounded-full flex items-center justify-center bg-primary-light cursor-pointer'
      >
        <IconCheck />
      </button>
    )
  }

  return (
    <button
      type='submit'
      className='h-10 w-10 rounded-full flex items-center justify-center hover:bg-neutral-light/10 cursor-pointer'
    >
      {props.date}
    </button>
  )
}
