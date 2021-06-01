import { isObject } from '../../utils/object'

export interface ErrorResponse {
  cod: string | number;
  message: string;
}

export const isErrorResponse = (obj: unknown): obj is ErrorResponse => {
  return isObject(obj) && Boolean(obj.cod) && typeof obj.message === 'string'
}
