export const classnames = (classesObj: Record<string, boolean>) => Object.entries(classesObj)
  .filter(([key, value]) => Boolean(value))
  .map(([key, value]) => key)
  .join(' ')
