import Sidebar from '@/component/ui/sidebar'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Sidebar />
      <div className='px-4'>
        <div className='pt-5 max-w-[560px] mx-auto'>{children}</div>
      </div>
    </>
  )
}
