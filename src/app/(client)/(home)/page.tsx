import FollowingBarSection from './components/following-bar-section'
import PostList from '@/components/post-list'
import SideBar from '@/components/side-bar'

import { getServerCurrentUser } from '@/services/user/get-server-current-user'
export default async function Home() {
  const user = await getServerCurrentUser()

  return (
    <>
      <main className="p-0 md:p-16">
        <section className="flex flex-col md:flex-row">
          <section className="grow">
            <div className="max-w-[600px]">
              {user && <FollowingBarSection />}
            </div>
            <PostList />
          </section>
          <section className="min-w[480px]">
            {user && <SideBar user={user} />}
          </section>
        </section>
      </main>
    </>
  )
}
