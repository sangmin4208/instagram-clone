'use client'

import { FunctionComponent } from 'react'
import { signIn } from 'next-auth/react'
import { Button } from './ui/button'

import { useCallbackUrlSearchParam } from '@/hooks/use-callback-url-search-param'
import { cn } from '@/lib/shadcn-ui/utils'
import Icons from './icons'

interface GitHubSignInButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const GitHubSignInButton: FunctionComponent<GitHubSignInButtonProps> = (
  props
) => {
  const callbackUrl = useCallbackUrlSearchParam()
  return (
    <Button
      {...props}
      onClick={() =>
        signIn('github', {
          callbackUrl,
        })
      }
      className={cn('flex gap-2', props.className)}
    >
      <Icons.Github />
      <span className="font-medium">Continue with GitHub</span>
    </Button>
  )
}

export default GitHubSignInButton
