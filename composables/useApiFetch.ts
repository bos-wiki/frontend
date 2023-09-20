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
      // TODO: use env values instead!
      referer: config.public.referrer,
      'Accept': "application/json",
    }
  }

  console.log(config.public.tempAuthUrl ?? config.public.apiUrl,
    config.public.tempAuthUrl, config.public.apiUrl)

  return useFetch(`${config.public.tempAuthUrl ?? config.public.apiUrl}${path}`, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  });
};
