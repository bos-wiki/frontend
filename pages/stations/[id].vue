<script setup>
import {useStationStore} from "~/stores/useStationStore";
import useStatus from "~/composables/useStatus";

const store = useStationStore()
const route = useRoute()
const config = useRuntimeConfig()
const {StatusMap} = useStatus()

const station = await store.getStation(route.params.id)

const getAddressString = (address) => {
  return address
    ? `${address?.street} ${address?.number}, ${address?.zip} ${address?.city}`
    : 'Noch keine Adresse hinterlegt!'
}

onMounted(() => {
  if (route.name === 'stations-id') {
    navigateTo({name: 'stations-id-info', params: {id: station.data.id}})
  }
})
</script>

<template>
  <header>
    <Placeholder text="Titelbild bald verfügbar!" class="overflow-hidden w-full object-cover object-center max-h-64"/>
  </header>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <select
        id="tabs"
        name="tabs"
        class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option @click="navigateTo({ name: 'stations-id-info', params: { id: station.data.id }})">Info</option>
        <option @click="navigateTo({ name: 'stations-id-vehicles', params: { id: station.data.id }})">Fahrzeuge</option>
        <!--        <option>Bilder</option>-->
        <!--        <option>Diskussionen</option>-->
        <!--        <option>Mitglieder</option>-->
        <!--        <option>Verlauf</option>-->
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <ContentWrapper>
          <header class="mt-10 mb-6 flex justify-between items-center">
            <div>
              <h1 class="text-4xl font-bold tracking-wide">{{ station.data.name }}</h1>
              <span class="text-gray-400">{{ getAddressString(station.data.address) }}</span>
            </div>
            <p class="text-sm leading-6 text-gray-900">
              <span
                class="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset"
                :class="StatusMap[station?.data.status]?.color"
              >
                {{ StatusMap[station?.data.status]?.label }}
              </span>
            </p>
          </header>
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <NuxtLink
              :to="{name: 'stations-id-info',params: { id: station.data.id }}"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium"
              active-class="text-indigo-600 !border-indigo-500"
            >
              <IconsInformation class="w-6 h-6 mr-1"/>
              <span>Info</span>
            </NuxtLink>
            <NuxtLink
              :to="{name: 'stations-id-vehicles',params: { id: station.data.id }}"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium"
              active-class="text-indigo-600 !border-indigo-500"
            >
              <IconsTruck class="w-6 h-6 mr-1"/>
              <span>Fahrzeuge</span>
            </NuxtLink>
            <a href="#"
               class="opacity-25 line-through border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium">
              <IconsCamera class="w-6 h-6 mr-1"/>
              <span>Bilder</span>
            </a>
            <a href="#"
               class="opacity-25 line-through border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium">
              <IconsMessages class="w-6 h-6 mr-1"/>
              <span>Diskussionen</span>
            </a>
            <a href="#"
               class="opacity-25 line-through border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium">
              <IconsUsers class="w-6 h-6 mr-1"/>
              <span>Mitglieder</span>
            </a>
            <a href="#"
               class="opacity-25 line-through border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium">
              <IconsHistory class="w-6 h-6 mr-1"/>
              <span>Verlauf</span>
            </a>
          </nav>
        </ContentWrapper>
      </div>
    </div>
  </div>
  <ContentWrapper class="md:py-12 py-6">
    <header class="md:hidden mb-6">
      <h1 class="text-2xl font-bold tracking-wide">{{ station.data.name }}</h1>
      <span class="text-sm text-gray-400">{{ getAddressString(station.data.address) }}</span>
    </header>
    <NuxtPage :station="station.data" :nearby="station.nearbyStations" />
    <pre class="overflow-scroll" v-if="config.public.environment === 'development'">{{ station }}</pre>
  </ContentWrapper>
</template>