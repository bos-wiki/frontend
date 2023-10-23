import {defineStore} from "pinia";

type Station = {
  id: string;
  name: string;
}
export const useStationStore = defineStore('station', () => {
  const stations = ref<Station[] | null>(null);
  const stationsPaginator = ref(null);
  const route = useRoute();
  const config = useRuntimeConfig();

  const fetchStations = async (params = {}) => {
    const queryParams = {
      page: route.query.page || 1,
      name: route.query.name || '',
      ...params
    };

    const {data, error} = await useFetch(
      `${config.public.apiUrl}/stations?${new URLSearchParams(queryParams).toString()}`
    );

    stations.value = data?.value?.data as Station[];
    stationsPaginator.value = data?.value?.meta;
  }

  const getStation = async (id: string) => {
    const {data, error} = await useFetch(`${config.public.apiUrl}/stations/${id}`);
    return data.value as Station;
  }

  return {
    stations,
    stationsPaginator,
    fetchStations,
    getStation,
  }
})