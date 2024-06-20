<template>
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Diese Website ist noch im Aufbau :) <a href="#" class="font-semibold text-red-600"><span class="absolute inset-0" aria-hidden="true"></span>Mehr erfahren <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Deine BOS-Community</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Die Anlaufstelle für aktuelle Informationen rund um das Thema Feuerwehr, Rettungsdienst, THW und mehr. Bleib informiert und werde Teil unserer engagierten Community.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink to="/stations?page=1" class="text-sm font-semibold leading-6 text-gray-900">Alle Wachen</NuxtLink>
          <a href="/discord" class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Zur Community <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </div>
</template>