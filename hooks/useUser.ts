import { useRouter } from 'next/router'
import { useEffect } from 'react'
import store, { useAppDispatch, useAppSelector } from '../store'
import { getMe, selectUser } from '../store/auth.slice'

let userFetchState: 'started' | 'finished' | 'none' = 'none'

const useUser = (redirectPath?: string) => {
  const router = useRouter()
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const redirect = () => {
    if (redirectPath) {
      router.push(redirectPath)
    }
  }

  useEffect(() => {
    if (user) return
    if (userFetchState === 'finished') redirect()
    if (userFetchState === 'none') {
      userFetchState = 'started'
      dispatch(getMe()).then(() => {
        userFetchState = 'finished'
        if (!store.getState().auth.user) {
          redirect()
        }
      })
    }
  }, [user])

  return user
}

export default useUser
