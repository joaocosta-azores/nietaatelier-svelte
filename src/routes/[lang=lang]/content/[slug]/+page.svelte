<script lang="ts">
  let { data } = $props()
</script>

<svelte:head>
  <title>{data.page.title}</title>
</svelte:head>

<section class="feature-page feature-page--cms">
  <div class={`cms-shell ${data.page.type === 'richtext' ? 'cms-shell--wide' : ''}`}>
    <header class="cms-header">
      <h1>{data.page.title}</h1>
    </header>

    {#if data.page.type === 'centered-lines'}
      <section class="cms-content cms-content--centered">
        {#each data.page.lines as line}
          <h3 class="cms-line">{line}</h3>
        {/each}
        <h3 class="cms-line">{@html data.page.trailingHtml}</h3>
      </section>
    {:else}
      <section class="cms-content richtext">{@html data.page.html}</section>
    {/if}
  </div>
</section>
