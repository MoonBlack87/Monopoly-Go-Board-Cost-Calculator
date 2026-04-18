<script>
  import Header from './lib/Header.svelte'
  import InputPanel from './lib/InputPanel.svelte'
  import ResultCard from './lib/ResultCard.svelte'
  import AffordabilityBadge from './lib/AffordabilityBadge.svelte'
  import { calculate, formatMoney } from './lib/calc.js'

  let firstUpgrade = ''
  let mode = 'normal'
  let balance = ''

  $: result = calculate(firstUpgrade, mode, balance || null)
  $: hasBalance = balance.trim() !== '' && result.balance !== null
  $: hasResults = result.valid
  $: inputEmpty = firstUpgrade.trim() === ''
  $: inputInvalid = !inputEmpty && !hasResults
</script>

<div class="min-h-screen pb-10">
  <div class="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
    <Header />

    <div class="mt-4 grid gap-4 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
      <div class="space-y-4">
        <InputPanel bind:firstUpgrade bind:mode bind:balance />
      </div>

      <div class="space-y-4">
        {#if hasResults}
          <section class="space-y-3 animate-slide-up">
            <ResultCard
              label="Normal"
              value={result.normalTotal}
              subLabel="Regular board total"
              highlight="red"
              multiplier="×112"
            />

            <ResultCard
              label="Bash"
              value={result.bashTotal}
              subLabel="Builder Bash total"
              highlight="gold"
              multiplier="×84"
            />

            <div class="game-card flex items-center gap-4 p-6">
              <div class="gradient-green flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl shadow-lg text-slate-950">
                Δ
              </div>
              <div>
                <p class="section-kicker">Savings</p>
                <p class="font-display text-3xl text-mggreen-light">{formatMoney(result.savings)}</p>
              </div>
            </div>

            <div class="game-card px-4 py-4">
              <p class="mb-2 section-kicker">Calculation</p>
              <p class="text-sm leading-relaxed text-slate-400 font-body">
                {#if mode === 'normal'}
                  {formatMoney(result.normalBase)} × 112 = <strong>{formatMoney(result.normalTotal)}</strong><br />
                  {formatMoney(result.normalBase)} × 84 = <strong>{formatMoney(result.bashTotal)}</strong>
                {:else}
                  {formatMoney(result.normalBase)} × 112 = <strong>{formatMoney(result.normalTotal)}</strong><br />
                  {formatMoney(result.normalBase)} × 84 = <strong>{formatMoney(result.bashTotal)}</strong>
                {/if}
              </p>
            </div>
          </section>
        {/if}

        {#if hasResults && hasBalance}
          <section class="space-y-3 animate-slide-up">
            <h2 class="px-1 font-display text-2xl text-white">Affordability</h2>

            <AffordabilityBadge
              label="Normal"
              canAfford={result.canAffordNormal}
              missing={result.missingNormal}
              surplus={result.surplusNormal}
            />
            <AffordabilityBadge
              label="Bash"
              canAfford={result.canAffordBash}
              missing={result.missingBash}
              surplus={result.surplusBash}
            />
          </section>
        {/if}

        {#if inputInvalid}
          <div class="game-card p-6 text-center animate-bounce-in">
            <p class="font-display text-2xl text-white">Invalid input</p>
            <p class="mt-2 text-sm text-slate-500 font-body">Use K, M, B, T, or Q.</p>
          </div>
        {/if}

        {#if inputEmpty}
          <div class="game-card p-5 animate-pulse-soft">
            <p class="section-kicker">Start here</p>
            <h2 class="mt-1 font-display text-[1.8rem] text-white">Enter a landmark price</h2>
            <p class="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 font-body">
              Add the first landmark price to see the full board estimate, Builder Bash estimate, and your savings.
            </p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
