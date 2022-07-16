import { Article } from '../types'

type GetArticleTitle = (article: Article) => string

const getArticleTitle: GetArticleTitle = (article) => {
  if (article.title.length <= 64) return article.title

  return article.title.substring(0, 64) + '...'
}

export default getArticleTitle
