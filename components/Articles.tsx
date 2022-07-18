import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { FC } from 'react'
import { useGetArticlesQuery } from '../store/articles.api'
import Article from './Article'
import ErrorFallback from './ErrorFallback'

type ArticlesProps = {
  searchValue: string
}

const Articles: FC<ArticlesProps> = ({ searchValue }) => {
  const { isLoading, data, error } = useGetArticlesQuery({
    search: searchValue,
  })

  if (isLoading) return <span>Loading...</span>
  if (error) return <ErrorFallback error={error} />

  return (
    <div className="grid gap-8 grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((article) => (
        <Article article={article} key={article.id} />
      ))}
      {data.length === 0 && 'No articles found'}
    </div>
  )
}

export default Articles
