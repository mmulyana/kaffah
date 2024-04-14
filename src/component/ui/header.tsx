'use client'

import { useState } from 'react'
import IconCalendar from '../icon/icon-calendar'
import IconChevron from '../icon/icon-chevron'
import Button from './button'
import { getCurrentWeekNumber, getFirstDay, getLastDay } from '@/utils/time'

const currentWeekNumber = getCurrentWeekNumber()

type Props = {
  index: number
  handleIndex: (...param: any) => void
}
export default function Header(props: Props) {
  const [weekNumber, setWeekNumber] = useState(currentWeekNumber)

  return (
    <div className='w-full h-fit flex justify-between items-center mb-6'>
      <div className='relative pl-2.5'>
        <div className='h-[calc(100%-10px)] w-1 rounded-lg bg-primary-light absolute top-1/2 -translate-y-1/2 left-0' />
        <p className='text-lg text-neutral-dark font-medium'>Today</p>
      </div>
      <div className='flex gap-4 items-center'>
        <div className='h-10 px-4 bg-white shadow-[0_1.5px_0px_0px_rgba(217,217,217,1)] flex items-center rounded-full gap-2'>
          <IconCalendar height='20' width='20' />
          <div className='flex gap-2 items-center'>
            <p className='text-sm'>{getFirstDay(weekNumber - props.index)}</p>
            <div className='w-2 h-0.5 bg-neutral-light/50 rounded' />
            <p className='text-sm'>{getLastDay(weekNumber - props.index)}</p>
          </div>
        </div>
        <Button
          onClick={()=> props.handleIndex('INC')}
          className='h-10 w-10 rounded-full flex items-center justify-center bg-white shadow-[0_1.5px_0px_0px_rgba(217,217,217,1)] hover:shadow-[0_4px_4px_0px_rgba(217,217,217,1)] duration-75 ease-in'
          >
          <span className='rotate-90'>
            <IconChevron stroke='#1F1F21' />
          </span>
        </Button>
        <Button
          onClick={()=> props.handleIndex('DEC')}
          className='h-10 w-10 rounded-full flex items-center justify-center bg-white shadow-[0_1.5px_0px_0px_rgba(217,217,217,1)] hover:shadow-[0_4px_4px_0px_rgba(217,217,217,1)] duration-75 ease-in'
        >
          <span className='-rotate-90'>
            <IconChevron stroke='#1F1F21' />
          </span>
        </Button>
      </div>
    </div>
  )
}
