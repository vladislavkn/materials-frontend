import { useDeferredValue, useMemo, useState } from 'react'
import Articles from '../components/Articles'
import Layout from '../components/Layout'
import SearchInput from '../components/SearchInput'

const IndexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const defferedSearchValue = useDeferredValue(searchValue)

  const articles = useMemo(
    () => <Articles options={{ search: defferedSearchValue }} />,
    [defferedSearchValue]
  )

  return (
    <Layout>
      <div className="flex mb-12">
        <SearchInput value={searchValue} onChange={setSearchValue} />
      </div>
      {articles}
    </Layout>
  )
}

export default IndexPage
