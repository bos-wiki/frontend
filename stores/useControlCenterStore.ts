import {defineStore} from "pinia";

type DistrictWithControlCenters = {
  id: string;
  name: string;
  control_centers: ControlCenter[];
}

type ControlCenter = {
  id: string;
  name: string;
  district_id: string;
}

export const useControlCenterStore = defineStore('controlCenter', () => {
  const controlCenters = ref<DistrictWithControlCenters[] | null>(null);
  const route = useRoute();
  const config = useRuntimeConfig();

  const fetchControlCenters = async () => {
    const {data, error} = await useFetch(`${config.public.apiUrl}/control-centers`);
    controlCenters.value = data?.value?.data as DistrictWithControlCenters[];
  }

  const getControlCenter = async (id: string) => {
    const {data, error} = await useFetch(`${config.public.apiUrl}/control-centers/${id}`);
    return data.value.data as ControlCenter;
  }

  return {
    controlCenters,
    fetchControlCenters,
    getControlCenter,
  }
})