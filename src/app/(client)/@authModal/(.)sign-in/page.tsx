'use client'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { FunctionComponent } from 'react'
import SignInPage from '@/app/(client)/@authModal/(.)sign-in/page'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
interface PageProps {
  searchParams?: {
    error?: string
  }
}
const Page: FunctionComponent<PageProps> = ({ searchParams }) => {
  const router = useRouter()
  const session = useSession()
  if (session.data) {
    router.back()
  }
  return (
    <Dialog
      modal
      defaultOpen
      onOpenChange={(open) => {
        if (!open) router.back()
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <SignInPage />
      </DialogContent>
    </Dialog>
  )
}

export default Page
