import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import authApi from '../api/authApi'
import { LoginOptions, RegisterOptions, User } from '../types'

const initialState = {
  user: null as null | User,
}

export const login = createAsyncThunk(
  'login',
  async (options: LoginOptions, { dispatch }) => {
    try {
      const response = await authApi.login(options)
      dispatch(setUser(response.user))
    } catch (e) {
      alert(`Error: ${e.message}`)
      dispatch(setUser(null))
    }
  }
)

export const register = createAsyncThunk(
  'register',
  async (options: RegisterOptions, { dispatch }) => {
    try {
      const response = await authApi.register(options)
      dispatch(setUser(response.user))
    } catch (e) {
      alert(`Error: ${e.message}`)
      dispatch(setUser(null))
    }
  }
)

export const logout = createAsyncThunk('logout', async (_, { dispatch }) => {
  try {
    await authApi.logout()
    dispatch(setUser(null))
  } catch (e) {
    alert(`Error: ${e.message}`)
  }
})

export const getMe = createAsyncThunk('get-me', async (_, { dispatch }) => {
  const savedUserData = localStorage.getItem('user')
  if (savedUserData) dispatch(setUser(JSON.parse(savedUserData)))

  try {
    const response = await authApi.getMe()
    dispatch(setUser(response.user))
  } catch (e) {
    console.log(`Error: ${e.message}`)
    dispatch(setUser(null))
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(state.user))
    },
  },
})

const { setUser } = authSlice.actions
export const selectUser = (state: RootState) => state.auth.user

export default authSlice
