<script>
  import { formatMoney } from './calc.js'

  export let label = ''
  export let value = null
  export let subLabel = ''
  export let highlight = 'red'
  export let multiplier = ''

  const gradients = {
    gold: 'gradient-gold',
    green: 'gradient-green',
    red: 'gradient-red',
    blue: 'bg-mgblue',
  }
</script>

<div class="game-card animate-bounce-in">
  <div class="{gradients[highlight]} flex items-center justify-between px-4 py-2.5">
    <span class="font-body text-xs font-semibold uppercase tracking-[0.16em] text-white/90">{label}</span>
    {#if multiplier}
      <span class="rounded-full bg-black/20 px-2 py-0.5 text-[11px] font-semibold text-white/85">
        {multiplier}
      </span>
    {/if}
  </div>

  <div class="px-4 py-4 text-center">
    {#if value !== null}
      <p class="result-value break-words">{formatMoney(value)}</p>
      {#if subLabel}
        <p class="mt-1 text-sm text-slate-500 font-body">{subLabel}</p>
      {/if}
    {:else}
      <p class="result-value text-slate-600">—</p>
    {/if}
  </div>
</div>
