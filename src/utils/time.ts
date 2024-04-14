export function getCurrentWeekNumber(): number {
  const today: Date = new Date()
  const firstDayOfYear: Date = new Date(today.getFullYear(), 0, 1)
  const pastDaysOfYear: number =
    (today.getTime() - firstDayOfYear.getTime()) / (1000 * 60 * 60 * 24)
  const weekNumber: number = Math.ceil(
    (pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7
  )
  return weekNumber
}


export function generateWeekData(weekNumber: number) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const today = new Date()
  const year = today.getFullYear()

  const firstDayOfYear = new Date(year, 0, 1)
  const pastDaysOfYear = (weekNumber - 1) * 7 * 24 * 60 * 60 * 1000
  const firstDayOfWeek = new Date(firstDayOfYear.getTime() + pastDaysOfYear)
  const todayDay = firstDayOfWeek.getDay()

  return [0, 1, 2, 3, 4, 5, 6].map((_, i) => {
    const dayIndex = (todayDay + i) % 7
    const day = daysOfWeek[dayIndex]
    const date = firstDayOfWeek.getDate() + i
    const isDone = Math.random() < 0.5
    const id = day.toLowerCase()
    return { date: date.toString(), day, isDone, id };
  })
}