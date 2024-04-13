'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import UserProfile from '../ui/user-profile'
import IconHome from '../icon/icon-home'
import IconPieChart from '../icon/icon-pie-chart'
import IconSetting from '../icon/icon-setting'

type menu = {
  name: string
  url: string
  icon: ReactNode
}

const menus: menu[] = [
  {
    name: 'Today',
    url: '/today',
    icon: <IconHome />,
  },
  {
    name: 'Analytic',
    url: '/analytic',
    icon: <IconPieChart />,
  },
  {
    name: 'Setting',
    url: '/setting',
    icon: <IconSetting />,
  },
]

export default function Sidebar() {
  return (
    <div className='h-screen w-[320px] fixed top-0 left-0 px-8 pt-5 hidden lg:flex flex-col'>
      <UserProfile />
      <div className='flex flex-col mt-8 gap-6'>
        <LinkItems links={menus} />
      </div>
    </div>
  )
}

type LinkItemProps = {
  links: menu[]
}

function LinkItems(props: LinkItemProps) {
  const pathname = usePathname()

  return props.links.map((link) => {
    if (pathname == link.url) {
      return (
        <Link
          key={link.url}
          href={link.url}
          className='h-10 w-full flex gap-[10px] items-center px-3 relative bg-white shadow-[0_1.5px_0px_0px_rgba(217,217,217,1)] rounded-[6px]'
        >
          <div className='h-6 w-[3px] rounded-r absolute top-1/2 -translate-y-1/2 left-0 bg-primary-light' />
          <span className='text-primary-light/70'>{link.icon}</span>
          <span className='text-primary-light'>{link.name}</span>
        </Link>
      )
    }
    return (
      <Link
        key={link.url}
        href={link.url}
        className='h-10 w-full flex gap-[10px] items-center px-3 relative rounded-[6px] hover:bg-[#A9A9A9]/10'
      >
        <span className='text-neutral-light/30'>{link.icon}</span>
        <span className='text-neutral-dark/90'>{link.name}</span>
      </Link>
    )
  })
}
