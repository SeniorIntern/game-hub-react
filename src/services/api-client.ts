import axios, { AxiosRequestConfig } from 'axios'

export type FetchResponse<T> = {
  count: number,
  next: string | null;
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'cc14e1ea217949ea8d1223748a5f6af4'
  }
})

class APIClient<T>{
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
  }
}

export default APIClient
