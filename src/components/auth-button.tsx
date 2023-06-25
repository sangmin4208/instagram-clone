'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { FunctionComponent } from 'react'
import { Button } from './ui/button'

interface AuthButtonProps {}

const displayLookUp = {
  authenticated: 'Sign Out',
  unauthenticated: 'Sign In',
  loading: 'Checking...',
}

const AuthButton: FunctionComponent<AuthButtonProps> = () => {
  const { status } = useSession()
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
        if (isSignedOut) signIn()
      }}
    >
      {displayLookUp[status]}
    </Button>
  )
}

export default AuthButton
