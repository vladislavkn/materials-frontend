import { FC } from 'react'

type ErrorFallbackProps = {
  error: any
  defaultMessage?: string
}

const ErrorFallback: FC<ErrorFallbackProps> = (props) => {
  const { error, defaultMessage = 'Sonwthing went wrong' } = props

  return (
    <div className="border border-red-600 py-2 px-4 rounded text-red-600">
      {error?.error ?? error?.message ?? defaultMessage}
    </div>
  )
}

export default ErrorFallback
