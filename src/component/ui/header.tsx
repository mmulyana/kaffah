'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from './button'

import { changeWeek, convertToDate, getWeekDates } from '@/utils/time'
import IconChevron from '../icon/icon-chevron'
import IconCalendar from '../icon/icon-calendar'

export default function Header() {
  const [data, setData] = useState(getWeekDates())
  const router = useRouter()

  return (
    <div className='w-full h-fit flex justify-between items-center mb-6'>
      <div className='relative pl-2.5'>
        <div className='h-[calc(100%-10px)] w-1 rounded-lg bg-primary-light absolute top-1/2 -translate-y-1/2 left-0' />
        <p className='text-lg text-neutral-dark font-medium'>Weekly</p>
      </div>
      <div className='flex gap-4 items-center'>
        <div className='h-10 px-4 bg-white shadow-[0_1.5px_0px_0px_rgba(217,217,217,1)] flex items-center rounded-full gap-2'>
          <IconCalendar height='20' width='20' />
          <div className='flex gap-2 items-center'>
            <p className='text-sm'>{convertToDate(data.first)}</p>
            <div className='w-2 h-0.5 bg-neutral-light/50 rounded' />
            <p className='text-sm'>{convertToDate(data.last)}</p>
          </div>
        </div>
        <Button
          onClick={() => {
            const newData = changeWeek(data, 'prev')
            setData(newData)
            router.push(`?s=${newData.first}&e=${newData.last}`)
          }}
          className='h-10 w-10 rounded-full flex items-center justify-center bg-white shadow-[0_1.5px_0px_0px_rgba(217,217,217,1)] hover:shadow-[0_4px_4px_0px_rgba(217,217,217,1)] duration-75 ease-in'
        >
          <span className='rotate-90'>
            <IconChevron stroke='#1F1F21' />
          </span>
        </Button>
        <Button
          onClick={() => {
            const newData = changeWeek(data, 'next')
            setData(newData)
            router.push(`?s=${newData.first}&e=${newData.last}`)
          }}
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
