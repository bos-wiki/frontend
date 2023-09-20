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
    <List :stations="store.stations"/>
    <Paginator class="my-12" :paginator="store.stationsPaginator" />
  </ContentWrapper>
</template>