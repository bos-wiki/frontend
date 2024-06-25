<script setup>
import useStatus from "~/composables/useStatus";

const { StatusMap } = useStatus()

const props = defineProps({
  stations: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul role="list" class="divide-y divide-gray-100">
    <template v-for="station in props.stations" :key="station.id">
      <li class="relative flex justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <ProfileAvatar class="h-12 w-12 flex-none rounded-full bg-gray-50" :name="station.name" />
<!--          <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="`https://ui-avatars.com/api/?rounded=true&size=256&name=${ station.name }`" alt="">-->
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              <NuxtLink :to="{ name: 'stations-id-info', params: { id: station.id }}">
                <span class="absolute inset-x-0 -top-px bottom-0"></span>
                {{ station.name }}
              </NuxtLink>
            </p>
            <p class="mt-1 flex text-xs leading-5 text-gray-500">
              <span class="relative truncate hover:underline">{{ station?.address?.street }}</span>
            </p>
          </div>
        </div>
        <div class="flex shrink-0 items-center gap-x-4">
          <div class="hidden sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">
              <span
                class="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset"
                :class="StatusMap[station?.status]?.color"
              >
                {{ StatusMap[station?.status]?.label }}
              </span>
            </p>
            <p class="mt-1 text-xs leading-5 text-gray-500"><time :datetime="station.createdAt">{{  station.createdAt }}</time> erstellt</p>
          </div>
          <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </div>
      </li>
    </template>
  </ul>
</template>