import Link from 'next/link'
import { User, Pencil } from 'phosphor-react'

const Nav: React.FC = () => (
  <>
    <nav className="pt-6 pb-2 sticky top-0 bg-white">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <a className="text-gray-800 font-semibold">Materials</a>
        </Link>
        <div className="flex gap-4 text-gray-800">
          <Link href="create-article">
            <a className="cursor-pointer">
              <Pencil size={32} />
            </a>
          </Link>
          <Link href="create-article">
            <a className="cursor-pointer">
              <User size={32} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
    <div className="h-10"></div>
  </>
)

export default Nav
