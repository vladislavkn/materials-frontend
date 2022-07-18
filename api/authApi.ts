import config from '../config'
import { LoginOptions, RegisterOptions, User } from '../types'
import request from './request'

const authApi = new (class {
  private BASE_URL = `${config.BACKEND_URL}/auth`

  login(options: LoginOptions) {
    return request.post<{ user: User }>(this.BASE_URL + '/login', options)
  }
  register(options: RegisterOptions) {
    return request.post<{ user: User }>(this.BASE_URL + '/register', options)
  }
  getMe() {
    return request.get<{ user: User }>(this.BASE_URL + '/me')
  }
  logout() {
    return request.post(this.BASE_URL + '/logout')
  }
})()

export default authApi
