<script setup>
import {useAuthStore} from '~/stores/useAuthStore';
import {useStationStore} from "~/stores/useStationStore";

const userStore = useAuthStore();
const stationStore = useStationStore();

const megaMenuOpen = ref(false);
const navigationOpen = ref(false);

const links = [
  {name: 'Start', path: '/', disabled: false},
  {name: 'Wachen', path: `/stations?page=1`, disabled: false},
  {name: 'Community', path: `/discord`, disabled: false, external: true},
  // {name: 'Fahrzeuge', path: '/vehicles', disabled: true},
  // {name: 'Community', path: '/community', disabled: true},
  // {name: 'Blog', path: '/blog', disabled: true}
]
</script>

<template>
  <nav class="bg-white p-6 border-b border-gray-200">
    <div class="flex h-12 justify-between">
      <div class="md:w-1/4 flex items-center justify-start">
        <NuxtLink class="hover:text-red-500 hover:cursor-pointer">
          <IconsBroadcast class="inline mr-2 -mt-1"/>
          bos.wiki
        </NuxtLink>
      </div>
      <div class="hidden lg:flex justify-center">
        <template v-for="link in links">
          <NuxtLink
            v-if="!link?.external"
            active-class="bg-red-500 text-white"
            :class="{
              'cursor-not-allowed text-gray-300 line-through pointer-events-none': link.disabled,
              'hover:text-white hover:bg-red-500': !link.disabled
            }"
            class="flex items-center text-md font-light tracking-wider text-gray-900 md:px-4 lg:px-8 py-0"
            :to="link.path"
            :disabled="link.disabled"
          >
            {{ link.name }}
          </NuxtLink>
          <a
            v-if="link?.external"
            :class="{
              'cursor-not-allowed text-gray-300 line-through pointer-events-none': link.disabled,
              'hover:text-white hover:bg-red-500': !link.disabled
            }"
            class="flex items-center text-md font-light tracking-wider text-gray-900 md:px-4 lg:px-8 py-0"
            :href="link.path"
            :disabled="link.disabled"
          >
            {{ link.name }}
          </a>
        </template>
      </div>
      <div class="hidden lg:flex md:w-1/4 md:items-center md:justify-end">
        <NuxtLink
          active-class="bg-red-500 text-white"
          class="flex items-center text-md font-light tracking-wider text-gray-900 md:px-4 lg:px-8 h-full hover:text-white hover:bg-red-500"
          v-if="!userStore.isLoggedIn" to="/login"
        >
          Login
        </NuxtLink>
        <NuxtLink
          @click="navigationOpen = false"
          active-class="bg-red-500 text-white"
          class="flex items-center text-md font-light tracking-wider text-gray-900 md:px-4 lg:px-8 h-full hover:text-white hover:bg-red-500"
          v-if="!userStore.isLoggedIn"
          to="/register"
        >
          Registrieren
        </NuxtLink>
        <!--        <button type="button"-->
        <!--                class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">-->
        <!--          <span class="absolute -inset-1.5"></span>-->
        <!--          <span class="sr-only">View notifications</span>-->
        <!--          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"-->
        <!--               aria-hidden="true">-->
        <!--            <path stroke-linecap="round" stroke-linejoin="round"-->
        <!--                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>-->
        <!--          </svg>-->
        <!--        </button>-->

        <!-- Profile dropdown -->
        <div v-if="userStore.isLoggedIn" class="relative ml-3">
          <div>
            <button
              type="button"
              class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full"
                :src="`https://ui-avatars.com/api/?rounded=true&size=512&name=${ userStore.user.name }`"
                alt=""
              >
            </button>
          </div>

          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-200"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <div
            class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <NuxtLink to="/profile" class="block px-4 py-2 text-sm text-gray-700" role="menuitem">
              Dein Profil
            </NuxtLink>
            <a href="#" class="line-through pointer-events-none block px-4 py-2 text-sm text-gray-700" role="menuitem">
              Einstellugen
            </a>
            <button @click="userStore.logout()" class="block px-4 py-2 text-sm text-gray-700" role="menuitem">
              Abmelden
            </button>
          </div>
        </div>
      </div>
      <div class="-mr-2 flex items-center lg:hidden">
        <!-- Mobile menu button -->
        <button
          @click="navigationOpen = !navigationOpen"
          type="button"
          class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
          aria-controls="mobile-menu" aria-expanded="false"
        >
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
               aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
          </svg>
          <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
               aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" v-if="navigationOpen" id="mobile-menu">
      <div class="space-y-1 pb-3 pt-2">
        <template v-for="link in links">
          <NuxtLink
            v-if="!link.external"
            @click="navigationOpen = false"
            active-class="border-red-500 bg-red-50"
            :class="{
                'cursor-not-allowed text-gray-300 line-through pointer-events-none': link.disabled,
                'hover:text-white hover:bg-red-500': !link.disabled
              }"
            class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-thin text-red-700"
            :to="link.path"
            :disabled="link.disabled"
          >
            {{ link.name }}
          </NuxtLink>
          <a
            v-if="link.external"
            :class="{
                'cursor-not-allowed text-gray-300 line-through pointer-events-none': link.disabled,
                'hover:text-white hover:bg-red-500': !link.disabled
              }"
            class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-thin text-red-700"
            :href="link.path"
            :disabled="link.disabled"
          >
            {{ link.name }}
          </a>
        </template>
      </div>
      <div v-if="!userStore.isLoggedIn" class="border-t border-gray-200 pb-3 pt-4 space-y-1">
        <NuxtLink
          @click="navigationOpen = false"
          active-class="bg-red-500 text-white"
          class="hover:text-white hover:bg-red-500 block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-thin text-red-700"
          v-if="!userStore.isLoggedIn"
          to="/login"
        >
          Login
        </NuxtLink>
        <NuxtLink
          @click="navigationOpen = false"
          active-class="bg-red-500 text-white"
          class="hover:text-white hover:bg-red-500 block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-thin text-red-700"
          v-if="!userStore.isLoggedIn"
          to="/register"
        >
          Registrieren
        </NuxtLink>
      </div>

      <div v-if="userStore.isLoggedIn" class="border-t border-gray-200 pb-3 pt-4">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              :src="`https://ui-avatars.com/api/?rounded=true&size=512&name=${ userStore.user.first_name }+${ userStore.user.last_name}`"
              alt=""
            >
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">{{ userStore.user.first_name }} {{ userStore.user.last_name }}</div>
            <div class="text-sm font-medium text-gray-500">{{ userStore.user.email }}</div>
          </div>
