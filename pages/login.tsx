import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import { useAppDispatch, useAppSelector } from '../store'
import { login, selectUser } from '../store/auth.slice'

const LoginPage: FC = () => {
  const router = useRouter()
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (user) router.push('/profile')
  }, [user])

  const handleSubmit = (email, password) => {
    dispatch(login({ email, password }))
  }

  return (
    <Layout>
      <LoginForm onSubmit={handleSubmit} />
    </Layout>
  )
}

export default LoginPage
