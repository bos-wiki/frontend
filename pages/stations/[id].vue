<script setup>
import {useStationStore} from "~/stores/useStationStore";
import Information from "~/assets/information.svg";

const store = useStationStore()
const route = useRoute()

const station = await store.getStation(route.params.id)

const getAddressString = (address) => {
  console.log(address)
  return address
    ? `${address?.street} ${address?.number}, ${address?.zip} ${address?.city}`
    : 'Noch keine Adresse hinterlegt!'
}
</script>

<template>
  <header>
    <img class="w-full object-cover object-center" src="https://placehold.co/1200x400/eee/ccc?text=Titelbild+bald+verf%C3%BCgbar" alt="">
  </header>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
        <option>My Account</option>
        <option>Company</option>
        <option selected>Team Members</option>
        <option>Billing</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <ContentWrapper>
          <header class="mt-10 mb-6">
            <h1 class="text-4xl font-bold tracking-wide">{{ station.data.name}}</h1>
            <span class="text-gray-400">{{ getAddressString(station.data.address) }}</span>
          </header>
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <a href="#" class="border-indigo-500 text-indigo-600 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium" aria-current="page">
              <!-- Current: "text-indigo-500", Default: "text-gray-400 group-hover:text-gray-500" -->
              <IconsInformation class="w-6 h-6 mr-1"/>
              <span>Info</span>
            </a>
            <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium">
              <IconsTruck class="w-6 h-6 mr-1"/>
              <span>Fahrzeuge</span>
            </a>
            <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium">
              <IconsCamera class="w-6 h-6 mr-1"/>
              <span>Bilder</span>
            </a>
            <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium">
              <IconsMessages class="w-6 h-6 mr-1"/>
              <span>Diskussionen</span>
            </a>
            <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium">
              <IconsUsers class="w-6 h-6 mr-1"/>
              <span>Mitglieder</span>
            </a>
            <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium">
              <IconsHistory class="w-6 h-6 mr-1"/>
              <span>Verlauf</span>
            </a>
          </nav>
        </ContentWrapper>
      </div>
    </div>
  </div>
  <ContentWrapper class="py-12">
    <pre>{{station}}</pre>
  </ContentWrapper>
</template>