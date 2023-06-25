import { getServerCurrentUser } from '@/services/user/get-server-current-user'
export default async function Home() {
  const user = await getServerCurrentUser()

  return (
    <>
      <main>
        <h1>{`Hello ${user?.displayName}`}</h1>
        {user && (
          <>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </>
        )}
      </main>
    </>
  )
}
