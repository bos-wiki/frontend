<script setup>
import {useStationStore} from "~/stores/useStationStore";
const route = useRoute()

const store = useStationStore()
store.fetchStations()

watch(() => route.query.page, () => {
  store.fetchStations()
})
</script>

<template>
  <ContentWrapper>
    <List v-if="store?.stations" :stations="store.stations"/>
    <template v-if="!store?.stations">
      <div class="text-center py-56">
        <IconsTruck class="mx-auto h-12 w-12 text-red-500"/>
        <h3 class="mt-2 text-2xl font-semibold text-gray-900">Kein Ergebnis</h3>
        <p class="mt-4 text-sm text-gray-500">Es sind aktuelle keine Wachen hinterlegt.<br>Demnächst wird es möglich sein neue Wachen einzutragen!</p>
      </div>
    </template>
    <Paginator class="my-12" :paginator="store.stationsPaginator" />
  </ContentWrapper>
</template>