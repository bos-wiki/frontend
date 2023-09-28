<script setup>
import {useControlCenterStore} from "~/stores/useControlCenterStore";
const config = useRuntimeConfig()
const store = useControlCenterStore()
const route = useRoute()
const controlCenter = await store.getControlCenter(route.params.id)
</script>

<template>
  <ContentWrapper>
    <div class="lg:flex lg:items-center lg:justify-between mt-6">
      <div class="min-w-0 flex-1">
        <nav class="flex" aria-label="Breadcrumb">
          <ol role="list" class="flex items-center space-x-4">
            <li>
              <div class="flex">
                <NuxtLink :to="{name: 'control-centers'}" class="text-sm font-medium text-gray-500 hover:text-gray-700">Leitstellen</NuxtLink>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <IconsChevronRight class="h-5 w-5 flex-shrink-0 text-gray-400" />
                <span class="ml-4 text-sm font-medium text-gray-500">
                  {{ controlCenter.district.name }}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <header class="mt-6 mb-12">
          <h2 class="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {{ controlCenter.name }}
          </h2>
          <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div v-if="controlCenter.address" class="mt-2 flex items-center text-sm text-gray-500">
              <IconsMapPinFilled class="h-5 w-5 flex-shrink-0 text-gray-400" />
              {{ controlCenter?.address?.street }} {{ controlCenter?.address?.number }}, {{ controlCenter?.address?.city }}
            </div>
          </div>
        </header>
      </div>
    </div>
    <StationMap class="w-full h-[40vh] mb-12" :zoom="11.5" :interactive="true" :lat="controlCenter.latitude" :lng="controlCenter.longitude" />
    <h2 class="text-xl font-bold mb-4">Wachen in dieser Leitstelle</h2>
    <div v-if="controlCenter.stations" class="flex justify-between space-x-6 mb-32">
      <template v-for="station in controlCenter.stations">
        <NuxtLink :to="`/stations/${station.id}`" class="block p-4 border border-gray-300 rounded-lg w-full text-center hover:bg-red-500 hover:text-white text-gray-900">
          <h3 class="leading-6">{{ station.name }}</h3>
        </NuxtLink>
      </template>
      <p v-if="!controlCenter.stations">Keine Wachen verknüpft!</p>
    </div>
    <pre class="overflow-scroll" v-if="config.public.environment === 'development'">{{controlCenter}}</pre>
  </ContentWrapper>
</template>