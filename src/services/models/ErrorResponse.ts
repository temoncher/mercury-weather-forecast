export interface ErrorResponse {
  cod: string;
  message: string;
}

export const isErrorResponse = (obj: any): obj is ErrorResponse => {
  return obj.cod && typeof obj.cod === 'string'
}
