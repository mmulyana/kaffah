import { SignIn } from '@clerk/nextjs'
import previewImg from '/public/preview.png'
import Image from 'next/image'

export default function Page() {
  return (
    <section className='h-fit lg:h-screen w-full flex flex-col-reverse md:grid grid-cols-2'>
      <div className='w-full h-full flex items-center justify-center'>
        <SignIn />
      </div>
      <div className='p-2 lg:p-4'>
        <div className='w-full h-[180px] md:h-full bg-blue-600 rounded-lg lg:rounded-3xl relative overflow-hidden'>
          <Image
            src={previewImg.src}
            alt='preview'
            width={1200}
            height={960}
            className='relative lg:absolute w-[calc(100%-72px)] h-auto bottom-0 lg:bottom-8 left-1/2 -translate-x-1/2 rounded-xl'
          />
        </div>
      </div>
    </section>
  )
}
