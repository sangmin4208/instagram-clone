import CreatePostForm from './components/create-post-form'
import { FunctionComponent } from 'react'

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <section className="mx-auto w-[780px] flex flex-col gap-4 mt-12">
      <h1 className="mb-2 text-5xl uppercase">New Post</h1>
      <CreatePostForm />
    </section>
  )
}

export default Page
