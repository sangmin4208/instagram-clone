'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'
import { AppPath } from '@/config/app-path'
import AuthButton from './auth-button'
import { FunctionComponent } from 'react'
import Icons from '@/components/icons'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
interface NavBarProps {}

const menu = [
  {
    label: 'Home',
    href: AppPath.home,
    icon: <Icons.Home className="opacity-50" />,
    activeIcon: <Icons.Home />,
  },
  {
    label: 'Search',
    href: AppPath.search,
    icon: <Icons.Search className="opacity-50" />,
    activeIcon: <Icons.Search scale={1.2} />,
  },
  {
    label: 'Create Post',
    href: AppPath.createPost,
    icon: <Icons.PlusSquare className="opacity-50" />,
    activeIcon: <Icons.PlusSquare scale={1.2} />,
  },
]

const NavBar: FunctionComponent<NavBarProps> = () => {
  const pathname = usePathname()
  const { data: session } = useSession()
  return (
    <section className="container relative mb-2 border-b">
      <nav className="flex items-center justify-between p-2 ">
        <Link href={AppPath.home}>
          <h1 className="text-lg font-bold">Instagram</h1>
        </Link>
        <section className="flex items-center gap-4">
          <ul className="flex gap-2">
            {menu.map(({ href, icon, activeIcon, label }) => (
              <li key={href}>
                <Link href={href} aria-label={label}>
                  {pathname === href ? <>{activeIcon}</> : <>{icon}</>}
                </Link>
              </li>
            ))}
          </ul>
          {session?.user?.image && (
            <Link href={AppPath.profile}>
              <Avatar>
                <AvatarImage src={session.user.image} />
                <AvatarFallback>{session.user.displayName}</AvatarFallback>
              </Avatar>
            </Link>
          )}

          <AuthButton />
        </section>
      </nav>
    </section>
  )
}

export default NavBar
