<script lang="ts">
  let { data, children } = $props()

  let mobileMenuOpen = $state(false)
</script>

<div class="site-shell">
  <header class="site-header">
    <div class="utility-bar">
      <div class="utility-inner">
        <div class="language-dropdown">
          <button class="language-button" type="button" aria-haspopup="true" aria-expanded="false">
            {data.locale.languageLabel}
          </button>
          <div class="language-menu" aria-label="Language options">
            {#each [
              { code: data.lang, label: data.locale.languageLabel, href: data.pathname },
              {
                code: data.alternateLang,
                label: data.locale.switchLabel,
                href: data.pathname.replace(`/${data.lang}/`, `/${data.alternateLang}/`)
              }
            ] as option}
              <a
                class="language-option"
                class:active={option.code === data.lang}
                href={option.href}
                aria-current={option.code === data.lang ? 'page' : undefined}
              >
                {option.label}
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <div class="masthead">
      <button
        class="mobile-menu-button"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={mobileMenuOpen}
        onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <a class="logo-link" href={data.locale.homePath} aria-label="Nieta Atelier">
        <img class="logo" src={data.locale.logo} alt="Nieta Atelier" />
      </a>

      <nav class="main-nav" aria-label="Main navigation">
        {#each data.locale.nav as item}
          <a
            class="nav-link"
            class:active={data.pathname === item.href}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer' : undefined}
          >
            {item.label}
          </a>
        {/each}
      </nav>
    </div>

    {#if mobileMenuOpen}
      <button
        class="mobile-menu-backdrop"
        type="button"
        aria-label="Close navigation menu"
        onclick={() => (mobileMenuOpen = false)}
      ></button>
    {/if}

    <nav class:open={mobileMenuOpen} class="mobile-nav" aria-label="Mobile navigation">
      <div class="mobile-nav__header">
        <span class="mobile-nav__title">Menu</span>
        <button
          class="mobile-nav__close"
          type="button"
          aria-label="Close navigation menu"
          onclick={() => (mobileMenuOpen = false)}
        >
          ×
        </button>
      </div>

      <div class="mobile-nav__section">
        {#each data.locale.nav as item}
          <a
            class="mobile-nav__link"
            class:active={data.pathname === item.href}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer' : undefined}
            onclick={() => (mobileMenuOpen = false)}
          >
            {item.label}
          </a>
        {/each}
      </div>

      <div class="mobile-nav__section mobile-nav__section--meta">
        {#each [
          { code: data.lang, label: data.locale.languageLabel, href: data.pathname },
          {
            code: data.alternateLang,
            label: data.locale.switchLabel,
            href: data.pathname.replace(`/${data.lang}/`, `/${data.alternateLang}/`)
          }
        ] as option}
          <a
            class="mobile-nav__link mobile-nav__link--language"
            class:active={option.code === data.lang}
            href={option.href}
            aria-current={option.code === data.lang ? 'page' : undefined}
            onclick={() => (mobileMenuOpen = false)}
          >
            {option.label}
          </a>
        {/each}
      </div>
    </nav>
  </header>

  <main>{@render children()}</main>

  <footer class="site-footer">
    <div class="footer-inner">
      <section class="footer-column">
        <h3>Info</h3>
        {#each data.locale.infoLinks as item}
          <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}>{item.label}</a>
        {/each}
      </section>

      <section class="footer-column">
        <h3>Social</h3>
        {#each data.locale.social as item}
          <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
        {/each}
      </section>

      <section class="footer-column">
        <h3>{data.locale.office.title}</h3>
        {#each data.locale.office.lines as line}
          <p>{line}</p>
        {/each}
        <a href="tel:+351295249400">+351295249400</a>
        <a href="mailto:nieta@nietaatelier.com">nieta@nietaatelier.com</a>
      </section>
    </div>
    <div class="footer-copy">{data.locale.footerCopy}</div>
  </footer>
</div>
