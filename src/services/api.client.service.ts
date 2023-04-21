import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: import.meta.env.VITE_RAWG_API_KEY },
});

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

class HttpService<T> {
  constructor(private endpoint: string) {}

  getMany = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);

  getOne = (id: string | number) =>
    axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((response) => response.data);
}

export default HttpService;
