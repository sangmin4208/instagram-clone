'use client'
import { signOut, useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from './ui/button'
import { FunctionComponent } from 'react'

interface AuthButtonProps {}

const displayLookUp = {
  authenticated: 'Sign Out',
  unauthenticated: 'Sign In',
  loading: 'Checking...',
}

const AuthButton: FunctionComponent<AuthButtonProps> = () => {
  const { status } = useSession()
  const pathname = usePathname()
  const router = useRouter()

  const isSignedIn = status === 'authenticated'
  const isSignedOut = status === 'unauthenticated'
  const isLoading = status === 'loading'

  return (
    <Button
      disabled={isLoading}
      variant={'outline'}
      onClick={() => {
        if (isLoading) return
        if (isSignedIn) signOut()
        if (isSignedOut) {
          return router.push(
            `/sign-in?callbackUrl=${encodeURIComponent(pathname)}`
          )
        }
      }}
    >
      {displayLookUp[status]}
    </Button>
  )
}

export default AuthButton
