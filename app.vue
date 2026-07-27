<template>
  <div class="video-wrap" @click="toggleMute">
    <h1 class="visually-hidden">LashNK — Рязань</h1>
    <video
      ref="videoRef"
      class="video-bg"
      src="/video/video.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      aria-label="LashNK"
      disablepictureinpicture
      disableremoteplayback
    ></video>
    <button
      v-if="isMuted"
      type="button"
      class="sound-toggle"
      aria-label="Включить звук"
      @click.stop="toggleMute"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M11 5 6 9H2v6h4l5 4z"/>
        <line x1="22" y1="9" x2="16" y2="15"/>
        <line x1="16" y1="9" x2="22" y2="15"/>
      </svg>
      <span>Включить звук</span>
    </button>
    <noscript>
      <div>
        <img src="https://mc.yandex.ru/watch/105951529" style="position:absolute; left:-9999px;" alt="" />
      </div>
    </noscript>
  </div>
</template>

<script setup lang="ts">
const siteUrl = 'https://lashnk.ru/'

const videoRef = ref<HTMLVideoElement | null>(null)
const isMuted = ref(true)

function toggleMute() {
  const video = videoRef.value
  if (!video) return
  video.muted = !video.muted
  isMuted.value = video.muted
  if (!video.muted) {
    video.play().catch(() => {})
  }
}

useSeoMeta({
  title: 'LashNK — официальный сайт',
  description: 'LashNK — официальный сайт студии в Рязани. Онлайн-запись, контакты, актуальная информация о LashNK.',
  keywords: 'lashnk, LashNK, лашнк, лэшнк, lashnk рязань, lashnk официальный сайт, lashnk студия',
  ogTitle: 'LashNK — официальный сайт',
  ogDescription: 'LashNK — официальный сайт студии в Рязани. Онлайн-запись и актуальная информация.',
  ogUrl: siteUrl,
  ogType: 'website',
  ogSiteName: 'LashNK',
  ogLocale: 'ru_RU',
  twitterCard: 'summary_large_image',
  twitterTitle: 'LashNK — официальный сайт',
  twitterDescription: 'LashNK — официальный сайт студии в Рязани.',
  robots: 'index, follow',
  applicationName: 'LashNK',
  author: 'LashNK'
})

useHead({
  htmlAttrs: {
    lang: 'ru'
  },
  bodyAttrs: {
    style: 'margin:0;padding:0;background:#000;overflow:hidden;'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: siteUrl }
  ],
  meta: [
    { name: 'yandex-verification', content: '' },
    { name: 'geo.region', content: 'RU-RYA' },
    { name: 'geo.placename', content: 'Рязань' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'LashNK',
        alternateName: ['лашнк', 'лэшнк', 'LashNK Рязань'],
        url: siteUrl,
        logo: `${siteUrl}favicon.ico`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Рязань',
          addressCountry: 'RU'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'LashNK',
        alternateName: 'lashnk',
        url: siteUrl
      })
    }
  ]
})
</script>

<style>
html, body, #__nuxt {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: #000;
  overflow: hidden;
}

.video-wrap {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background: #000;
  overflow: hidden;
}

.video-wrap {
  cursor: pointer;
}

.video-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  object-position: center;
  background: #000;
  pointer-events: none;
}

.sound-toggle {
  position: fixed;
  right: max(16px, env(safe-area-inset-right));
  bottom: max(16px, env(safe-area-inset-bottom));
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: background 0.2s ease, transform 0.2s ease;
  z-index: 2;
}

.sound-toggle:hover,
.sound-toggle:focus-visible {
  background: rgba(0, 0, 0, 0.75);
  outline: none;
}

.sound-toggle:active {
  transform: scale(0.97);
}

@media (max-width: 480px) {
  .sound-toggle span {
    display: none;
  }
  .sound-toggle {
    padding: 12px;
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
