<script setup lang="ts">
import useMap from "~/composables/useMap";

const props = defineProps<{
  interactive?: boolean
  lat?: number
  lng?: number
}>()

const { mapContainer, lat, lng } = useMap({
  interactive: props.interactive,
  attributionControl: false,
  lat: props.lat ?? 48.5797,
  lng: props.lng ?? 11.8000,
  zoom: 13.5,
  maxZoom: 18
});
</script>

<template>
  <div class="w-full relative h-[30vh]">
    <div class="map" ref="mapContainer"></div>
  </div>
</template>

<style scoped>
.map {
  @apply absolute w-full h-full rounded-md;
}
</style>