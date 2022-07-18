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

export enum userRole {
  READER = 'READER',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN',
}

export type User = {
  id: number
  name: string
  email: string
  role: userRole
}

export type LoginOptions = {
  email: string
  password: string
}

export type RegisterOptions = LoginOptions & {
  name: string
}
