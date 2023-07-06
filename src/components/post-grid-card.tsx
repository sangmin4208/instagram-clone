import { FunctionComponent, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import ModalPortal from './ui/modal-portal'
import PostDetail from './post-detail'
import { PostListItem } from '@/types/post'
import PostModal from './post-modal'
interface PostGridCardProps {
  post: PostListItem
  priority: boolean
}

const PostGridCard: FunctionComponent<PostGridCardProps> = ({
  post,
  priority,
}) => {
  const { author, coverImage } = post
  const [openModal, setOpenModal] = useState(false)
  const { status } = useSession()
  const handleOpenPost = () => {
    if (!(status === 'authenticated')) return signIn()
    setOpenModal(true)
  }
  return (
    <section className="relative w-full aspect-square">
      <Image
        className="object-cover"
        src={coverImage}
        alt={`post by ${author}`}
        priority={priority}
        sizes="650px"
        fill
        onClick={handleOpenPost}
      />
      {openModal && (
        <ModalPortal>
          <PostModal
            onClose={() => {
              setOpenModal((prev) => {
                return false
              })
            }}
          >
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </section>
  )
}

export default PostGridCard
