<script>
  /** @type {'normal'|'bash'} */
  export let mode = 'normal'
</script>

<div>
  <p class="mb-2 block px-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 font-body">
    Mode
  </p>

  <div class="flex gap-2">
    <button
      type="button"
      onclick={() => (mode = 'normal')}
      class="mode-pill {mode === 'normal' ? 'mode-pill-active' : 'mode-pill-inactive'}"
      aria-pressed={mode === 'normal'}
    >
      Normal
    </button>

    <button
      type="button"
      onclick={() => (mode = 'bash')}
      class="mode-pill {mode === 'bash' ? 'mode-pill-active' : 'mode-pill-inactive'}"
      aria-pressed={mode === 'bash'}
    >
      Bash
    </button>
  </div>

  {#if mode === 'bash'}
    <p class="mt-2 px-1 text-xs text-slate-500 font-body animate-slide-up">
      Restores base price automatically.
    </p>
  {/if}
</div>
