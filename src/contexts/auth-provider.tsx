'use client'
import { FunctionComponent } from 'react'
import { SessionProvider } from 'next-auth/react'

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
