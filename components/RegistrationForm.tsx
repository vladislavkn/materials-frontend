import { FC, useState } from 'react'
import FormTemplate from './FormTemplate'
import Input from './Input'

type RegistrationFormProps = {
  onSubmit: (email: string, name: string, password: string) => void
}

const RegistrationForm: FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const handleSubmit = () => {
    if (password !== passwordRepeat) {
      alert('Password fields are not equal')
    } else {
      onSubmit(email, name, password)
    }
  }

  return (
    <FormTemplate
      title="Create account"
      onSubmit={handleSubmit}
      linkText="To login"
      linkHref="/login"
    >
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={setEmail}
        required
      />
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={setName}
        minLength={2}
        maxLength={32}
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
      <Input
        type="password"
        placeholder="Password repeat"
        value={passwordRepeat}
        onChange={setPasswordRepeat}
        minLength={8}
        maxLength={16}
        required
      />
    </FormTemplate>
  )
}

export default RegistrationForm
