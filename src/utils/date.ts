export const unixToDate = (unix: number): Date => new Date(unix * 1000)
export const dateToUnix = (date: Date): number => date.getTime() / 1000

export const formatDayMonthYear = (date: Date) => {
  const day = date.getDate()
  const month = date.toLocaleString('en', { month: 'long' })
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}
