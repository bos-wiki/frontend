import {ref, onMounted, markRaw, shallowRef, Ref, onUnmounted} from 'vue';
import {NavigationControl, Map, Marker, LngLatBounds, LngLatLike, Popup} from "maplibre-gl";

interface MapConfig {
  lat?: number;
  lng?: number;
  zoom?: number;
  interactive?: boolean;
  errors?: string[];
  showMarker?: boolean;
  markerColor?: string;
  markerDraggable?: boolean;
  attributionControl?: boolean;
  maxZoom?: number;
  fitToBounds?: boolean;
}

interface LatLng {
  lat: number;
  lng: number;
  title: string;
}

export default function useMap(
  {
    lat: initialLat = 0,
    lng: initialLng = 0,
    zoom = 12.5,
    interactive = false,
    showMarker = true,
    markerColor = "#FF0000",
    markerDraggable = false,
    attributionControl = true,
    maxZoom = 14.5,
    fitToBounds = false,
    pickLocation = false,
  }: MapConfig
) {
  const config = useRuntimeConfig();
  const lat: Ref<number> = ref(initialLat);
  const lng: Ref<number> = ref(initialLng);

  const mapContainer = shallowRef(null);
  const map = shallowRef(null);
  const marker = shallowRef(null);
  const additionalMarkers: Ref<Marker[]> = ref([]);

  onMounted(() => {
    map.value = markRaw(new Map({
      container: mapContainer.value,
      style: config.public.mapUrl,
      center: [lng.value, lat.value],
      zoom,
      interactive,
      attributionControl,
      maxZoom
    }));

    if (showMarker) {
      marker.value = markRaw(new Marker({color: markerColor, draggable: markerDraggable})
        .setLngLat([lng.value, lat.value])
        .addTo(map.value)
      );
    }

    if (interactive) {
      map.value.addControl(new NavigationControl({
        showCompass: false,
        showZoom: true,
        visualizePitch: true
      }));
    }

    if (pickLocation && showMarker) {
      map.value.on('click', (event) => {
        marker.value.setLngLat([event.lngLat.lng, event.lngLat.lat]);
        lat.value = event.lngLat.lat;
        lng.value = event.lngLat.lng;
      });

      marker.value.on('dragend', () => {
        const markerPosition = marker.value.getLngLat();
        lat.value = markerPosition.lat;
        lng.value = markerPosition.lng;
      });
    }
  });

  const addMarkersFromStations = (stations) => {
    return stations.map(station => ({
        title: station.name,
        lat: station?.location?.coordinates[1] ?? null,
        lng: station?.location?.coordinates[0] ?? null
      })
    )
  }

  const addMarkers = (coordinates: LatLng[]) => {
    const markers = addMarkersFromStations(coordinates)
    additionalMarkers.value.forEach(marker => marker.remove())
    additionalMarkers.value = []

    markers.forEach(coord => {
      const newMarker = new Marker({
        color: markerColor,
        draggable: markerDraggable
      })
        .setLngLat([coord.lng, coord.lat])
        .addTo(map.value);

      additionalMarkers.value.push(newMarker);

      newMarker.setPopup(
        new Popup({offset: 30}).setHTML(`<p>${coord.title}</p>`)
      )
    });

    if (fitToBounds && additionalMarkers.value.length > 0 && map.value) {
      setTimeout(() => {
        const bounds = new LngLatBounds();

        additionalMarkers.value.forEach(marker => {
          bounds.extend(marker.getLngLat() as LngLatLike);
        });

        map.value.fitBounds(bounds, {padding: 50})
      }, 200)
    }
  }

  onUnmounted(() => {
    map.value?.remove();
  })

  return {
    mapContainer,
    lat,
    lng,
    addMarkers
  }
}