import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import Layout from '../components/Layout'

const ProfilePage: FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/login')
  }, [])

  return <Layout />
}

export default ProfilePage
