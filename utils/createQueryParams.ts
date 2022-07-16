type CreateQueryParams = (params: Record<string, string | number>) => string

const createQueryParams: CreateQueryParams = (options) => {
  const urlSearchParams = new URLSearchParams()
  for (const key in options) {
    urlSearchParams.append(key, String(options[key]))
  }

  return urlSearchParams.toString()
}

export default createQueryParams
