import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'
import { FC, FormEvent, PropsWithChildren } from 'react'

interface FormTemplateProps extends PropsWithChildren {
  onSubmit: (e: FormEvent) => void
  linkText: string
  linkHref: string
  title: string
}

const FormTemplate: FC<FormTemplateProps> = (props) => {
  const { children, onSubmit, linkText, linkHref, title } = props

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(e)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-gray-800 w-full mx-auto max-w-sm"
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <fieldset className="flex flex-col gap-6 w-full mb-8">
        {children}
      </fieldset>
      <fieldset className="flex justify-between items-center gap-6 w-full">
        <Link href={linkHref}>
          <a className="underline">{linkText}</a>
        </Link>
        <button
          type="submit"
          className="flex items-center py-2 px-4 border border-gray-800 rounded"
        >
          Continue
          <ArrowRight size={32} />
        </button>
      </fieldset>
    </form>
  )
}

export default FormTemplate
