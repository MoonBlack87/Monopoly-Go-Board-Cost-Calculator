/**
 * Parses Monopoly GO abbreviated numbers.
 * Supports: 3040000000 | 124M | 1.89B | 24T | 3.5K | 1.2Q
 * Returns null if unparseable.
 */
export function parseMoneyInput(raw) {
  if (!raw || typeof raw !== 'string') return null
  const s = raw.trim().replace(/,/g, '').replace(/\s/g, '')
  if (s === '') return null

  const suffixes = { k: 1e3, m: 1e6, b: 1e9, t: 1e12, q: 1e15 }
  const match = s.match(/^([0-9]*\.?[0-9]+)([kmbtq]?)$/i)
  if (!match) return null

  const num = parseFloat(match[1])
  const suffix = match[2].toLowerCase()

  if (isNaN(num) || num < 0) return null
  return suffix ? num * suffixes[suffix] : num
}

/**
 * Formats a large number to Monopoly GO style abbreviation.
 * e.g. 3_040_000_000 → "3.04B"
 */
export function formatMoney(n) {
  if (n === null || n === undefined || isNaN(n)) return '—'
  if (n >= 1e15) return (n / 1e15).toFixed(2).replace(/\.?0+$/, '') + 'Q'
  if (n >= 1e12) return (n / 1e12).toFixed(2).replace(/\.?0+$/, '') + 'T'
  if (n >= 1e9) return (n / 1e9).toFixed(2).replace(/\.?0+$/, '') + 'B'
  if (n >= 1e6) return (n / 1e6).toFixed(2).replace(/\.?0+$/, '') + 'M'
  if (n >= 1e3) return (n / 1e3).toFixed(2).replace(/\.?0+$/, '') + 'K'
  return n.toLocaleString('en-US')
}

/**
 * Core calculator.
 *
 * @param {string} inputRaw        - User-entered first-upgrade cost
 * @param {'normal'|'bash'} mode   - Which price the user entered
 * @param {string|null} balanceRaw - Optional current balance string
 */
export function calculate(inputRaw, mode, balanceRaw = null) {
  const input = parseMoneyInput(inputRaw)
  if (input === null || input <= 0) return { valid: false }

  const normalBase = mode === 'bash' ? input / 0.5 : input

  const normalTotal = normalBase * 112
  const bashTotal = normalBase * 84
  const savings = normalTotal - bashTotal

  const balance = parseMoneyInput(balanceRaw)
  let canAffordNormal = null
  let canAffordBash = null
  let missingNormal = null
  let missingBash = null
  let surplusNormal = null
  let surplusBash = null

  if (balance !== null && balance >= 0) {
    canAffordNormal = balance >= normalTotal
    canAffordBash = balance >= bashTotal

    surplusNormal = canAffordNormal ? balance - normalTotal : null
    missingNormal = canAffordNormal ? null : normalTotal - balance
    surplusBash = canAffordBash ? balance - bashTotal : null
    missingBash = canAffordBash ? null : bashTotal - balance
  }

  return {
    valid: true,
    normalBase,
    normalTotal,
    bashTotal,
    savings,
    balance,
    canAffordNormal,
    canAffordBash,
    missingNormal,
    missingBash,
    surplusNormal,
    surplusBash,
  }
}
