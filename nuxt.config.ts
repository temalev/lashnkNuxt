// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // SSG (Static Site Generation) конфигурация
  // SSR должен быть true для SSG (SSG = предрендеренный SSR)
  ssr: true,
  
  // Настройка для статической генерации (SSG)
  nitro: {
    prerender: {
      // Автоматически находить все ссылки на страницах и пререндерить их
      crawlLinks: true,
      // Явно указать маршруты для пререндеринга (опционально)
      routes: [
        '/',
        '/brows-lamination/'
      ]
    },
    // Минификация для продакшена
    minify: true
  },
  
  // Настройка роутинга
  app: {
    baseURL: '/lashnkNuxt/'
  }
})
