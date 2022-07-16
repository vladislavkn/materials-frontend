import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config'
import { Article, ArticlesQueryOptions } from '../types'
import createQueryParams from '../utils/createQueryParams'

const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${config.BACKEND_URL}/articles` }),
  endpoints: (builder) => ({
    getArticles: builder.query<Article[], ArticlesQueryOptions>({
      query: (articlesQueryOptions) =>
        `?${createQueryParams(articlesQueryOptions)}`,
      transformResponse: (rawResult: { articles: Article[] }) =>
        rawResult.articles,
    }),
  }),
})

export default articlesApi

export const useGetArticlesQuery = articlesApi.endpoints.getArticles.useQuery
