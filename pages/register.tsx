import { FC } from 'react'
import Layout from '../components/Layout'
import RegistrationForm from '../components/RegistrationForm'

const RegistrationPage: FC = () => {
  return (
    <Layout>
      <RegistrationForm
        onSubmit={(email, name, password) =>
          console.table({ email, name, password })
        }
      />
    </Layout>
  )
}

export default RegistrationPage
