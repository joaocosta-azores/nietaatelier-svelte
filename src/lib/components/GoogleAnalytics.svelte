<script lang="ts">
  import { browser } from '$app/environment'
  import { afterNavigate } from '$app/navigation'
  import { onMount } from 'svelte'

  const gaId = import.meta.env.PUBLIC_GA_ID as string | undefined

  function trackPageView() {
    if (!browser || !gaId || !window.gtag) return

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${window.location.pathname}${window.location.search}`,
    })
  }

  onMount(() => {
    if (!gaId) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(...args) {
      window.dataLayer.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', gaId, { send_page_view: false })

    trackPageView()

    afterNavigate(() => {
      trackPageView()
    })
  })
</script>
