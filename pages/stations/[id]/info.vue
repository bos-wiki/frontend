<script setup>
import {EditorContent, useEditor} from "@tiptap/vue-3";
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

const props = defineProps({
  station: {
    type: Object,
    required: true
  },
  nearby: {
    type: Array,
    required: true
  }
})

const getAddressString = (address) => {
  return address
    ? `${address?.street} ${address?.number}, ${address?.zip} ${address?.city}`
    : 'Noch keine Adresse hinterlegt!'
}

const editor = useEditor({
  extensions: [
    Document,
    Paragraph,
    Text,
  ],
  editable: false,
  content: props.station.description,
})

const getDomainAndExtension = (url) => {
  try {
    return new URL(url).hostname.split('.').slice(-2).join('.');
  } catch (error) {
    return null;
  }
}
</script>


<template>
  <div class="md:flex justify-between">
    <div class="md:w-2/3 grid grid-cols-1 md:grid-cols-2 grid-gap-8">
      <dl class="space-y-4">
        <dd>
          <p class="text-xs">Wachen Art</p>
          <p>{{ props.station.stationType.name || 'Unbekannt' }}</p>
        </dd>
        <dd>
          <p class="text-xs">Website</p>
          <p></p>
          <a v-if="getDomainAndExtension(props.station.website)" class="text-red-400 hover:text-red-700 cursor-pointer"
             :href="props.station.website" target="_blank" rel="nofollow">
            {{ getDomainAndExtension(props.station.website) }}
          </a>
          <p v-else>Unbekannt</p>
        </dd>
        <dd>
          <p class="text-xs">Telefon</p>
          <p>{{ props.station.phone || 'Unbekannt' }}</p>
        </dd>
      </dl>
      <dl class="space-y-4">
        <dd>
          <p class="text-xs">Leitstelle</p>
          <p>{{ props.station.controlCenter.name }}</p>
        </dd>
        <dd>
          <p class="text-xs">Erstellt</p>
          <p>{{ props.station.createdAt }}</p>
        </dd>
        <dd>
          <p class="text-xs">Author</p>
          <p>{{ props.station.author?.username }}</p>
        </dd>
        <dd v-if="props.station?.osmId">
          <p class="text-xs">OpenStreetMap</p>
          <a class="text-red-400 hover:text-red-700 cursor-pointer"
             :href="`https://openstreetmap.org/${props.station.osmId}`" target="_blank" rel="nofollow">
            {{ props.station?.osmId }}
          </a>
        </dd>
      </dl>
      <div class="col-span-1 md:cols-span-2">
        <h2>Beschreibung</h2>
        <editor-content :editor="editor"/>
      </div>
    </div>
    <aside class="md:w-1/3">
      <StationMap class="" :interactive="true" :lat="props.station.latitude" :lng="props.station.longitude"/>
      <h2 class="font-bold mt-2">Wachen in der Nähe</h2>
      <template v-for="nearbyStation in props.nearby">
        <ul class="text-sm flex flex-col space-x-4">
          <li class="list-disc ml-4">
            <NuxtLink
              :to="{name: 'stations-id', params: { id: nearbyStation?.id }}"
              class="block py-0.5 hover:text-red-400"
            >
              {{ nearbyStation?.name }}
              <span class="break-keep whitespace-nowrap">
                (~{{ (nearbyStation?.distanceInMeters / 1000).toFixed(1) }} km)
              </span>
            </NuxtLink>
          </li>
        </ul>
      </template>
    </aside>
  </div>
</template>