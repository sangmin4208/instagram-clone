import 'easymde/dist/easymde.min.css'

import AuthProvider from '@/contexts/auth-provider'
import NavBar from '@/components/navbar'

export const metadata = {
  title: 'Instagram',
  description: 'Instagram clone',
}

export default function ClientLayout({
  children,
  authModal,
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <AuthProvider>
      <header className="sticky top-0 bg-primary-foreground">
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
