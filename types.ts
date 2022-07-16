export enum articleState {
  DRAFT = 'DRAFT',
  PROPOSAL = 'PROPOSAL',
  PUBLISHED = 'PUBLISHED',
}

export type Article = {
  id: number
  title: string
  thumbnailText: string
  text: string
  author: null
  state: articleState
  createdAt: string
}

export type ArticlesQueryOptions = {
  search?: string
  articleId?: string
  authorId?: string
  state?: articleState
  skip?: string
  limit?: string
}
