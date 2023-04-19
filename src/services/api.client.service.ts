import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: import.meta.env.VITE_RAWG_API_KEY },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

class HttpService<T> {
  constructor(private endpoint: string) {}

  getMany = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}

export default HttpService;
