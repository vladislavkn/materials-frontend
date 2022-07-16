import { FC } from 'react'
import { useGetArticlesQuery } from '../store/articles.api'
import Article from './Article'

type ArticlesProps = {
  searchValue: string
  searchField: string
}

const Articles: FC<ArticlesProps> = (props) => {
  const { searchValue, searchField } = props
  const { isLoading, data, error } = useGetArticlesQuery({
    [searchField]: searchValue,
  })

  if (isLoading) return <span>Loading...</span>
  if (error) return <span>{error.toString()}</span>

  return (
    <div className="grid gap-8 grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </div>
  )
}

export default Articles
