<script setup>
const config = useRuntimeConfig()
const {data} = useFetch(config.public.apiUrl + '/control-centers')
</script>

<template>
  <ContentWrapper>
    <template v-for="stateDistrict in data">
      <section class="my-12">
        <h1 class="text-3xl">{{stateDistrict.name}}</h1>
        <template v-for="controlCenter in stateDistrict.control_centers">
          <p class="my-2">{{controlCenter.name}}</p>
        </template>
        <p v-if="!stateDistrict.control_centers.length">Keine Leitstellen vorhanden!</p>
      </section>
    </template>
  </ContentWrapper>
</template>