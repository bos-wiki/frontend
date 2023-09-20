<script setup>
import {useAuthStore} from '~/stores/useAuthStore';
import {useStationStore} from "~/stores/useStationStore";

const userStore = useAuthStore();
const stationStore = useStationStore();

const megaMenuOpen = ref(false);
const profileMenuOpen = ref(false);

const links = [
  {name: 'Start', path: '/', disabled: false},
  {name: 'Wachen', path: `/stations?page=1`, disabled: false},
  {name: 'Fahrzeuge', path: '/vehicles', disabled: true},
  {name: 'Community', path: '/community', disabled: true},
  {name: 'Blog', path: '/blog', disabled: true}
]
</script>

<template>
  <nav class="block md:flex justify-between md:space-x-12 p-8 border-b border-gray-200">
    <div><IconsBroadcast class="inline mr-2 -mt-1" />bos.wiki</div>
    <div class="md:space-x-4">
      <template v-for="link in links">
        <NuxtLink
          :class="{
            'cursor-not-allowed text-gray-400 line-through pointer-events-none': link.disabled,
            'text-black hover:text-white hover:bg-red-600': !link.disabled
          }"
          class="md:px-3 py-2 block md:inline"
          :to="link.path"
          :disabled="link.disabled"
        >
          {{ link.name }}
        </NuxtLink>
      </template>
    </div>
    <div>
      <NuxtLink v-if="!userStore.isLoggedIn" to="/login">Login</NuxtLink>
      <NuxtLink v-if="userStore.isLoggedIn" to="/profile">Profil</NuxtLink>
    </div>
  </nav>
</template>




