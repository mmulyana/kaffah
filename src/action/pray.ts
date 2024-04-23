'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

export async function PrayAction(formData: FormData) {
  const payload: any = {
    name: formData.get('name'),
    date: formData.get('date'),
    userId: formData.get('userId'),
  }

  const id = formData.get('id') as string
  if (id.includes('key-')) {
    await fetch('http://localhost:3000/api/pray', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } else {
    payload.id = id
    await fetch(`http://localhost:3000/api/pray/${payload.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  revalidateTag('pray_log')
  revalidatePath('/weekly')
}
