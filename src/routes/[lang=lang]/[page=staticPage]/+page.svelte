<script lang="ts">
  let { data } = $props()
</script>

{#if data.pageKey === 'about'}
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
{:else if data.pageKey === 'work'}
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
{:else if data.pageKey === 'walkingby'}
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
{:else if data.pageKey === 'termsandconditions'}
  <section class="feature-page feature-page--cms">
    <div class="cms-shell cms-shell--wide">
      <div class="section-intro">
        <h1>{data.locale.termsandconditions.title}</h1>
        <div class="line"></div>
      </div>

      <section class="cms-content richtext">{@html data.locale.termsandconditions.html}</section>
    </div>
  </section>
{:else if data.pageKey === 'privacypolicy'}
  <section class="feature-page feature-page--cms">
    <div class="cms-shell cms-shell--wide">
      <div class="section-intro">
        <h1>{data.locale.privacypolicy.title}</h1>
        <div class="line"></div>
      </div>

      <section class="cms-content richtext">{@html data.locale.privacypolicy.html}</section>
    </div>
  </section>
{/if}
