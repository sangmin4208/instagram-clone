'use client'
import { SessionProvider } from 'next-auth/react'
import { FunctionComponent } from 'react'

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
