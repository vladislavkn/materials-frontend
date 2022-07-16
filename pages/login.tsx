import { FC } from 'react'
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'

const LoginPage: FC = () => {
  return (
    <Layout>
      <LoginForm
        onSubmit={(email, password) => console.table({ email, password })}
      />
    </Layout>
  )
}

export default LoginPage
