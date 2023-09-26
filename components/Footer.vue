<template>
  <footer class="bg-white space-y-4 mb-12">
    <ContentWrapper class="md:flex md:items-center md:justify-between">
      <div class="flex justify-center space-x-6 md:order-2">
        <a href="/discord" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Discord</span>
          <IconsDiscord class="h-6 w-6"/>
        </a>
        <a href="https://github.com/boswiki" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">GitHub</span>
          <IconsGithub class="h-6 w-6"/>
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-gray-500">&copy; 2023 bos.wiki. Alle Rechte vorbehalten.</p>
      </div>
    </ContentWrapper>
        <ContentWrapper class="flex justify-between">
          <div class="flex flex-col space-y-1 mt-6 mb-12">
            <h2 class="font-medium text-xs text-gray-500">Services</h2>
            <NuxtLink to="/stations">Wachen</NuxtLink>
            <NuxtLink to="/vehicles">Fahrzeuge</NuxtLink>
<!--            <NuxtLink to="/">Einsätze</NuxtLink>-->
          </div>
          <div class="flex flex-col space-y-1 mt-6 mb-12">
            <h2 class="font-medium text-xs text-gray-500">Community</h2>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <a href="/discord">Discord</a>
<!--            <NuxtLink to="/">Forum</NuxtLink>-->
          </div>
    <!--      <div class="flex flex-col space-y-1 mt-6 mb-12">-->
    <!--        <h2 class="font-medium text-xs text-gray-500">Informationen</h2>-->
    <!--        <NuxtLink to="/">News</NuxtLink>-->
    <!--        <NuxtLink to="/">Über uns</NuxtLink>-->
    <!--        <NuxtLink to="/">Dokumentation</NuxtLink>-->
    <!--      </div>-->
    <!--      <div class="flex flex-col space-y-1 mt-6 mb-12">-->
    <!--        <h2 class="font-medium text-xs text-gray-500">Support</h2>-->
    <!--        <NuxtLink to="/">Hilfe</NuxtLink>-->
    <!--        <NuxtLink to="/">AGB</NuxtLink>-->
    <!--        <NuxtLink to="/">Datenschutz</NuxtLink>-->
    <!--      </div>-->
    <!--      <div class="flex flex-col space-y-1 mt-6 mb-12">-->
    <!--        <h2 class="font-medium text-xs text-gray-500">Entwickler</h2>-->
    <!--        <NuxtLink to="/">Mitwirken</NuxtLink>-->
    <!--        <NuxtLink to="/">API</NuxtLink>-->
    <!--      </div>-->
      <div class="flex flex-col space-y-1 mt-6 mb-12">
        <h2 class="font-medium text-xs text-gray-500">Links</h2>
        <a href="https://leitstelle.io">Leitstelle.io</a>
        <a href="https://leitstellenspiel.de">Leitstellenspiel.de</a>
      </div>
        </ContentWrapper>
  </footer>
</template>
