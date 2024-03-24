import Navbar from '@/component/layout/navbar'
import Sidebar from '@/component/layout/sidebar'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Sidebar />
      <div className='ml-[360px] px-4'>
        <Navbar />
        <div>{children}</div>
      </div>
    </>
  )
}
