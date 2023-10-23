<script setup>
const props = defineProps({
  paginator: {
    type: Object,
    required: true
  },
})

const route = useRoute();

const buildQueryParams = (page) => {
  return {
    ...route.query,
    page: page
  };
}

const previousPageQuery = () => {
  const page = props.paginator?.current_page === 1 ? 1 : props.paginator?.current_page - 1;
  return buildQueryParams(page);
}

const nextPageQuery = () => {
  const page = props.paginator?.current_page + 1 > props.paginator?.last_page ? props.paginator?.current_page : props.paginator?.current_page + 1;
  return buildQueryParams(page);
}
</script>

<template>
  <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
    <div class="-mt-px flex w-0 flex-1">
      <NuxtLink :to="{query: previousPageQuery()}" class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
        <svg class="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clip-rule="evenodd" />
        </svg>
        Vorherige
      </NuxtLink>
    </div>
    <div class="hidden md:-mt-px md:flex">
      <template v-for="link in props.paginator?.links">
        <NuxtLink
          v-if="link.label !== '...' && !link.label.includes('Previous') && !link.label.includes('Next')"
          :to="{ query: buildQueryParams(link.label) }"
          :class="{
            'border-indigo-500 text-indigo-600': link.active,
            'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': !link.active
          }"
          class="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          {{ link.label }}
        </NuxtLink>
        <span
          v-if="link.label === '...'"
          class="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium text-gray-500 border-transparent pointer-events-none"
        >
          ...
        </span>
      </template>
    </div>
    <div class="-mt-px flex w-0 flex-1 justify-end">
      <NuxtLink :to="{query: nextPageQuery()}" class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
        Nächste
        <svg class="ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
        </svg>
      </NuxtLink>
    </div>
  </nav>
</template>