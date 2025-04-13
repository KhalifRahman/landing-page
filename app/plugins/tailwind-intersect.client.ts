// plugins/tailwind-intersect.client.ts
import { Observer } from 'tailwindcss-intersect'

export default defineNuxtPlugin((nuxtApp) => {
  Observer.start()

  // Optional: restart on route changes
  nuxtApp.hook('page:finish', () => {
    Observer.restart()
  })
})
