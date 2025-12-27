<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
    <noscript>
      <div>
        <img src="https://mc.yandex.ru/watch/105951529" style="position:absolute; left:-9999px;" alt="" />
      </div>
    </noscript>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'ru'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<style>
@import '~/assets/css/main.css';
</style>

