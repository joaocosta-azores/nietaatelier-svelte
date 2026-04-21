<script lang="ts">
  let { data } = $props()
</script>

<section class="hero">
  <img class="hero-image" src={data.locale.hero} alt="Nieta Atelier hero" />
  <div class="hero-overlay">
    <div class="hero-copy">
      <p class="hero-kicker">{data.locale.home.kicker}</p>
      <h1>{data.locale.home.title}</h1>
      <a class="cta" href={data.locale.home.ctaHref} target="_blank" rel="noreferrer">
        {data.locale.home.ctaLabel}
      </a>
    </div>
  </div>
</section>

<section class="about-preview">
  <div class="about-inner">
    <h2>{data.locale.home.previewTitle}</h2>
    <p>{data.locale.home.previewText}</p>
    <a class="secondary-cta" href={`/${data.locale.code}/aboutus`}>
      {data.locale.home.previewCta}
    </a>
  </div>
</section>
