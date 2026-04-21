<script lang="ts">
  let { data } = $props()
</script>

<section class="feature-page feature-page--about">
  <div class="section-intro">
    <h1>{data.locale.work.title}</h1>
    <div class="line"></div>
  </div>

  <section class="story-block story-block--sand">
    <div class="story-wrap">
      <div class="richtext">
        <div class="cms-content--centered">{@html data.locale.work.html}</div>
      </div>
    </div>
  </section>
</section>
