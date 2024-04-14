import Sidebar from '@/component/ui/sidebar'

export default function LayoutDemo({ children }: React.PropsWithChildren) {
  return (
    <>
      <Sidebar isDemo />
      <div className='px-4'>
        <div className='pt-5 max-w-[560px] mx-auto'>{children}</div>
      </div>
    </>
  )
}
