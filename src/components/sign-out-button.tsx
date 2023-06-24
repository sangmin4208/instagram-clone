'use client'
import { signOut } from 'next-auth/react'
import { FunctionComponent } from 'react'
interface SignOutButtonProps {}

const SignOutButton: FunctionComponent<SignOutButtonProps> = ({}) => {
  return <button onClick={() => signOut()}>Sign Out</button>
}

export default SignOutButton
