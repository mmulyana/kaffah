import Sidebar from '@/component/layout/sidebar'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Sidebar />
      <div className='ml-[360px] px-4'>
        <div className='pt-5'>{children}</div>
      </div>
    </>
  )
}
