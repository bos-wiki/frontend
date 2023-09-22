<template>
  <div class="flex min-h-full">
    <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-12 xl:px-18">
      <NuxtLink to="/" class="hover:text-red-500 hover:cursor-pointer mb-12">
        <header class="flex flex-col justify-center items-center space-y-4">
          <IconsBroadcast class="w-12 h-12" />
          <h1 class="text-4xl font-bold">bos.wiki</h1>
        </header>
      </NuxtLink>
      <NuxtPage class="mx-auto w-full max-w-sm lg:w-96"/>
      <Banner class="mx-auto w-full max-w-sm lg:w-96 mt-12">
        <IconsAlertFilled class="inline h-6 w-6 mr-2"/>
        <br>Ihr könnt euch zu Testzwecken registrieren, allerdings kann es sein das die Accounts ggf. gelöscht werden.
      </Banner>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <p class="absolute bottom-0 right-0 z-20 text-white/50 bg-white/10 px-4 py-2 text-xs group hover:bg-white/20">
        Photo by <a class="group-hover:underline group-hover:text-white" href="https://unsplash.com/@doso7?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dominik Sostmann</a> on <a class="group-hover:underline group-hover:text-white" href="https://unsplash.com/photos/NPlyVfeYp8I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
      <img class="absolute inset-0 h-full w-full object-cover" src="~/assets/images/dominik-sostmann-NPlyVfeYp8I-unsplash.jpg" alt="Two fully geared firefighters with a hose fighting a fire">
    </div>
  </div>
</template>
<script setup lang="ts">
</script>