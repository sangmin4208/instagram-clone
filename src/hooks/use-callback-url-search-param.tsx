import { useSearchParams } from 'next/navigation'

export const useCallbackUrlSearchParam = () => {
  const searchParam = useSearchParams()
  return searchParam.get('callbackUrl') ?? '/'
}