<!--          <button-->
<!--            type="button"-->
<!--            class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"-->
<!--          >-->
<!--            <span class="absolute -inset-1.5"></span>-->
<!--            <span class="sr-only">View notifications</span>-->
<!--            <svg-->
<!--              class="h-6 w-6"-->
<!--              fill="none"-->
<!--              viewBox="0 0 24 24"-->
<!--              stroke-width="1.5"-->
<!--              stroke="currentColor"-->
<!--              aria-hidden="true"-->
<!--            >-->
<!--              <path-->
<!--                stroke-linecap="round"-->
<!--                stroke-linejoin="round"-->
<!--                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"-->
<!--              />-->
<!--            </svg>-->
<!--          </button>-->
        </div>
        <div class="mt-3 space-y-1">
          <NuxtLink
            @click="navigationOpen = false"
            to="/profile"
            class="block px-4 py-2 text-base font-thin text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          >
            Dein Profil
          </NuxtLink>
<!--          <a href="#"-->
<!--             class="line-through pointer-events-none block px-4 py-2 text-base font-thin text-gray-500 hover:bg-gray-100 hover:text-gray-800">-->
<!--            Einstellungen-->
<!--          </a>-->
          <button @click="userStore.logout()" class="block px-4 py-2 text-base font-thin text-gray-500 hover:bg-gray-100 hover:text-gray-800" role="menuitem">
            Abmelden
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>




