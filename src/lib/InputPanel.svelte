<script>
  import ModeSelector from './ModeSelector.svelte'

  export let firstUpgrade = ''
  export let mode = 'normal'
  export let balance = ''
</script>

<div class="game-card p-4 animate-slide-up">
  <h2 class="mb-3 font-display text-[1.8rem] text-white">Your board</h2>

  <div class="mb-4">
    <ModeSelector bind:mode />
  </div>

  <div class="mb-4">
    <label for="firstUpgrade" class="mb-1.5 block px-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 font-body">
      Landmark 1 price
    </label>
    <input
      id="firstUpgrade"
      type="text"
      inputmode="decimal"
      placeholder="1.89B / 24T / 1Q"
      bind:value={firstUpgrade}
      class="game-input"
      autocomplete="off"
      spellcheck="false"
    />
    <p class="mt-2 px-1 text-sm text-slate-400 font-body leading-relaxed">
      K = thousand · M = million · B = billion · T = trillion · Q = quadrillion
    </p>
  </div>

  <div>
    <label for="balance" class="mb-1.5 block px-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 font-body">
      Cash on hand
    </label>
    <input
      id="balance"
      type="text"
      inputmode="decimal"
      placeholder="optional"
      bind:value={balance}
      class="game-input"
      autocomplete="off"
      spellcheck="false"
    />
  </div>
</div>
