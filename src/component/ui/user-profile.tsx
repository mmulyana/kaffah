'use client'

import { useUser } from '@clerk/nextjs'
import IconImagePlaceholder from '../icon/icon-image-placeholder'
import Image from 'next/image'

export default function UserProfile() {
  const { isLoaded, user } = useUser()

  if (!isLoaded) return <UserLoading />

  return (
    <div className='grid grid-cols-[48px_1fr] gap-3 p-[10px] bg-white rounded-[6px]'>
      {user?.hasImage ? (
        <Image
          src={user?.imageUrl ?? ''}
          alt='profile img'
          width={500}
          height={500}
          className='h-12 w-12 rounded-[5px]'
        />
      ) : (
        <div className='flex items-center justify-center h-12 w-12 bg-gray-300 rounded-[5px]'>
          <IconImagePlaceholder />
        </div>
      )}
      <div className='w-full flex flex-col items-start justify-center'>
        <p className='text-neutral-dark mb-0.5 text-base'>{user?.username}</p>
        <p className='text-neutral-light/50 text-sm'>
          {user?.primaryEmailAddress?.emailAddress}
        </p>
      </div>
    </div>
  )
}

function UserLoading() {
  return (
    <div className='flex gap-3 p-[10px] bg-white rounded-[6px] w-full'>
      <div role='status' className='grid grid-cols-[48px_1fr] gap-3 animate-pulse w-full'>
        <div className='flex items-center justify-center h-12 w-12 bg-gray-300 rounded-[5px]'>
          <IconImagePlaceholder />
        </div>
        <div className='w-full flex flex-col items-start justify-center'>
          <div className='h-3 bg-neutral-dark rounded w-1/3 mb-1'></div>
          <div className='h-3 bg-neutral-light/50 rounded w-3/5' />
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </div>
  )
}
