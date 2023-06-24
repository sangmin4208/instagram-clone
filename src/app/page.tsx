import SignInButton from '@/components/sign-in-button'
import SignOutButton from '@/components/sign-out-button'
import { getServerCurrentUser } from '@/services/user/get-server-current-user'
export default async function Home() {
  const user = await getServerCurrentUser()

  return (
    <>
      <main>
        <h1>{`Hello ${user?.displayName}`}</h1>
        {user ? (
          <>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <SignOutButton />
          </>
        ) : (
          <>
            <SignInButton />
          </>
        )}
      </main>
    </>
  )
}
