export default defineNuxtPlugin({
  name: 'yandex-metrika',
  setup() {
    if (process.client) {
      // Yandex.Metrika counter
      (function(m: any, e: any, t: any, r: string, i: string, k: any, a: any) {
        m[i] = m[i] || function(...args: any[]) { (m[i].a = m[i].a || []).push(args) }
        m[i].l = 1 * new Date().getTime()
        for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
      })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=105951529', 'ym')
      
      // Initialize after script loads
      setTimeout(() => {
        if ((window as any).ym) {
          (window as any).ym(105951529, 'init', {
            ssr: true,
            webvisor: true,
            clickmap: true,
            ecommerce: 'dataLayer',
            accurateTrackBounce: true,
            trackLinks: true
          })
        }
      }, 100)
    }
  }
})

