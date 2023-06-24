'use client'

import { signIn } from 'next-auth/react'
import { FunctionComponent } from 'react'

interface SignInButtonProps {}

const SignInButton: FunctionComponent<SignInButtonProps> = () => {
  return <button onClick={() => signIn()}> Sign in to continue</button>
}

export default SignInButton
