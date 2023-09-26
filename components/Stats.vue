<script setup lang="ts">
const config = useRuntimeConfig();
const {data: statistics } = await useFetch(`${config.public.apiUrl}/statistics`);
</script>

<template>
  <dl class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
    <template v-for="statistic in statistics">
      <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
        <dt class="text-sm font-medium leading-6 text-gray-500">{{ statistic.name }}</dt>
        <!--<dd class="text-xs font-medium text-gray-700">+4.75%</dd>-->
        <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
          {{ statistic.value }}
        </dd>
      </div>
    </template>
  </dl>
</template>