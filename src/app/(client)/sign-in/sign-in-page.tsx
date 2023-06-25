import GitHubSignInButton from '@/components/github-sign-in-button'
import GoogleSignInButton from '@/components/google-sign-in-button'
import { FunctionComponent } from 'react'
interface SignInPageProps {
  error?: string
}

const SignInPage: FunctionComponent<SignInPageProps> = ({ error }) => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <h1 className="text-2xl">Instagram</h1>
      <p className="mt-2 text-sm text-center text-muted-foreground">
        Instagram clone By Sangmin
      </p>
      <div className="max-w-[300px] mt-8">
        <section className="flex flex-col gap-2">
          <GoogleSignInButton />
          <GitHubSignInButton />
        </section>
      </div>
      {error === 'OAuthAccountNotLinked' && (
        <>
          <p className="mt-4 text-sm text-center text-red-500">
            동일한 이메일 주소로 이미 가입되어있습니다. 다른 소셜 계정으로
            로그인해주세요.
          </p>
        </>
      )}
    </section>
  )
}

export default SignInPage
