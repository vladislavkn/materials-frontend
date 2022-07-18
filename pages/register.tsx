import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import Layout from '../components/Layout'
import RegistrationForm from '../components/RegistrationForm'
import { useAppDispatch, useAppSelector } from '../store'
import { register, selectUser } from '../store/auth.slice'

const RegistrationPage: FC = () => {
  const router = useRouter()
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (user) router.push('/login')
  }, [user])

  const handleSubmit = (email, name, password) => {
    dispatch(register({ email, name, password }))
  }

  return (
    <Layout>
      <RegistrationForm onSubmit={handleSubmit} />
    </Layout>
  )
}

export default RegistrationPage
