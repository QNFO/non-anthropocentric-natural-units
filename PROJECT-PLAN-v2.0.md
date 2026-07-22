# PROJECT-PLAN: Compton Frequency Cross-Ratios — Version 2.0

**Status:** Active — Phase 0 (Pre-Registration)
**Author:** Rowan Brad Quni
**Date:** 2026-07-22
**Parent:** `non-anthropocentric-natural-units` (v1.0 published, DOI 10.5281/zenodo.21480756)
**v1.0 Post-Mortem:** Phases 1–6 of the "Adelic Theory" extension were numerology — decimal PDG masses blindly fitted to j-invariants with no mechanism, no pre-registration, and a large unaccounted look-elsewhere effect (~400 effective trials). These are not carried forward.

---

## §1 Charter — v2.0

### 1.1 What failed in v1.0 and why

| Failure | Root Cause | v2.0 Fix |
|---------|-----------|----------|
| Compared decimal PDG masses to decimal j-invariants | PDG masses are SI artifacts (kg fixed via Planck constant, second via Cs hyperfine — both human-chosen calibration standards) | Use Compton/ZBW frequency ratios only — `ω_i = m_i c²/ħ` in natural units where `c = ħ = 1` ≡ frequency |
| Found 3 "matches" in 400 effective trials | No look-elsewhere correction; Dirichlet approximation theorem guarantees spurious rational fits to any real number | Pre-register exactly which cross-ratios will be computed BEFORE any numeric evaluation |
| Used base-10 percent errors, base-e logarithms | Self-contradiction: a paper critiquing anthropocentric bases then used them as error metrics | p-adic valuations as the comparison metric — the natural ultrametric distance on the Bruhat-Tits tree |
| No mechanism connecting structure to physics | Numbers were compared to other numbers with no Lagrangian, symmetry, or dynamical principle | Cross-ratio is a projective invariant of the Bruhat-Tits tree geometry — a geometric mechanism connecting p-adic spacetime structure to mass spectrum |

### 1.2 Core Claim v2.0 (LOCKED before any computation)

> In natural units ($c = \hbar = 1$), every particle mass $m_i$ is identically its Compton angular frequency $\omega_i = m_i c^2/\hbar$. The cross-ratio of any four such Compton frequencies,
>
> $$\text{CR}(i,j,k,l) = \frac{(\omega_i - \omega_k)(\omega_j - \omega_l)}{(\omega_i - \omega_l)(\omega_j - \omega_k)}$$
>
> is a projective invariant under the action of $\text{PGL}(2, \mathbb{Q}_p)$ on the Bruhat-Tits tree $\mathcal{T}_p$. This cross-ratio is independent of any choice of reference particle, unit system, or logarithmic base. Its p-adic valuation $\text{ord}_p(\text{CR})$ is an integer — the signed graph distance on $\mathcal{T}_p$ — and is the genuinely non-anthropocentric encoding of the mass spectrum.

**Pre-registered test:** We will compute $\text{CR}(e, \mu, \tau, \text{H})$ and $\text{CR}(u, d, s, c)$ as projective invariants on the $p=2,3,5$ Bruhat-Tits trees. The null hypothesis is that the p-adic valuations of these cross-ratios are distributed uniformly at random. The alternative hypothesis is that specific valuations are preferred (e.g., small absolute values), indicating structure beyond the null.

### 1.3 Scope

This project computes:
1. Compton/ZBW frequency ratios for all Standard Model particles (in natural units)
2. Cross-ratios of four-particle sets (projective invariants)
3. p-adic valuations of those cross-ratios
4. Bruhat-Tits tree distances corresponding to those valuations
5. Statistical tests against the null (uniform) hypothesis

It does NOT:
- Fit to CM j-invariants (v1.0 mistake)
- Use decimal floating-point PDG masses as fundamental input
- Compute "percent errors" in any human-chosen base
- Claim discoveries without pre-registration and multiple-comparisons correction

---

## §2 Pre-Registration (Registered 2026-07-22, BEFORE any v2.0 computation)

### 2.1 Exactly what will be tested

| Test | Cross-ratio | BT Tree (prime) | Null Hypothesis | Alternative | Pre-registered threshold |
|------|------------|-----------------|-----------------|-------------|--------------------------|
| T1 | CR(e, μ, τ, H) | p=2 | val₂(CR) ~ uniform random integer | val₂(CR) ≠ 0 (non-trivial) | |val₂(CR)| ≤ 5 departs from null |
| T2 | CR(e, μ, τ, H) | p=3 | val₃(CR) ~ uniform | val₃(CR) ≠ 0 | |val₃(CR)| ≤ 5 |
| T3 | CR(u, d, s, c) | p=3 | val₃(CR) ~ uniform | val₃(CR) correlated with quark flavor hierarchy | qualitative test |
| T4 | CR(e, μ, τ, t) | p=5 | val₅(CR) ~ uniform | structure | |val₅(CR)| ≤ 5 |
| T5 | All 5 cross-ratios × 3 primes | joint | CRs are independent uniform randoms | joint structure | Bonferroni: α = 0.05/15 = 0.0033 |

### 2.2 Exactly what will NOT be tested (to avoid look-elsewhere)

- Single-particle mass ratios (m_i/m_e or m_j/m_i) — these are not projective invariants
- Decimal-numeric proximity to ANY external constant (j-invariants, Monster numbers, etc.)
- Best-fit rational approximations (m_i/m_e ≈ p/q) — Dirichlet theorem guarantees spurious fits
- Any mass combination not listed in §2.1
- Any denominator cutoff variation
- Any metric other than p-adic valuation of cross-ratios on BT trees

### 2.3 Falsifiability

Each test is falsified if:
- T1-T4: |val_p(CR)| > 10 (i.e., the CR is an integer at that place — null hypothesis holds, no p-adic structure beyond trivial)
- T5: All 15 individual tests pass the null at α = 0.05 (no global structure)
- OR: The joint Bonferroni-corrected test fails to reject the null

---

## §3 Phases

### Phase 0: Scaffold + Pre-Registration ✅ (this document)
### Phase 1: Compute Compton/ZBW frequencies for all SM particles
### Phase 2: Compute cross-ratios for pre-registered particle sets
### Phase 3: Compute p-adic valuations for each cross-ratio
### Phase 4: Bruhat-Tits tree distance interpretation
### Phase 5: Statistical tests against null hypothesis
### Phase 6: Falsifiability conditions + calibration register
### Phase 7: Documentation (paper draft, PDF, Zenodo)

---

## §4 Deliverable Registry

| Deliverable | Path |
|-------------|------|
| PROJECT-PLAN v2.0 (this doc) | `PROJECT-PLAN-v2.0.md` |
| Compton/ZBW frequency catalog | `compton_frequencies.json` |
| Cross-ratio computations | `cross_ratios.json` |
| p-adic valuation analysis | `p-adic_valuations.json` |
| Statistical test results | `statistical_tests.json` |
| v2.0 Paper | `docs/paper-v2.md` |
| v2.0 PDF | `paper-v2.pdf` |

---

## §5 Version History

| Version | Date | Description |
|---------|------|-------------|
| v0.1-phase0 | 2026-07-22 | Pre-registration locked; v1.0 post-mortem documented |
