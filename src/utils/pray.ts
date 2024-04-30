export const PRAY_NAMES = ['fajr', 'dhuhr', 'asr', 'magrib', 'isha']

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
        id: 'key-' + generateId(),
        name: name,
        isDone: false,
        userID: id,
      })
    }

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return filledData
}

export function fillEmptyPrayData(data: any[], date: string, id: string) {
  let newData: any = []
  PRAY_NAMES.forEach((name) => {
    const existingPrayer = data.find((pray) => pray.name === name)
    if (!existingPrayer) {
      newData.push({
        id: 'key-' + generateId(),
        name: name,
        date: date,
        isDone: false,
        userID: id,
      })
    }
  })

  let result: any[] = [...data, ...newData]

  return result
}
