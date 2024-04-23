export function generateId(): number {
  return Math.floor(Math.random() * 1000)
}

export function fillEmptyData(
  name: string,
  id: string,
  start: string,
  end: string,
  data: any[]
): any[] {
  const filledData: any[] = []
  let currentDate = new Date(start)
  let endDate = new Date(end)

  while (currentDate <= endDate) {
    const existingEntry = data.find(
      (entry) =>
        new Date(entry.date).toISOString() === currentDate.toISOString()
    )

    if (existingEntry) {
      filledData.push(existingEntry)
    } else {
      filledData.push({
        date: currentDate.toISOString().slice(0, 10),
        id: generateId(),
        name: name,
        isDone: false,
        userID: id,
      })
    }

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return filledData
}

export function getWeekDates(): { first: string; last: string } {
  const date = new Date()
  const dayOfWeek = date.getDay()

  const firstDayOfWeek = new Date(date)
  firstDayOfWeek.setDate(date.getDate() - dayOfWeek + 1)

  const lastDayOfWeek = new Date(firstDayOfWeek)
  lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6)

  const firstDate = new Date(
    firstDayOfWeek.getFullYear(),
    firstDayOfWeek.getMonth(),
    firstDayOfWeek.getDate()
  )
  const lastDate = new Date(
    lastDayOfWeek.getFullYear(),
    lastDayOfWeek.getMonth(),
    lastDayOfWeek.getDate()
  )

  return {
    first: firstDate.toISOString().slice(0, 10),
    last: lastDate.toISOString().slice(0, 10),
  }
}
