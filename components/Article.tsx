import Link from 'next/link'
import { FC, memo } from 'react'
import { Article } from '../types'
import getArticleThumbnailText from '../utils/getArticleThumnailText'
import getArticleTitle from '../utils/getArticleTitle'

type ArticleProps = {
  article: Article
}

const Article: FC<ArticleProps> = ({ article }) => (
  <article className="text-gray-800">
    <Link href={`/article/${article.id}`}>
      <h3 className="font-semibold text-2xl leading-none mb-3 cursor-pointer">
        {getArticleTitle(article)}
      </h3>
    </Link>
    <p className="text-sm leading-normal">{getArticleThumbnailText(article)}</p>
  </article>
)

export default memo(Article)
