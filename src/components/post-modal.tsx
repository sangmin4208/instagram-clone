import { FunctionComponent, ReactNode } from 'react'
import { Button } from './ui/button'
import Icons from './icons'
interface PostModalProps {
  children: ReactNode
  onClose: () => void
}

const PostModal: FunctionComponent<PostModalProps> = ({
  children,
  onClose,
}) => {
  return (
    <section
      className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-50"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <Button
        className="absolute top-0 right-0 m-4 text-white hover:text-black"
        onClick={onClose}
        variant={'ghost'}
      >
        <Icons.X />
      </Button>
      <main className="w-4/5 bg-white h-3/5 max-w-7xl">{children}</main>
    </section>
  )
}

export default PostModal
