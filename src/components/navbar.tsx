'use client'
import { AppPath } from '@/config/app-path'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { usePathname } from 'next/navigation'

import Icons from '@/components/icons'
import AuthButton from './auth-button'
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

const NavBar: FunctionComponent<NavBarProps> = ({}) => {
  const pathname = usePathname()
  return (
    <section className="container mb-2 border-b">
      <nav className="z-10 flex items-center justify-between p-2 ">
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
          <AuthButton />
        </section>
      </nav>
    </section>
  )
}

export default NavBar
