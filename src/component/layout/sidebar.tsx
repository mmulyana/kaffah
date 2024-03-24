import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className='h-screen w-[360px] fixed top-0 left-0 px-4'>
      <div className='h-16 w-full pt-3 flex gap-2'>
        <div className='w-7 h-7 rounded-full bg-[#745EFF] flex justify-center items-center text-white'>
          <span className='m-0 text-lg'>K</span>
        </div>
        <p className='text-lg font-medium text-[#2e2e2e]'>Kaffah</p>
      </div>
      <div className='mt-2 flex flex-col gap-5'>
        <Link
          href={'/dashboard'}
          className='block py-3 px-5 relative bg-white rounded-xl shadow-md shadow-gray-200'
        >
          <div className='w-[5px] h-[25px] bg-[#745EFF] rounded-xl absolute top-1/2 -translate-y-1/2 left-0' />
          <p className='text-[#1F1F21]'>Today</p>
        </Link>
        <Link
          href={'/dashboard'}
          className='block py-3 px-5 relative rounded-xl hover:bg-white/50'
        >
          <p className='text-[#9A9A9A]'>Progress</p>
        </Link>
        <Link
          href={'/dashboard'}
          className='block py-3 px-5 relative rounded-xl hover:bg-white/50'
        >
          <p className='text-[#9A9A9A]'>Checklist</p>
        </Link>
      </div>
    </div>
  )
}
