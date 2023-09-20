import {defineStore} from "pinia";
import {useApiFetch} from "~/composables/useApiFetch";
type Station = {
  id: string;
  name: string;
}
export const useStationStore = defineStore('station', () => {
  const stations = ref<Station[]|null>(null)
  const stationsPaginator = ref(null)
  const route = useRoute()
  const config = useRuntimeConfig()

  const fetchStations = async () => {
    const {data, error} = await useFetch(`${config.public.apiUrl}/api/stations?page=${stationsPaginator.current_page ??route.query.page}`, {
      watch: route.query.page
    })
    stations.value = data.value.data as Station[];
    stationsPaginator.value = data.value.meta;
  }

  const getStation = async (id: string) => {
    const {data, error} = await useFetch(`${config.public.apiUrl}/api/stations/${id}`);
    return data.value as Station;
  }

  return {
    stations,
    stationsPaginator,
    fetchStations,
    getStation,
  }
})