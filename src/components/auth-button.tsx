'use client'

import { signOut, useSession } from 'next-auth/react'
import { FunctionComponent } from 'react'
import { Button } from './ui/button'
import { usePathname, useRouter } from 'next/navigation'

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
          router.push(`/sign-in?callbackUrl=${encodeURIComponent(pathname)}`)
        }
      }}
    >
      {displayLookUp[status]}
    </Button>
  )
}

export default AuthButton
