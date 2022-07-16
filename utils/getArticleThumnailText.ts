import { Article } from '../types'

type GetArticleThumbnailText = (article: Article) => string

const getArticleThumbnailText: GetArticleThumbnailText = (article) => {
  if (article.thumbnailText) return article.thumbnailText

  if (article.text.length <= 64) return article.text

  return article.text.substring(0, 64) + '...'
}

export default getArticleThumbnailText
