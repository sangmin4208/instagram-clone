'use client'
import { FunctionComponent, useState } from 'react'
import { ApiEndPoint } from '@/config/api-end-point'
import { Input } from '@/components/ui/input'
import UserSearchItem from '@/components/user-search-item'
import { UserSearchResult } from '@/types/user'
import { useDebounce } from '@/hooks/use-debounce'
import useSWR from 'swr'
interface UserSearchProps {}

const UserSearch: FunctionComponent<UserSearchProps> = () => {
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword = useDebounce(keyword)
  const { data, isLoading, error } = useSWR<UserSearchResult[]>(
    ApiEndPoint.fetchUsers(debouncedKeyword),
    (url) => fetch(url).then((res) => res.json())
  )
  if (error) return <div>{error.message}</div>
  return (
    <div className="max-w-2xl mx-auto">
      <Input
        className="my-5"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      {isLoading && <div>Loading...</div>}

      <ul className="flex flex-col gap-2 mt-2">
        {data?.map((user: any) => (
          <li key={user.id}>
            <UserSearchItem user={user} />
          </li>
        ))}
        {data?.length === 0 && <div>No user found</div>}
      </ul>
    </div>
  )
}

export default UserSearch
