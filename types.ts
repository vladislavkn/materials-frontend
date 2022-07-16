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
  title?: string
  authorId?: string
  text?: string
  state?: articleState
  skip?: string
  limit?: string
}
