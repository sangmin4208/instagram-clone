'use client'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'
import { FunctionComponent } from 'react'
import SignInPage from '../../sign-in/sign-in-page'
interface PageProps {
  searchParams?: {
    error?: string
  }
}
const Page: FunctionComponent<PageProps> = ({ searchParams }) => {
  const router = useRouter()
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
