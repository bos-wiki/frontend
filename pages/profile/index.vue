<script setup>
definePageMeta({
  middleware: ['auth']
})

import {useAuthStore} from "~/stores/useAuthStore";

const store = useAuthStore()
</script>

<template>
  <main class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
    <article>
      <!-- Profile header -->
      <div>
        <div>
          <Placeholder text="Titelbild bald verfügbar!" class="overflow-hidden max-h-48 w-full object-cover lg:h-48"/>
        </div>
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div class="flex">
              <ProfileAvatar class="bg-white h-24 w-24 rounded-full ring-2 ring-white sm:h-32 sm:w-32" :first-name="store.user.first_name" :last-name="store.user.last_name"/>
            </div>
            <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                <h1 class="truncate text-2xl font-bold text-gray-900">{{ store.user.first_name }} {{ store.user.last_name}} <span class="text-xs text-gray-400 font-normal">( @{{ store.user.username }} )</span></h1>

              </div>
              <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button type="button" class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <svg class="-ml-0.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                  Nachricht
                </button>
              </div>
            </div>
          </div>
          <div class="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
            <h1 class="truncate text-2xl font-bold text-gray-900">{{ store.user.first_name }} {{ store.user.last_name}} <span class="text-xs text-gray-400 font-normal">( @{{ store.user.username }} )</span></h1>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="mt-6 sm:mt-2 2xl:mt-5">
        <div class="border-b border-gray-200">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
              <!-- Current: "border-pink-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <a href="#" class="border-pink-500 text-gray-900 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" aria-current="page">
                <IconsUser class="inline -mt-1 h-5 w-5 mr-1"/> Profil
              </a>
              <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Wachen</a>
              <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Fahrzeuge</a>
            </nav>
          </div>
        </div>
      </div>



      <!-- Description list -->
      <div class="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Mitglied von</dt>
            <dd class="mt-1 text-sm text-gray-900">FF Irgendwo</dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Email</dt>
            <dd class="mt-1 text-sm text-gray-900">{{ store.user.email }}</dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Bundesland</dt>
            <dd class="mt-1 text-sm text-gray-900">Bayern</dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Geburtstag</dt>
            <dd class="mt-1 text-sm text-gray-900">01.01.1900</dd>
          </div>

          <div class="sm:col-span-2">
            <dt class="text-sm font-medium text-gray-500">Über</dt>
            <dd class="mt-1 max-w-prose space-y-5 text-sm text-gray-900">
              <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
              <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
            </dd>
          </div>
        </dl>
      </div>

      <dl class="mx-auto max-w-5xl  mt-8 grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
          <dt class="text-sm font-medium leading-6 text-gray-500">Wachen</dt>
          <dd class="text-xs font-medium text-gray-700">0.75%</dd>
          <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">320</dd>
        </div>
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
          <dt class="text-sm font-medium leading-6 text-gray-500">Fahrzeuge</dt>
          <dd class="text-xs font-medium text-rose-600">3.02%</dd>
          <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">102</dd>
        </div>
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
          <dt class="text-sm font-medium leading-6 text-gray-500">Forum</dt>
          <dd class="text-xs font-medium text-gray-700">1.39%</dd>
          <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">2234</dd>
        </div>
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
          <dt class="text-sm font-medium leading-6 text-gray-500">Mitglied seit</dt>
          <dd class="text-xs font-medium text-rose-600">+10.18%</dd>
          <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">01.01.1900</dd>
        </div>
      </dl>
    </article>
  </main>
</template>