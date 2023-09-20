<script setup>
</script>

<template>
  <div class="relative shadow isolate z-50 shadow">
    <!-- <div class="bg-white py-5">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <button type="button" class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          aria-expanded="false">
          Solutions
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div> -->

    <!--
    'Product' flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 -translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 -translate-y-1"
  -->
    <div class="absolute inset-x-0 top-0 -z-10 bg-white pt- shadow-lg ring-1 ring-gray-300">
      <div class="mx-auto flex max-w-7xl px-6 py-10 lg:px-8">
        <div class="w-full grid grid-cols-4 gap-x-6 sm:gap-x-8">
          <div>
            <h3 class="text-sm font-medium leading-6 text-gray-500">Wachen</h3>
            <div class="mt-6 flow-root">
              <div class="-my-2">
                <a href="#" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                  Feuerwehr
                </a>
                <a href="#" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                  Rettungsdienst
                </a>
                <a href="#" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                  Polizei
                </a>
                <a href="#" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                  THW
                </a>
                <a href="#" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                  Sonstige
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium leading-6 text-gray-500">Community</h3>
            <div class="mt-6 flow-root">
              <div class="-my-2">
                <a href="#" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                  Chat
                </a>
                <a href="#" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                  Forum
                </a>
                <a href="#" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                  Dokumentation
                </a>
                <a href="#" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                  Webinars
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium leading-6 text-gray-500">Entwickler</h3>
            <div class="mt-6 flow-root">
              <div class="-my-2">
                <a href="#" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                  Dokumentation
                </a>
                <a href="#" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                  Kosten
                </a>
                <a href="#" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                  API
                </a>
                <a href="#" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                  Status
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
          <h3 class="sr-only">Recent posts</h3>
          <article
            class="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch">
            <div class="relative flex-none">
              <img class="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                alt="">
              <div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div>
              <div class="flex items-center gap-x-4">
                <time datetime="2023-03-16" class="text-sm leading-6 text-gray-600">Mar 16, 2023</time>
                <a href="#"
                  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
              </div>
              <h4 class="mt-2 text-sm font-semibold leading-6 text-gray-900">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Boost your conversion rate
                </a>
              </h4>
              <p class="mt-2 text-sm leading-6 text-gray-600">Et et dolore officia quis nostrud esse aute
                cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.</p>
            </div>
          </article>
          <article
            class="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch">
            <div class="relative flex-none">
              <img class="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                alt="">
              <div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div>
              <div class="flex items-center gap-x-4">
                <time datetime="2023-03-10" class="text-sm leading-6 text-gray-600">Mar 10, 2023</time>
                <a href="#"
                  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100">Sales</a>
              </div>
              <h4 class="mt-2 text-sm font-semibold leading-6 text-gray-900">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  How to use search engine optimization to drive sales
                </a>
              </h4>
              <p class="mt-2 text-sm leading-6 text-gray-600">Optio cum necessitatibus dolor voluptatum
                provident commodi et.</p>
            </div>
          </article>
        </div> -->
      </div>
    </div>
  </div>
</template>