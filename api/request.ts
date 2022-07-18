type RequestOptions = {
  method: 'POST' | 'GET' | 'DELETE' | 'PATCH'
  url: string
  payload?: Record<string, string | number>
}

type ResponseError = { message?: string }

const request = new (class {
  private async send<T = any>(options: RequestOptions): Promise<T> {
    const requestInit: Partial<RequestInit> = {}
    if (options.payload) {
      if (options.method === 'GET') {
        options.url += `?${this.createParams(options.payload)}`
      } else {
        requestInit.body = JSON.stringify(options.payload)
        requestInit.headers = {
          'Content-Type': 'application/json',
        }
      }
    }

    const response = await fetch(options.url, {
      ...requestInit,
      method: options.method,
      credentials: 'include',
    })
    const data = await response.json()

    if (!response.ok) {
      let message = (data as ResponseError)?.message ?? response.statusText
      if (!window?.navigator?.onLine) {
        message = 'Device is offline'
      }
      throw new Error(message)
    }

    return data as T
  }

  private createParams(options: RequestOptions['payload']) {
    const urlSearchParams = new URLSearchParams()
    for (const key in options) {
      urlSearchParams.append(key, String(options[key]))
    }

    return urlSearchParams.toString()
  }

  get<T>(url: RequestOptions['url'], payload?: RequestOptions['payload']) {
    return this.send<T>({ method: 'GET', url, payload })
  }

  post<T>(url: RequestOptions['url'], payload?: RequestOptions['payload']) {
    return this.send<T>({ method: 'POST', url, payload })
  }

  patch<T>(url: RequestOptions['url'], payload?: RequestOptions['payload']) {
    return this.send<T>({ method: 'PATCH', url, payload })
  }

  delete<T>(url: RequestOptions['url'], payload?: RequestOptions['payload']) {
    return this.send<T>({ method: 'DELETE', url, payload })
  }
})()

export default request
