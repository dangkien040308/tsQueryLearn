import axios, { AxiosError } from 'axios'
import { useSearchParams } from 'react-router-dom'

export const useQueryString = () => {
  const [searchParams] = useSearchParams()
  const searchParamsObject = Object.fromEntries([...searchParams])

  return searchParamsObject
} 

export function isAxiosError<T>(err: unknown): err is AxiosError<T> {
   return axios.isAxiosError(err)
}