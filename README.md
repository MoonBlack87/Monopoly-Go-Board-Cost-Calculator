# 🎲 Monopoly GO – Board Cost Calculator

An unofficial, community-powered calculator built with **Svelte + Vite + Tailwind CSS**.

Live demo → `https://MoonBlack87.github.io/Monopoly-Go-Board-Cost-Calculator/`

---

## What it does

Enter the **first upgrade cost** of Landmark 1 and the app instantly shows:

| Output | Formula |
|--------|---------|
| Normal board estimate | `base × 112` |
| Builder Bash estimate | `base × 84` |
| Builder Bash savings | difference |
| Affordability check | compares balance to each estimate |

---

## Input Modes

### Mode A – Normal Price
`Normal = input × 112` · `Builder Bash = input × 84`

### Mode B – Builder Bash Displayed Price (Landmark 1 = 50% off)
`base = input ÷ 0.5` → `Normal = base × 112` · `Builder Bash = base × 84`

---

## Accepted Number Formats
`3040000000` · `124M` · `1.89B` · `24T` · `3.5K`

---

## Run Locally

```bash
git clone https://github.com/MoonBlack87/Monopoly-Go-Board-Cost-Calculator.git
cd Monopoly-Go-Board-Cost-Calculator
npm install
npm run dev
# → http://localhost:5173/Monopoly-Go-Board-Cost-Calculator/
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

Then: **GitHub → Settings → Pages → Branch: gh-pages / root**

---

## Tech Stack

| Tool | Version |
|------|---------|
| Svelte | 5 |
| Vite | 5 |
| Tailwind CSS | 3 (local) |
| gh-pages | 6 |

---

*Not affiliated with Scopely or Hasbro. Community approximations only.*
