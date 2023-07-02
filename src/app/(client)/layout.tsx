import 'easymde/dist/easymde.min.css'

import AuthProvider from '@/contexts/auth-provider'
import NavBar from '@/components/navbar'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Instagram',
  description: 'Instagram clone',
}

export default function ClientLayout({
  children,
  authModal,
}: {
  children: ReactNode
  authModal: ReactNode
}) {
  return (
    <AuthProvider>
      <header className="sticky top-0 z-[9999999] bg-primary-foreground">
        <NavBar />
      </header>
      <section className="container">
        <main>
          {children}
          {authModal}
        </main>
      </section>
    </AuthProvider>
  )
}
