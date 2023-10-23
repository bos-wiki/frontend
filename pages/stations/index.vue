<script setup>
import {useStationStore} from "~/stores/useStationStore";
const route = useRoute()

const searchQuery = ref('')

const store = useStationStore()
store.fetchStations()

watch(() => route.query, (newQuery) => {
  searchQuery.value = newQuery.name || '';
  store.fetchStations(newQuery);
}, { deep: true })

const searchStations = () => {
  const params = {
    name: searchQuery.value,
    page: 1
  };
  navigateTo({ path: route.path, query: params });
}
</script>

<template>
  <ContentWrapper>
    <div class="flex space-x-4 my-8">
      <input v-model="searchQuery" class="w-4/5 border border-gray-300" placeholder="Wachen Name" />
      <button @click="searchStations" class="w-1/5 px-2 py-1 text-xs bg-red-500 hover:bg-red-600 text-white" >Suchen</button>
    </div>
    <List v-if="store?.stations" :stations="store.stations"/>
    <template v-if="!store?.stations || !store?.stations.length">
      <div class="text-center py-56">
        <IconsTruck class="mx-auto h-12 w-12 text-red-500"/>
        <h3 class="mt-2 text-2xl font-semibold text-gray-900">Kein Ergebnis</h3>
        <p class="mt-4 text-sm text-gray-500">Es sind aktuelle keine Wachen hinterlegt.<br>Demnächst wird es möglich sein neue Wachen einzutragen!</p>
      </div>
    </template>
    <Paginator class="my-12" :paginator="store.stationsPaginator" />
  </ContentWrapper>
</template>