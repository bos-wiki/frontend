<script setup>
const config = useRuntimeConfig()
const props = defineProps({
  station: {
    type: Object,
    required: true
  }
})

const {data: vehicles, pending, error, refresh} = await useAsyncData('vehicles',
  () => $fetch(`${config.public.apiUrl}/stations/${props.station.id}/vehicles`)
);
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <template v-for="vehicle in vehicles.data">
      <div
        class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
        <div class="flex-shrink-0">
          <ProfileAvatar
            class="h-10 w-10 rounded-full"
            :name="vehicle.name"
          />
        </div>
        <div class="min-w-0 flex-1">
          <a href="#" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"></span>
            <p class="text-sm font-medium text-gray-900">{{ vehicle.name }}</p>
            <p class="truncate text-sm text-gray-500">{{ vehicle.constructionYear }}</p>
          </a>
        </div>
      </div>
    </template>
    <div v-if="!vehicles?.data?.length" class="w-full col-span-2 text-center py-56">
      <IconsTruck class="mx-auto h-12 w-12 text-red-500"/>
      <h3 class="mt-2 text-2xl font-semibold text-gray-900">In Bearbeitung</h3>
      <p class="mt-4 text-sm text-gray-500">Es sind aktuelle keine Fahrzeuge hinterlegt.<br>Demnächst wird es möglich sein neue Fahrzeuge einzutragen!</p>
    </div>
  </div>
</template>