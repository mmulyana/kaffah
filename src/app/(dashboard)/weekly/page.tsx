import Header from '@/component/ui/header'
import PrayTracker from '@/component/ui/pray-tracker'
import { auth } from '@clerk/nextjs'

type Props = {
  params: {
    week: string
  },
  searchParams: {
    s: string
    e: string
  }
}
export default async function Page({ params, searchParams }: Props) {
  const { userId } = auth()
  let url = `http://localhost:3000/api/pray/${userId}`

  if(searchParams.s && searchParams.e) url += `?s=${searchParams.s}&e=${searchParams.e}`

  const res = await fetch(url, {
    next: { tags: ['pray_log'], revalidate: 1000 },
  })
  const { data } = await res.json()

  return (
    <section className='pb-10'>
      <Header />
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
