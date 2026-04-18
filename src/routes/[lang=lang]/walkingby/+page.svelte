<script lang="ts">
  let { data } = $props()
</script>

<svelte:head>
  <title>{data.locale.walkingby.title}</title>
</svelte:head>

<section class="feature-page feature-page--about">
  <div class="section-intro">
    <h1>{data.locale.walkingby.title}</h1>
    <div class="line"></div>
  </div>

  <section class="story-block story-block--sand">
    <div class="story-wrap">
      <div class="richtext">
        <p class="cms-content--centered">{@html data.locale.walkingby.html}</p>
      </div>
    </div>
  </section>
</section>
