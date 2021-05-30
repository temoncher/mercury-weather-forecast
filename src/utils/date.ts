export const unixToDate = (unix: number): Date => new Date(unix * 1000)
export const dateToUnix = (date: Date): number => date.getTime() / 1000

export const formatDayMonthYear = (date: Date) => {
  const day = date.getDate()
  const month = date.toLocaleString('en', { month: 'long' })
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}

export const dateToISO = (date: Date): string => date.toISOString().substring(0, 10)

export const subtractDays = (date: Date, numberOfDays: number): Date => {
  const newDate = new Date()
  newDate.setDate(date.getDate() - numberOfDays)
  return newDate
}

export const isISODateValid = (date: string) => !Number.isNaN(new Date(date).getDate())
