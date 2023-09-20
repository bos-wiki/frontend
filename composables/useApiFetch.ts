import type { UseFetchOptions} from 'nuxt/app';
import {useRequestHeaders} from "nuxt/app";

export const useApiFetch = <T>(path: string, options: UseFetchOptions<T> = {}) => {
  const token = useCookie('XSRF-TOKEN');
  let headers: any = {
    'Accept': 'application/json',
  };

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string;
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
      // TODO: use env values instead!
      referer: "http://localhost:3000",
      'Accept': "application/json",
    }
  }

  return useFetch('http://localhost:8000' + path, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  });
};
