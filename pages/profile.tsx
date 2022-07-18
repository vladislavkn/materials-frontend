import { FC } from 'react'
import Articles from '../components/Articles'
import Layout from '../components/Layout'
import useUser from '../hooks/useUser'
import { useAppDispatch } from '../store'
import { logout } from '../store/auth.slice'

const ProfilePage: FC = () => {
  const user = useUser('/login')
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  if (!user) return <Layout>Loading...</Layout>

  return (
    <Layout>
      <header className="flex items-center justify-between mb-14 text-gray-800">
        <div className="flex gap-2 flex-col">
          <h2 className="font-medium text-4xl">{user.name}</h2>
          <p className="text-gray-400">{user.role.toLowerCase()}</p>
        </div>
        <button onClick={handleLogout} className="underline">
          Logout
        </button>
      </header>
      <h3 className="uppercase mb-6 tracking-wide">Proposed materials</h3>
      <Articles options={{ authorId: String(user.id), state: 'ANY' }} />
    </Layout>
  )
}

export default ProfilePage
