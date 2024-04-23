const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

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

export function getFirstDayByWeek(weekNumber: number): string {
  const startDateOfYear = new Date(new Date().getFullYear(), 0, 1)
  const firstDayOfYear = startDateOfYear.getDay()
  const daysToAdd = (weekNumber - 1) * 7 - firstDayOfYear + 1
  const startDateOfWeek = new Date(startDateOfYear)
  startDateOfWeek.setDate(startDateOfWeek.getDate() + daysToAdd)

  const date = startDateOfWeek.getDate()
  const monthIndex = startDateOfWeek.getMonth()
  const month = MONTHS[monthIndex]

  return `${date} ${month}`
}

export function getLastDayByWeek(weekNumber: number): string {
  const startDateOfYear = new Date(new Date().getFullYear(), 0, 1)
  const firstDayOfYear = startDateOfYear.getDay()
  const daysToAdd = (weekNumber - 1) * 7 - firstDayOfYear + 7
  const endDateOfWeek = new Date(startDateOfYear)
  endDateOfWeek.setDate(endDateOfWeek.getDate() + daysToAdd)

  const date = endDateOfWeek.getDate()
  const monthIndex = endDateOfWeek.getMonth()
  const month = MONTHS[monthIndex]

  return `${date} ${month}`
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
    let date = firstDayOfWeek.getDate() + i
    let month = firstDayOfWeek.getMonth() + 1
    const year = firstDayOfWeek.getFullYear()
    const isDone = false
    const id = day.toLowerCase()

    const daysInMonth = new Date(year, month, 0).getDate()
    if (date > daysInMonth) {
      date -= daysInMonth
      month++
    }

    return { date: date.toString(), day, isDone, id }
  })
}

export function getDayByDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { weekday: 'short' })
}

export function convertToDate(dateStr: string) {
  const date = new Date(dateStr)
  const day = date.getDate()
  const month = date.toLocaleString('en-US', { month: 'short' })

  return `${day} ${month}`
}

export function changeWeek(
  dateRange: { first: string; last: string },
  direction: 'next' | 'prev'
) {
  const { first, last } = dateRange
  const firstDate = new Date(first)
  const lastDate = new Date(last)

  const increment = direction === 'next' ? 7 : -7

  const newFirstDate = new Date(
    firstDate.getTime() + increment * 24 * 60 * 60 * 1000
  )
  const newLastDate = new Date(
    lastDate.getTime() + increment * 24 * 60 * 60 * 1000
  )
  return {
    first: newFirstDate.toISOString().split('T')[0],
    last: newLastDate.toISOString().split('T')[0],
  }
}
