import { FC, useState } from 'react'
import FormTemplate from './FormTemplate'
import Input from './Input'

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void
}

const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    onSubmit(email, password)
  }

  return (
    <FormTemplate
      title="Login"
      onSubmit={handleSubmit}
      linkText="To registration"
      linkHref="/register"
    >
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={setEmail}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={setPassword}
        minLength={8}
        maxLength={16}
        required
      />
    </FormTemplate>
  )
}

export default LoginForm
