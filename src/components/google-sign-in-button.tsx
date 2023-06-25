'use client'

import { FunctionComponent } from 'react'
import { signIn } from 'next-auth/react'
import { Button } from './ui/button'
import { useCallbackUrlSearchParam } from '@/hooks/use-callback-url-search-param'
import Icons from './icons'
import { cn } from '@/lib/shadcn-ui/utils'

interface GoogleInButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const GoogleSignInButton: FunctionComponent<GoogleInButtonProps> = (props) => {
  const callbackUrl = useCallbackUrlSearchParam()
  return (
    <Button
      {...props}
      variant={'outline'}
      onClick={() =>
        signIn('google', {
          callbackUrl,
        })
      }
      className={cn('flex gap-2', props.className)}
    >
      <Icons.Google size={24} />
      <span className="font-medium">Continue with Google</span>
    </Button>
  )
}

export default GoogleSignInButton
