import { FC } from 'react'
import SearchInput from './SearchInput'

export type SearchFormProps = {
  searchValue: string
  onChangeSearchValue: (value: string) => void
  searchField: 'title' | 'text'
  onChangeSearchField: (value: SearchFormProps['searchField']) => void
}

const SearchForm: FC<SearchFormProps> = (props) => {
  const { searchValue, onChangeSearchValue, searchField, onChangeSearchField } =
    props

  return (
    <form className="flex gap-4 mb-12 text-gray-800">
      <SearchInput value={searchValue} onChange={onChangeSearchValue} />
      <fieldset className="flex flex-col gap-1">
        <span className="text-sm">Search in:</span>
        <div className="flex items-center gap-2">
          <input
            className="hidden"
            type="radio"
            name="searchField"
            value="title"
            checked={searchField === 'title'}
            onChange={() => onChangeSearchField('title')}
            id="searchFieldTitle"
          />
          <label
            htmlFor="searchFieldTitle"
            className="block py-1 px-4 text-sm rounded border border-gray-100 bg-gray-100"
          >
            Title
          </label>

          <input
            className="hidden"
            type="radio"
            name="searchField"
            value="text"
            checked={searchField === 'text'}
            onChange={() => onChangeSearchField('text')}
            id="searchFieldText"
          />
          <label
            htmlFor="searchFieldText"
            className="block py-1 px-4 text-sm rounded border border-gray-100 bg-gray-100"
          >
            Text
          </label>
        </div>
      </fieldset>
    </form>
  )
}

export default SearchForm
