import { Avatar, AvatarImage, AvatarFallback } from '@/ui/avatar'
import { getServerCurrentUser } from '@/services/user/get-server-current-user'
import { redirect } from 'next/navigation'
import { FunctionComponent } from 'react'
interface PageProps {}

const Page: FunctionComponent<PageProps> = async ({}) => {
  const user = await getServerCurrentUser()
  if (user === null) {
    await redirect('/')
  }
  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <section>
        <h2>
          {user?.displayName} is followed by {user?.followers?.length} people
        </h2>
        <div className="flex mt-2">
          {user?.followers?.map((user) => (
            <div
              className="flex flex-col items-center justify-center gap-1"
              key={user.id}
            >
              <Avatar className="w-16 h-16">
                <AvatarImage src={user.image} />
                <AvatarFallback>{user.displayName}</AvatarFallback>
              </Avatar>
              <h3>{user.displayName}</h3>
            </div>
          ))}
        </div>
        <h2>
          {user?.displayName} is following {user?.following?.length} people
        </h2>

        <div className="flex mt-2">
          {user?.following?.map((user) => (
            <div
              className="flex flex-col items-center justify-center gap-1"
              key={user.id}
            >
              <Avatar className="w-16 h-16">
                <AvatarImage src={user.image} />
                <AvatarFallback>{user.displayName}</AvatarFallback>
              </Avatar>
              <h3>{user.displayName}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Page
