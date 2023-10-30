<script setup lang="ts">
import useMap from "~/composables/useMap";

const props = defineProps<{
  interactive?: boolean
  lat?: number
  lng?: number,
  zoom?: number,
  pickLocation?: boolean,
  districts: []
}>()

const {addMarkers, mapContainer} = useMap({
  interactive: props.interactive,
  attributionControl: false,
  zoom: 5,
  maxZoom: 12,
  pickLocation: props.pickLocation,
  showMarker: false,
  lat: 51.00000000,
  lng: 9.00000000
});

onMounted(() => {
  props.districts.forEach(district => {
    if (district?.controlCenters) {
      addMarkers(district.controlCenters.map(controlCenter => ({
          lat: controlCenter?.location?.coordinates[1],
          lng: controlCenter?.location?.coordinates[0],
          title: controlCenter.name,
        }))
      )
    }
  })
})
</script>

<template>
  <div class="relative h-[45vh]">
    <div class="map" ref="mapContainer"></div>
  </div>
</template>

<style scoped>
.map {
  @apply absolute w-full h-full rounded-md;
}
</style>