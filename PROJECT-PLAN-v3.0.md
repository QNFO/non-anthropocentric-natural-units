---
modified: 2026-07-22T09:00:00Z
tags:
  - qnfo
  - non-anthropocentric-natural-units
  - pre-registration
  - v3.0
  - mechanism-first
---

# PROJECT-PLAN v3.0: Non-Anthropocentric Natural Units — Mechanism-First Pre-Registration

**Status:** Pre-Registration Locked (Phase 0)
**Date:** 2026-07-22
**Project:** QNFO/non-anthropocentric-natural-units (branch `feature/phase0-init`, commit `7b092cc`)
**Context-ID:** D1 handoff `0f1f90a8-9937-40d3-9983-e4d9e3fcad7f` (session `sess-ec6ff619`, `qnfo-audit.handoffs`)
**Supersedes:** v2.2 (constrained anharmonic oscillator, disconfirmed at p=0.973)

---

## §0 Executive Summary

Versions 1.0–2.2 of this programme established a conceptual foundation (natural units, Ostrowski's theorem, adelic proposal), conducted one pre-registered null-result study (cross-ratios on Bruhat-Tits trees), survived one retracted phantom claim (v2.1 degenerate tautology), and decisively disconfirmed one physically-motivated hypothesis (v2.2 transmon-inspired anharmonic oscillator, p=0.973). **The programme has produced zero positive signals.** Every apparent signal that emerged was later traced to methodological failure: unregistered multiple comparisons (v1.1), degenerate parameterization (v2.1), or failure to beat surrogate-data null models (v2.2).

v3.0 is therefore not an iteration — it is a **reset**. Before any further numeric pattern search, v3.0 requires an independently grounded **physical mechanism** that would predict specific mass ratios, structural features of the Compton spectrum, or testable deviations from the Standard Model null. Without a mechanism, pattern-matching over the 18-particle mass spectrum is guaranteed to produce false positives by the look-elsewhere effect alone.

This document pre-registers the v3.0 research programme across **five avenues**, each with explicit mechanism requirements, locked statistical thresholds, and independent null-model comparisons. **No computation on any avenue proceeds before its corresponding pre-registration section is committed to git and timestamped.**

---

## §1 Post-Mortem: What Every Prior Version Teaches

### 1.1 Version history and verdicts

| Version | Approach | Mechanism? | Pre-registered? | Null model? | Result | Verdict |
|---------|----------|------------|-----------------|-------------|--------|---------|
| v1.0 | Conceptual foundation: Bekenstein bound without base, Ostrowski's theorem | N/A (conceptual) | N/A | N/A | Solid conceptual paper | ✓ Valid foundation |
| v1.1 | Adelic Theory: CM j-invariants matched to decimal PDG masses | None — pure numeric comparison | No — ~400 effective trials, arbitrary 3.5% window | No | 3 "hits" in ~400 trials (expect ~2.5 by chance) | ✗ Flagged as numerology; left live as historical record |
| v2.0 | Pre-registered cross-ratios on Bruhat-Tits trees, p-adic valuations | Geometric: cross-ratio = invariant under PGL(2,Q_p), ord_p = graph distance on BT tree | Yes — 5 CRs × 3 primes = 15 tests | Yes — Dirichlet guarantee comparison | 1 weak hint (CR(e,μ,τ,H)=976/919, ord₂=4), 1.7× better than Dirichlet; null not rejected | ⊘ Honest null result |
| v2.1 | Unconstrained anharmonic oscillator grid search | Claimed: transmon analogy | No — free ω₀ and α degenerated to ω₀=1,α=0 (round to integer tautology) | No — surrogate null not run before publication claim | Claimed "4.8× improvement, p<0.001"; found to be degenerate tautology; phantom DOI | ✗ Retracted; tag deleted |
| v2.2 | Constrained anharmonic oscillator (α_r∈[0.01,0.05], pre-registered) | Constrained to real transmon regime per "Two-Level Lie" (DOI 10.5281/zenodo.21484345) | Yes — ω₀∈[1,250], α_r∈{0.01,...,0.05}, n≤200 | Yes — 1000 surrogate log-uniform datasets | RMS_real=107,500 vs surrogate_median=57,985; real fits WORSE than random; p=0.973 | ✗ Decisively disconfirmed |

### 1.2 The pattern

Every "signal" in this programme's history has exactly one of three explanations:

1. **Look-elsewhere inflation** (v1.1): searching ~400 combinations with a 3.5% window yields ~2.5 expected chance matches. Finding 3 is consistent with null.
2. **Degenerate parameterization** (v2.1): a model with ≥18 effective degrees of freedom fitting 18 data points can achieve arbitrarily good fit to any dataset. The ω₀=1,α=0 solution ("round to nearest integer") fits any sequence of positive reals — it is a property of the search space, not the data.
3. **No mechanism connecting the model to the data** (v1.1, v2.1, v2.2): even when constrained to physically-motivated regimes (v2.2), a model that happens to share a mathematical form with a physical system (anharmonic oscillator) but has no Lagrangian-level connection to the Yukawa sector of the Standard Model is not a physical hypothesis — it is a functional-form coincidence test, and it failed.

### 1.3 What v3.0 must do differently

v3.0 will NOT:

- Search for numeric coincidences between particle masses and arbitrary mathematical constants (j-invariants, Monster numbers, oscillator ladders, etc.)
- Fit any model with a free scale parameter plus free integer indices to the mass spectrum — this is guaranteed to fit any dataset and proves nothing
- Run any unregistered analysis — every test, threshold, and null model is specified here before computation
- Claim publication or file modification without same-turn independent verification (curl -I, grep, read)

v3.0 WILL:

- Require a mechanism traceable to the Standard Model Lagrangian, its known RG structure, or a specific beyond-Standard-Model (BSM) framework with independent empirical motivation
- Pre-register every test, including the null model and its generation procedure
- Compare every apparent signal against genuine independent surrogate data (not permutations of the model's own output)
- Report the full distribution of null-model outcomes, not just a single p-value
- Treat all results — positive or negative — as publishable, per the pre-registration discipline

This document is the **pre-registration lock**. It is committed to git and timestamped before any v3.0 computation begins.

---

## §2 The Mechanism Mandate

### 2.1 Definition of "mechanism"

For v3.0, a "mechanism" is a **derivable consequence of a specified Lagrangian or Hamiltonian** that connects particle masses (or Compton frequency ratios) to a dynamical principle. Acceptable mechanisms include:

- **Renormalization group flow**: given a UV boundary condition (e.g., GUT-scale Yukawa unification in SO(10) or SU(5)), the known 1-loop or 2-loop RG equations for Yukawa couplings produce specific IR mass ratios. These are predictions of the RG — a physical process — not numeric coincidences.
- **Anomaly cancellation constraints**: specific gauge groups impose constraints on fermion content that restrict mass ratios. E.g., if a flavor symmetry G_f is gauged, anomaly cancellation may require specific relationships among Yukawa couplings.
- **Moduli stabilization in string compactification**: if SM Yukawas arise from geometric moduli in a specific Calabi-Yau, the discrete symmetry of the manifold may constrain mass ratios to algebraic numbers.
- **Finite-temperature or finite-density QCD effects**: the QCD phase diagram may impose selection effects on which quark mass hierarchies produce habitable universes — an anthropic mechanism, but one with a well-defined physical ensemble.
- **The Bruhat-Tits tree as an actual RG-flow representation**: if the p-adic structure is not a coincidence but a *dual description* of the RG (see §7), then ord_p(cross-ratio) corresponds to RG step count — a derivable prediction.

Unacceptable "mechanisms" (rejected for v3.0):

- "Round numbers in natural units must mean something" — the Dirichlet theorem guarantees that any real number has rational approximations; finding one is expected, not surprising
- "Harmonic oscillator overtones" without a Lagrangian coupling the oscillator to the Yukawa sector
- "CM j-invariants" or "Monster group" numerics without a field-theoretic embedding
- Any grid search with a free scale parameter + per-particle free integer indices (n_params ≥ n_data → guaranteed perfect fit)

### 2.2 The null-model discipline

Every v3.0 test must include:

1. **Genuine surrogate data**: independent random datasets drawn from a distribution that matches the known statistical properties of the mass spectrum (log-uniform over the observed range, matching the number of data points). Random seeds are pre-registered.
2. **Full distribution, not a single comparison**: report the median, 5th percentile, and 1st percentile of the surrogate RMS/null-metric distribution, not just "p < threshold."
3. **Pre-registered thresholds**: all significance thresholds, multiple-testing corrections, and stopping rules are specified before any computation.
4. **The anti-tautology check**: for any model with fitted integer indices, verify that the identical procedure applied to surrogate data does NOT achieve comparable fit quality. If it does, the model is degenerate.

---

## §3 Avenue 1: Revisit the v2.0 Hint with Updated CODATA/PDG Values

### 3.1 The hint

v2.0 found that CR(e,μ,τ,H) = 976/919 with an error of 5.76×10⁻⁷, only marginally better than the Dirichlet guarantee for q≤1000 (factor ~1.7×). The 976/919 rational has ord₂=4. This was the single weak signal among 15 pre-registered tests, insufficient to reject the null at Bonferroni-corrected α=0.0033.

### 3.2 Why revisit

The v2.0 computation used PDG 2024 mass values. Since then, no major update to the tau or Higgs mass has occurred, but the muon g-2 experiment (Fermilab Muon g-2, 2023) and ongoing lattice QCD determinations of quark masses provide incrementally improved values for several inputs. The question is whether the hint strengthens, weakens, or vanishes entirely under updated values — a simple test of robustness.

### 3.3 Pre-registered protocol (locked 2026-07-22)

**Inputs**: Latest CODATA 2022 + PDG 2024/2025 values for m_e, m_μ, m_τ, m_H. Compute ω_i = m_i c²/ℏ (in natural units with ω_e = 1). Use PDG central values only; propagate uncertainties to the cross-ratio via standard error propagation.

**Test**:
1. Recompute CR(e,μ,τ,H) with updated masses
2. Find best rational approximation p/q with q ≤ 1000 (same cutoff as v2.0)
3. Compare to v2.0 result (976/919)
4. Compute ord_p of exact rational for p = 2, 3, 5

**Null hypothesis**: The best rational approximation to the updated CR is consistent with the Dirichlet guarantee — i.e., its error is within a factor of 2 of 1/(q(q+1)).

**Pre-registered interpretation**:
- If the updated CR still approximates 976/919 to within 10⁻⁵ → hint persists; proceed to Avenue 2 with this as the primary target
- If the best rational changes to a different value or degrades beyond Dirichlet×2 → hint is likely a statistical fluctuation; archive as null and deprioritize
- If the hint strengthens (error < 10⁻⁷, i.e., >10× better than Dirichlet) → warrants independent replication with anticipated PDG 2026 values before claiming significance

### 3.4 Data source lock

- Electron mass: CODATA 2022 (m_e = 9.1093837139×10⁻³¹ kg, relative uncertainty 3.0×10⁻¹⁰)
- Muon mass: CODATA 2022 (m_μ = 1.883531627×10⁻²⁸ kg, relative uncertainty 2.2×10⁻⁸)
- Tau mass: PDG 2024 (m_τ = 1776.86±0.12 MeV/c²)
- Higgs mass: PDG 2024 (m_H = 125.20±0.11 GeV/c²)
- All other particles: PDG 2024

---

## §4 Avenue 2: QFT Renormalization-Group Derivation of Lepton Mass Ratios

### 4.1 The mechanism

The Standard Model Yukawa couplings run with energy scale. Their RG evolution is governed by the 1-loop β-functions:

$$\frac{dy_i}{dt} = \frac{y_i}{16\pi^2} \left[ \frac{3}{2}(y_i^2 - y_j^2) + T - \sum c_k g_k^2 \right]$$

where T = Tr(3y_u² + 3y_d² + y_e² + y_ν²) and c_k are gauge-group-dependent coefficients. This is a **physical mechanism**: the Yukawa couplings at the electroweak scale are not free parameters but fixed points of a dynamical flow from some UV boundary condition.

**Key question for v3.0**: Given a physically-motivated UV boundary condition (not fitted to the mass data), does the RG flow produce IR mass ratios that match the observed lepton spectrum better than random UV boundary conditions?

This is fundamentally different from the v1.1–v2.2 approach: it does not search for coincidences in the output data. It takes a mechanism (RG flow) with a specific input assumption (UV boundary condition) and computes whether the output matches observation — a genuine prediction, not a fit.

### 4.2 Specific UV boundary conditions to test

**BC-1: Minimal SO(10) Yukawa Unification.** In minimal SUSY SO(10), the third-generation Yukawa couplings unify at the GUT scale M_GUT ≈ 2×10¹⁶ GeV: y_b(M_GUT) = y_τ(M_GUT) = y_t(M_GUT). This is a one-parameter boundary condition (the unified Yukawa value) plus tan β. The observed ratio m_b/m_τ ≈ 2.4 at low energy is then a prediction of the RG flow — the difference arises from the stronger QCD running of y_b vs. the electroweak-only running of y_τ.

**Pre-registered test**:
1. Take the 2-loop MSSM RG equations (Martin & Vaughn, 1994; valid to 2-loop order for gauge and Yukawa couplings)
2. Set boundary condition at M_GUT = 2×10¹⁶ GeV: y_b(M_GUT) = y_τ(M_GUT)
3. Run the RG down to M_Z = 91.1876 GeV
4. Extract the predicted ratio m_b/m_τ at the Z-pole
5. Compare to the PDG value: m_b(m_b) in MS-bar scheme, converted to m_b(M_Z) via standard QCD running; m_τ(M_Z) from PDG pole mass corrected for QED running
6. **Null model**: generate 1000 random UV boundary condition pairs (y_b, y_τ) drawn from log-uniform distribution over [10⁻⁶, 1], run the same RG procedure, and compare the distribution of predicted m_b/m_τ ratios to the observed value
7. **Falsification**: if the unified BC yields a prediction within 1σ of the observed value AND this is in the top 5% of the surrogate BC distribution → mechanism survives for further investigation. If the prediction is outside 3σ of observation OR not distinguishable from random BCs → this specific unification is disconfirmed.

**BC-2: SU(5) b-τ Unification.** In minimal SU(5), b-τ Yukawa unification is natural (both arise from the same 5̄ representation). Test the same RG procedure with this BC.

**BC-3: No unification — anarchic UV.** As a control, test whether ANY log-uniform UV boundary condition produces a good fit to ALL observed fermion masses. If the anarchic scenario fits as well as unification scenarios, unification is not supported.

### 4.3 What will NOT be done

- The UV boundary condition WILL NOT be fitted to the data. It is taken from the GUT model's group-theoretic structure, not a χ² minimization.
- Quark masses will be addressed only after the lepton-sector test is published. Quark mixing adds 4 CKM parameters, turning the test into a multi-parameter fit — the antithesis of v3.0's mechanism-first discipline.
- Supersymmetry will be treated as a framework for well-defined RG equations, not as a claim about nature. The test is: does the RG structure of a specific GUT model produce the observed mass pattern? SUSY is the scaffolding for the calculation; the result is a test of the GUT hypothesis, not SUSY itself.

### 4.4 Pre-registered statistical thresholds

- Individual BC test significance: α = 0.05 (uncorrected; only 3 BCs tested)
- Null model: 1000 surrogate BCs, log-uniform over [10⁻⁶, 1]
- Reporting: full histogram of surrogate m_b/m_τ values with observed value marked
- Multiple-testing: if any BC passes at α=0.05, flag for independent replication with PDG 2026 values before claiming significance

---

## §5 Avenue 3: The Harmonic Ladder — Only with Independent Scale Fixing

### 5.1 The problem with harmonic ladders

Any model of the form ω_i = n_i·ω₀ − (α/2)·n_i(n_i−1) with free ω₀, α, and per-particle integer n_i has n_params ≥ n_data and will achieve a "perfect fit" to any dataset by construction. The v2.1 degenerate case (ω₀=1, α=0 → ω_pred(n) = n → round to nearest integer) trivially fits any 18 positive real numbers to <0.5% RMS.

The v2.2 constrained version (α_r∈[0.01,0.05], per real transmon physics) was a legitimate attempt but failed decisively: real particle masses fit the constrained model WORSE than 97.3% of random surrogate datasets.

### 5.2 What would make a harmonic ladder testable

A harmonic ladder hypothesis is ONLY testable if:

1. **The fundamental scale ω₀ is fixed from an independent physical source** — not fitted to the mass data. A candidate: the electroweak scale v=246 GeV → ω₀ = v/(ħ) in natural units.
2. **The anharmonicity α is derived from a coupling constant in the Lagrangian** — not fitted. A candidate: α ∝ y_t² (top Yukawa squared) if the ladder arises from radiative corrections to the Higgs potential.
3. **The integer indices n_i are mapped to quantum numbers with independent physical meaning** — e.g., weak isospin, generation number, or radial excitation number in a bound-state model.

**If and only if** all three conditions are met, the harmonic ladder becomes a genuine prediction rather than a fitting exercise.

### 5.3 Pre-registration: conditional gate

No harmonic-ladder computation for v3.0 may proceed until a document specifying (1), (2), and (3) with explicit Lagrangian-level justification is peer-reviewed within QNFO and committed to this repository. This is a **hard gate** — the harmonic ladder avenue remains locked until the mechanism document is approved.

### 5.4 Pre-registered null model (if gate is passed)

Should the gate be passed:

1. The fixed ω₀ and α from the mechanism define a unique ladder prediction: ω_i^pred = n_i·ω₀ − (α/2)·n_i(n_i−1) with n_i assigned to each particle by the mechanism
2. Compute RMS error between predicted and observed Compton frequencies
3. Null model: 1000 surrogate mass datasets (log-uniform over observed range), with the SAME n_i assignments applied (this tests whether the n_i pattern itself, rather than the masses, carries the signal)
4. Falsification: if RMS_real ≥ surrogate median RMS → disconfirmed
5. If RMS_real < surrogate 5th percentile → survives for further investigation; do not claim "discovery" without independent replication

---

## §6 Avenue 4: Bruhat-Tits Trees as RG Flow Representations

### 6.1 The conceptual connection

The Bruhat-Tits tree T_p is a (p+1)-regular tree whose boundary is P¹(Q_p). The p-adic valuation ord_p(x) of a rational number x is the signed graph distance on T_p. In v2.0, we observed that CR(e,μ,τ,H) = 976/919 has ord₂=4 — a specific graph distance on T₂.

The (p+1)-regular tree structure of T_p is structurally reminiscent of **RG flow branching**: at each scale, operators mix, and the flow diagram of coupling constants in theory space can be represented as a tree (each node = a scale, each edge = a flow direction). Wilsonian RG is fundamentally a tree-like coarse-graining process.

### 6.2 The question

Is there a mathematical correspondence between the Bruhat-Tits tree T_p (for specific primes p) and the actual RG flow structure of the Standard Model? Specifically:

- **Asymptotic freedom (QCD)**: the β-function of SU(3) has a negative coefficient → the gauge coupling g₃ runs to zero in the UV. The running of α_s is a monotonic function of log(μ). Is there a prime p for which the p-adic metric on T_p captures the scale-dependence of α_s?
- **Landau pole (U(1))**: the hypercharge coupling g₁ has a positive β-function coefficient → it grows in the UV and eventually hits a Landau pole. Does this correspond to a boundary condition at a specific vertex on some T_p?
- **Yukawa fixed points**: the top Yukawa y_t has a quasi-fixed-point structure (Pendleton-Ross infrared fixed point). Does the value of this fixed point correspond to a special rational with simple p-adic valuation?

### 6.3 Pre-registered exploration (Phase C — speculative, published with appropriate caveats)

**C.1**: Map the known RG flow of α_s(μ), α_em(μ), and sin²θ_W(μ) onto a tree structure. Compute the tree distances between the electroweak scale, the QCD scale Λ_QCD, and the GUT scale M_GUT. Test whether these distances correspond to integer p-adic valuations.

**C.2**: Compute the set of all cross-ratios of the form CR(Λ_QCD, M_Z, M_GUT, M_Pl) in natural units. Test whether any of these cross-ratios approximate simple rationals with non-zero p-adic valuation.

**C.3**: For any prime p where a signal is found in C.1 or C.2, check whether the same prime appears in the v2.0 cross-ratio rational approximations (976/919 gives ord₂=4; 430/419 gives ord₂=1, ord₅=1).

**Null model**: generate 1000 random energy scales spanning the same log-range as the physical ones. Compute cross-ratios and check for rational approximations with q≤1000. The physical spectrum should not produce more rational approximations than the surrogate distribution's 95th percentile.

**Caveat**: This avenue is explicitly labeled **SPECULATIVE** in any output. It is exploring a mathematical analogy, not testing a derivable prediction. Any positive result is flagged for mechanism development, not claimed as evidence. No Zenodo publication proceeds from this avenue alone — it requires a companion mechanism derivation (§4 or §5).

---

## §7 Avenue 5: Infrastructure Debt Resolution

### 7.1 Outstanding items from v2.0–v2.2

| Item | Status | Priority |
|------|--------|----------|
| Sync v2.0 paper (paper-v2.md + paper-v2.pdf) to R2 (qnfo-releases bucket) | NOT DONE | High |
| Insert v2.0 D1 living-paper entry (slug: `non-anthropocentric-natural-units-v2`) | NOT DONE | High |
| Sync v2.2 paper/correction to R2 (qnfo-releases bucket) | NOT DONE | High |
| Insert v2.2 D1 living-paper entry (slug: `non-anthropocentric-natural-units-v2.2`) | NOT DONE | High |
| Update KG node for project to reflect v2.0 and v2.2 publications | NOT DONE | Medium |
| Verify v1.0 still resolving at papers.qnfo.org/papers/non-anthropocentric-natural-units (HTTP 200) | Needs re-check | Low |
| Cross-check that all Zenodo DOIs resolve (21480756, 21485130, 21485556, 21485716) | Needs re-check | Medium |

### 7.2 Verification protocol for each infrastructure action

Per the mandatory discipline established by this session's failures, every write/deploy action must include same-turn independent verification:

- **R2 upload**: `rclone copy` → same-turn `rclone ls` or `rclone cat` to verify content
- **D1 insert**: `INSERT INTO living-paper.papers ...` → same-turn `SELECT slug, title, doi FROM living-paper.papers WHERE slug = '...'` 
- **Paper URL check**: `curl -I https://papers.qnfo.org/papers/<slug>` → verify HTTP 200 in same turn
- **DOI check**: `curl -I https://doi.org/10.5281/zenodo.<id>` → verify HTTP 303 (redirect to Zenodo) in same turn
- **File modifications**: any `edit` or `write` → same-turn `grep` or `read` to verify content landed

---

## §8 Pre-Registration Lock and Versioning

### 8.1 Lock metadata

| Field | Value |
|-------|-------|
| Document path | `D:\Obsidian\notes\v1\2026\07\22\_26203090834.md` |
| Lock timestamp | 2026-07-22T09:00:00Z |
| Git commit | TBD (to be committed to QNFO/non-anthropocentric-natural-units, branch `feature/phase0-init`) |
| Git tag | `v3.0-pre-registration` |
| D1 context | handoff `0f1f90a8-9937-40d3-9983-e4d9e3fcad7f` (qnfo-audit.handoffs, session sess-ec6ff619) |
| R2 archive | qnfo-audit/audit/conversations/2026-07-22-non-anthropocentric-natural-units-v3-pre-registration.md |
| Prior related conversation | R2: qnfo-audit/audit/conversations/2026-07-22-non-anthropocentric-natural-units-v1-v2.md |

### 8.2 Execution order (mandatory)

1. **Avenue 1** (v2.0 hint replication) — runs first. No mechanism dependency. Provides updated baseline.
2. **Avenue 5** (infrastructure debt) — runs in parallel with Avenue 1. No dependency.
3. **Avenue 2** (RG-flow derivation) — main v3.0 contribution. Requires Avenue 1 result for context, but proceeds regardless of outcome.
4. **Avenue 4** (BT-RG connection) — runs after Avenue 2. Depends on Avenue 2's RG flow data.
5. **Avenue 3** (harmonic ladder) — locked behind hard gate. May not run in v3.0 if gate conditions (§5.3) are not met.

### 8.3 Publication gates

No avenue proceeds to publication without:

1. All pre-registered tests executed exactly as specified (no post-hoc modifications)
2. Full null-model distribution reported (not just a single p-value)
3. Independent verification of all claimed results (curl, grep, read)
4. All infrastructure debt (Avenue 5) resolved
5. Results committed to git with clear version tagging

---

## §9 Mandatory Discipline (Hard-Won from v2.1–v2.2 Failures)

These rules apply to ALL work across ALL avenues. Violation of any rule triggers an automatic red-team halt and re-audit.

1. **Never claim "published" without same-turn independent `curl -I` verification.** A tool reporting success is not verification. Only an HTTP response code from an independent request counts.

2. **Never claim a file edit succeeded without same-turn independent `grep` or `read` verification.** The `edit` tool's "Cannot find the specified text to replace" message IS a failure. Do not proceed as if the edit succeeded.

3. **Any model with a free scale parameter + free per-particle integer indices has n_params ≥ n_data and WILL achieve arbitrarily good fit to any data.** This is a mathematical fact, not a discovery. The "round to nearest integer" limit (ω₀=1, α=0) is always available in the search space. Exclude it by construction or the model is degenerate.

4. **The null model must use genuine independent surrogate data** — NOT a permutation, shuffling, or transformation of the model's own best-fit output. Permuting the model's own output preserves the model's structure and invalidates the significance test entirely.

5. **Pre-registration is not optional.** Every test, every threshold, every null model, and every stopping rule is specified in this document and committed to git before computation begins. Post-hoc "discoveries" discovered during unregistered exploration are not results — they are hypotheses for the NEXT pre-registration.

6. **The Dirichlet theorem is always the baseline.** Any real number has rational approximations with error < 1/(q(q+1)) for denominator q. Beating the Dirichlet guarantee by a factor of <3 is NOT evidence of structure — it is expected by chance. Evidence requires beating Dirichlet by ≥10× after multiple-testing correction.

7. **The look-elsewhere effect is computed and reported for every test.** If you test N combinations, report the expected number of chance matches at your significance threshold. If observed matches ≈ expected chance matches, you have a null result — report it honestly.

---

## §10 Version History

| Version | Date | Description |
|---------|------|-------------|
| v3.0-pre-registration | 2026-07-22 | Mechanism-first pre-registration: 5 avenues, locked thresholds, mandatory discipline. No computation yet executed. |
| v2.2 | 2026-07-22 | Constrained anharmonic oscillator — disconfirmed at p=0.973 |
| v2.1 (retracted) | 2026-07-22 | Degenerate tautology; phantom DOI; tag deleted |
| v2.0 | 2026-07-22 | Pre-registered cross-ratios on BT trees — honest null result, 1 weak hint |
| v1.1 | 2026-07-21 | Adelic Theory — flagged as numerology, kept as historical record |
| v1.0 | 2026-07-21 | Conceptual foundation: Bekenstein bound, Ostrowski's theorem |

---

*This document is the pre-registration lock for v3.0. It may not be modified except to add version history entries recording completed work. Any change to test specifications, thresholds, or null models requires a new pre-registration document (v3.1, v3.2, ...).*
