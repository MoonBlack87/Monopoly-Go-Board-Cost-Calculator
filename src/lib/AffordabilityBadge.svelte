<script>
  import { formatMoney } from './calc.js'

  export let label = ''
  export let canAfford = null
  export let missing = null
  export let surplus = null
</script>

{#if canAfford !== null}
  <div
    class="game-card animate-bounce-in rounded-2xl border px-4 py-4 text-center {canAfford
      ? 'border-mggreen/20 bg-mggreen/5'
      : 'border-mgred/20 bg-mgred/5'}"
  >
    <div class="mb-1 font-display text-2xl {canAfford ? 'text-mggreen-light' : 'text-mgred-light'}">
      {canAfford ? 'Affordable' : 'Missing'}
    </div>
    <p class="mb-2 text-sm text-slate-500 font-body">{label}</p>

    {#if canAfford}
      <p class="text-sm text-mggreen-light font-body">
        <strong>{formatMoney(surplus)}</strong> left
      </p>
    {:else}
      <p class="text-sm text-mgred-light font-body">
        <strong>{formatMoney(missing)}</strong> needed
      </p>
    {/if}
  </div>
{/if}
