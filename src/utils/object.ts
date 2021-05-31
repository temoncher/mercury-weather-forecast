export const isObject = (obj: unknown): obj is Record<string | number | symbol, unknown> => Boolean(obj) && typeof obj === 'object'
