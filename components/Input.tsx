import { ChangeEvent, FC, InputHTMLAttributes } from 'react'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string
  onChange: (value: string) => void
}

const Input: FC<InputProps> = (props) => {
  const { value, onChange, ...inputProps } = props

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <input
      className="py-2 px-4 border border-gray-400 rounded"
      {...inputProps}
      value={value}
      onChange={handleChange}
    />
  )
}

export default Input
