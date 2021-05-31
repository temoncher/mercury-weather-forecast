import { isObject } from '../../utils/object'

export interface ErrorResponse {
  cod: string;
  message: string;
}

export const isErrorResponse = (obj: unknown): obj is ErrorResponse => {
  return isObject(obj) && typeof obj.cod === 'string' && typeof obj.message === 'string'
}
