<script setup>
const router = useRouter()
const search = ref(null)

function searchStations() {
  navigateTo({
    name: 'stations',
    query: { name: search.value }
  })
}
</script>

<template>
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
<!--      <div class="hidden sm:mb-8 sm:flex sm:justify-center">-->
<!--        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">-->
<!--          Diese Website ist noch im Aufbau :)-->
<!--          <a href="#" class="font-semibold text-red-600">-->
<!--            <span class="absolute inset-0" aria-hidden="true"></span>Mehr erfahren <span aria-hidden="true">&rarr;</span>-->
<!--          </a>-->
<!--        </div>-->
<!--      </div>-->
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Deine BOS-Community</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Die Anlaufstelle für aktuelle Informationen rund um das Thema Feuerwehr, Rettungsdienst, THW und mehr. Bleib informiert und werde Teil unserer engagierten Community.
        </p>
        <!--<div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink to="/stations?page=1" class="text-sm font-semibold leading-6 text-gray-900">Alle Wachen</NuxtLink>
          <a href="/discord" class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Zur Community <span aria-hidden="true">→</span></a>
        </div>-->

        <div class="max-w-md mx-auto mt-10">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
                v-model="search"
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm rounded-md focus:ring-red-500 focus:border-none border-none ring-1 ring-gray-300"
                placeholder="Feuerwehr ..."
                required
                @keydown.enter="searchStations()"
            />
            <button
                @click.prevent="searchStations()"
                type="button"
                class="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Suchen
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
