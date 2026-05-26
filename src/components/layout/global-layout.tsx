import { Link, Outlet } from 'react-router'
import logo from '@/assets/logo_dailypic.svg'
import ProfileButton from './header/profile-button'
import ThemeButton from './header/theme-button'
import GithubButton from './github-button'

export default function GlobalLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="h-15 border-b">
        <div className="m-auto flex h-full w-full max-w-175 justify-between px-4">
          <h1 className="font-raleway h-full text-xl font-bold">
            <Link to={'/'} className="flex h-full items-center gap-2">
              <img className="h-7" src={logo} alt="" />
              DailyPic
            </Link>
          </h1>
          <div className="flex items-center gap-5">
            <ThemeButton />
            <ProfileButton />
          </div>
        </div>
      </header>
      <main className="m-auto w-full max-w-175 flex-1 border-x px-4 py-6">
        <Outlet />
      </main>
      <footer className="text-muted-foreground border-t py-10 text-center">
        @Copyright © 2026 DailyPic
      </footer>
      <GithubButton />
    </div>
  )
}
