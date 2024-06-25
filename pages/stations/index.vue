<script setup>
import {useStationStore} from "~/stores/useStationStore";

const route = useRoute()

const store = useStationStore()
const searchQuery = ref(null)

store.fetchStations({
  page: route.query.page ?? 1,
  ...(route.query.name && { name: route.query.name })
})

onMounted(() => {
  searchQuery.value = route.query.name
})

const searchStations = () => {
  const query = {
    name: searchQuery.value,
    page: 1
  }

  navigateTo({
    name: 'stations',
    query
  });

  store.fetchStations(query)
}

watch(() => route.query, (newQuery) => {
  searchQuery.value = newQuery.name || '';
  store.fetchStations(newQuery);
}, { deep: true })
</script>

<template>
  <ContentWrapper full-width class="px-6">
    <div class="flex space-x-4 my-8">
      <input
          v-model="searchQuery"
          @keydown.enter="searchStations"
          class="w-4/5 border border-gray-300"
          placeholder="Wachen Name"
      />
      <button @click="searchStations" class="w-1/5 px-2 py-1 text-xs bg-red-500 hover:bg-red-600 text-white">Suchen
      </button>
    </div>

    <div class="md:flex md:flex-row-reverse gap-x-6">
      <StationOverviewMap class="w-full md:w-1/2 md:h-[calc(100vh-300px)]" :interactive="true" :markers="store.stations"/>
      <List v-if="store?.stations?.length" class="w-full md:w-1/2 md:h-[calc(100vh-300px)] overflow-y-scroll" :stations="store.stations"/>
      <template v-if="!store?.stations?.length && route.query.name">
        <div class="text-center py-56 w-1/2">
          <IconsTruck class="mx-auto h-12 w-12 text-red-500"/>
          <h3 class="mt-2 text-2xl font-semibold text-gray-900">Kein Ergebnis</h3>
          <p class="mt-4 text-sm text-gray-500">Es konnte keine Wache für <strong>"{{ route.query.name }}"</strong>
            gefunden
            werden.</p>
        </div>
      </template>
    </div>

    <Paginator class="my-12" :paginator="store.stationsPaginator"/>
  </ContentWrapper>
</template>