'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode } from 'react'

import Profile from './profile'
import IconHome from '../icon/icon-home'
import IconPieChart from '../icon/icon-pie-chart'
import IconSetting from '../icon/icon-setting'
import { SignOutButton } from '@clerk/nextjs'
import IconLogout from '../icon/icon-logout'

type menu = {
  name: string
  url: string
  icon: ReactNode
}
type SidebarProps = {
  isDemo?: boolean
}
export default function Sidebar(props: SidebarProps) {
  return (
    <div className='h-screen w-[320px] fixed top-0 left-0 px-8 pt-5 hidden lg:flex flex-col'>
      <Profile isDemo={props.isDemo} />
      <div className='flex flex-col mt-8 gap-6'>
        <LinkItems links={props.isDemo ? menusDemo : menus} />
      </div>
      {!props.isDemo && <Logout />}
    </div>
  )
}

type LinkItemsProps = {
  links: menu[]
}

function LinkItems(props: LinkItemsProps) {
  const pathname = usePathname()

  return props.links.map((link) => (
    <LinkItem key={link.name} isActive={pathname == link.url} {...link} />
  ))
}

type LinkItemProps = {
  name: string
  url: string
  icon: React.ReactNode
  isActive?: boolean
}
function LinkItem(props: LinkItemProps) {
  if (!!props.isActive) {
    return (
      <Link
        href={props.url}
        className='h-10 w-full flex gap-[10px] items-center px-3 relative bg-white shadow-[0_1.5px_0px_0px_rgba(217,217,217,1)] rounded-[6px]'
      >
        <div className='h-6 w-[3px] rounded-r absolute top-1/2 -translate-y-1/2 left-0 bg-primary-light' />
        <span className='text-primary-light/70'>{props.icon}</span>
        <span className='text-primary-light'>{props.name}</span>
      </Link>
    )
  }

  return (
    <Link
      href={props.url}
      className='h-10 w-full flex gap-[10px] items-center px-3 relative rounded-[6px] hover:bg-[#A9A9A9]/10'
    >
      <span className='text-neutral-light/30'>{props.icon}</span>
      <span className='text-neutral-dark/90'>{props.name}</span>
    </Link>
  )
}

function Logout() {
  const router = useRouter()
  const logout = () => router.push('/login')

  return (
    <SignOutButton signOutCallback={logout}>
      <button className='h-10 w-full flex gap-[10px] items-center px-3 relative rounded-[6px] hover:bg-[#A9A9A9]/10 mt-auto mb-5 text-neutral-light hover:text-neutral-dark'>
        <span className='opacity-40'>
          <IconLogout />
        </span>
        <span className=''>Logout</span>
      </button>
    </SignOutButton>
  )
}

const menus: menu[] = [
  {
    name: 'Weekly',
    url: '/weekly',
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
const menusDemo: menu[] = [
  {
    name: 'Weekly',
    url: '/demo/weekly',
    icon: <IconHome />,
  },
  {
    name: 'Analytic',
    url: '/demo/analytic',
    icon: <IconPieChart />,
  },
  {
    name: 'Setting',
    url: '/demo/setting',
    icon: <IconSetting />,
  },
]
