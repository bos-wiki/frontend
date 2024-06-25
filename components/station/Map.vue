<script setup lang="ts">
import useMap from "~/composables/useMap";

const props = defineProps<{
  interactive?: boolean
  lat?: number
  lng?: number,
  zoom?: number,
  pickLocation?: boolean,
  markers?: any
}>()

const { addMarkers, mapContainer, lat, lng } = useMap({
  interactive: props.interactive,
  attributionControl: false,
  lat: 51.163361,
  lng: 10.447683,
  zoom: props.zoom ?? 13.5,
  maxZoom: 18,
  pickLocation: props.pickLocation,
  fitToBounds: true,
  showMarker: false
});


onMounted(() => {
  if (props.markers && process.client) {
    addMarkers(props.markers)
  }
})

watch(
    () => props.markers,
    ()=>{
      if (props.markers && process.client) {
        addMarkers(props.markers)
      }
    }
)
</script>

<template>
  <div class="relative h-[30vh]">
    <div class="map" ref="mapContainer"></div>
  </div>
</template>

<style scoped>
.map {
  @apply absolute w-full h-full rounded-md;
}
</style>