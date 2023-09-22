import type { UseFetchOptions} from 'nuxt/app';
import {useRequestHeaders} from "nuxt/app";

export const useApiFetch = <T>(path: string, options: UseFetchOptions<T> = {}) => {
  const config = useRuntimeConfig();
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
      referer: config.public.referrer,
      origin: config.public.referrer,
      'Accept': "application/json",
    }
  }

  const requestConfig = {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  };

  return useFetch(`${config.public.apiUrl}${path}`, requestConfig);
};
