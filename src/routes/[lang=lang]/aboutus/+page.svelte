<script lang="ts">
  let { data } = $props()
</script>

<section class="feature-page feature-page--about">
  <div class="section-intro">
    <h1>{data.locale.about.title}</h1>
    <div class="line"></div>
  </div>

  <section class="story-block story-block--sand">
    <div class="story-wrap">
      <div class="portrait-shell">
        <img class="portrait" src={data.locale.aboutImage} alt={data.locale.about.person} />
      </div>
      <div class="story-copy">
        <h2>{data.locale.about.person}</h2>
        <div class="line"></div>
        <div class="richtext">{@html data.locale.about.html}</div>
      </div>
    </div>
  </section>
</section>
