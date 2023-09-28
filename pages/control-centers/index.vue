<script setup>
import {useControlCenterStore} from "~/stores/useControlCenterStore";

const store = useControlCenterStore()
store.fetchControlCenters()

const search = ref('');
const actualSearch = ref('');

let debounceTimeout;

const updateSearch = (event) => {
  const newSearchValue = event.target.value;

  // Update search immediately to reflect in the input
  search.value = newSearchValue;

  clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(() => {
    actualSearch.value = newSearchValue;
  }, 100);
};

const filteredControlCenters = computed(() => {
  const searchTerm = actualSearch.value.trim().toLowerCase();

  return store.controlCenters?.flatMap((controlCenter) => {
    const matchingControlCenters = controlCenter.controlCenters.filter(station => {
      const stationName = station?.name?.toLowerCase() || "";
      return stationName.includes(searchTerm);
    });

    if (matchingControlCenters.length) {
      return {...controlCenter, controlCenters: matchingControlCenters};
    } else {
      return [];
    }
  })
});
</script>

<template>
  <ContentWrapper>
    <div class="mt-12">
      <label for="search" class="block text-sm font-medium leading-6 text-gray-900">Suche</label>
      <div class="relative mt-2 flex items-center">
        <input
          :value="search"
          @input="updateSearch"
          class="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="search"
          id="search"
          autocomplete="off"
        >
        <!--<div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd class="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">⌘K</kbd>
        </div>-->
      </div>
    </div>

    <template v-for="stateDistrict in filteredControlCenters">
      <section class="my-12">
        <h1 class="text-3xl">{{ stateDistrict.name }}</h1>
        <template v-for="controlCenter in stateDistrict.controlCenters">
          <NuxtLink
            :id="controlCenter.id"
            class="my-2 block"
            :to="{
              name: 'control-centers-id',
              params: { id: controlCenter.id }
            }"
          >
            {{ controlCenter.name }}
          </NuxtLink>
        </template>
        <p v-if="!stateDistrict.controlCenters.length">Keine Leitstellen vorhanden!</p>
      </section>
    </template>
  </ContentWrapper>
</template>