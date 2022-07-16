import { MagnifyingGlass } from 'phosphor-react'
import React, { ChangeEvent, FC, SyntheticEvent } from 'react'

type SearchInputProps = {
  value: string
  onChange: (value: string) => void
}

const SearchInput: FC<SearchInputProps> = (props) => {
  const { value, onChange } = props

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <label className="flex items-center py-2 px-4 gap-4 border border-gray-400 rounded text-gray-800">
      <MagnifyingGlass size={32} />
      <input
        type="search"
        placeholder="Search"
        className="outline-none text-xl block w-full"
        value={value}
        onChange={handleChange}
      />
    </label>
  )
}

export default SearchInput
