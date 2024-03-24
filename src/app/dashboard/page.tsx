import { UserButton, auth, currentUser } from '@clerk/nextjs'

export default async function Page() {
  const { userId } = auth()

  if (!userId) {
    return <div className='w-56 h-20 rounded bg-gray-400 animate-ping' />
  }

  const user = await currentUser()

  return (
    <div className=''>
      <p>Home page</p>
    </div>
  )
}
