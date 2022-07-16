import { useDeferredValue, useMemo, useState } from 'react'
import Articles from '../components/Articles'
import Layout from '../components/Layout'
import SearchForm, { SearchFormProps } from '../components/SearchForm'

const IndexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const defferedSearchValue = useDeferredValue(searchValue)

  const [searchField, setSearchField] =
    useState<SearchFormProps['searchField']>('title')
  const defferedSearchField = useDeferredValue(searchField)

  const articles = useMemo(
    () => (
      <Articles
        searchValue={defferedSearchValue}
        searchField={defferedSearchField}
      />
    ),
    [defferedSearchValue, defferedSearchField]
  )

  return (
    <Layout>
      <SearchForm
        searchValue={searchValue}
        onChangeSearchValue={setSearchValue}
        searchField={searchField}
        onChangeSearchField={setSearchField}
      />
      {articles}
    </Layout>
  )
}

export default IndexPage
