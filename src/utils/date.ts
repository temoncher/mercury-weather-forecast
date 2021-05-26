export const formatDayMonthYear = (date: Date) => {
  const day = date.getDate()
  const month = date.toLocaleString('en', { month: 'long' })
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}
