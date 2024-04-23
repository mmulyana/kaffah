import Header from '@/component/ui/header'
import PrayTracker from '@/component/ui/pray-tracker'
import { auth } from '@clerk/nextjs'

type Props = {
  params: {
    week: string
  }
}
export default async function Page({ params }: Props) {
  const { userId } = auth()
  const res = await fetch(`http://localhost:3000/api/pray/${userId}`, {
    next: { tags: ['pray_log'], revalidate: 3000 },
  })
  const { data } = await res.json()

  return (
    <section className='pb-10'>
      {/* <Header index={params.week} handleIndex={handleIndex} /> */}
      <div className='flex flex-col gap-5 w-full h-fit'>
        {data?.map((item: any, i: number) => (
          <PrayTracker
            userId={userId ?? ''}
            data={item.data}
            name={item.name}
            key={i}
          />
        ))}
      </div>
    </section>
  )
}
