# SPINOFF/HANDOFF: RG-Harmonic Isomorphism — Research Frontier

**Parent Publication:** "The RG-Harmonic Isomorphism" (DOI: 10.5281/zenodo.21486206)  
**Date:** 2026-07-22  
**Status:** Active research agenda — handoff for future deep-dive sessions  
**Author:** Rowan Brad Quni-Gudzinas  

---

## 1. What Was Established

The parent paper identified a **five-pillar structural isomorphism** between the renormalization group (RG) and harmonic quantum mechanics:

| Pillar | Claim | Confidence |
|---|---|---|
| I | Scale separation ≡ energy-level separation (Wilsonian mode elimination ≡ HO Hilbert space truncation) | 0.95 |
| II | Fixed points ≡ stationary states (β(g*) = 0 ≡ energy eigenstates) | 0.95 |
| III | Callan-Symanzik ≡ Schrödinger-type evolution (μ ≡ time, β(g)∂/∂g ≡ kinetic operator) | 0.90 |
| IV | Zero-point energy ≡ fixed-point vacuum expectation (unobservable without gravity) | 0.92 |
| V | Harmonic oscillator ≡ universal IR attractor for weakly anharmonic bosonic systems | 0.88 |

The paper also retrospectively evaluated Planck (1900), Einstein (1905), and ten QM/QFT/SM milestones through this unified lens, with Bayesian shifts across ten interpretative parameters ($\Delta$ from $-0.30$ to $-0.65$).

---

## 2. Open Research Questions — Priority-Ordered

### TIER 1: Immediately Actionable (single-session deep dives)

#### RQ1: Transmon Anharmonicity Scaling Law
**Question:** Does the transmon's relative anharmonicity $\alpha_r$ scale as $\alpha_r \propto (E_C/E_J)^{1/2}$ at high $E_J/E_C$ ratios?

**Context:** Pillar V predicts that all weakly anharmonic bosonic systems flow to the harmonic IR fixed point. The transmon's anharmonicity should follow a specific scaling law derived from the RG flow of the cosine perturbation.

**Approach:**
- Collect published transmon characterization data ($E_J/E_C$, $\alpha_r$) from the experimental literature (Koch et al. 2007 through Wang et al. 2024)
- Fit $\alpha_r = A \cdot (E_C/E_J)^\nu$ and test whether $\nu = 1/2$ (RG prediction) vs. $\nu = 1$ (naive perturbative)
- Bayesian model comparison: RG scaling vs. alternative models
- Calibration entry: [CHECK: 2028] by $E_J/E_C > 500$, $\alpha_r$ must follow $\nu = 1/2 \pm 0.1$ power law

**Deliverable:** `artifacts/transmon-scaling-analysis.md` with data table, fits, Bayesian model comparison, calibration register

**Calibration register entry:**
```
[CHECK: 2028-Q4] For E_J/E_C > 500, the transmon relative anharmonicity α_r must
scale as α_r ∝ (E_C/E_J)^{ν} with ν = 0.50 ± 0.10 if Pillar V is correct.
Deviation ν > 0.6 would falsify the universal IR attractor claim.
Status: [PENDING]
```

---

#### RQ2: The Zero-Point Energy Observability Theorem
**Question:** Can we formalize the claim that zero-point energy is unobservable in any non-gravitational experiment as a rigorous theorem of QFT?

**Context:** Pillar IV asserts that the ZPE is the fixed-point vacuum expectation — unobservable without gravity. This is widely believed but has never been formalized as a theorem with precise scope conditions. The Casimir effect measures differences; the cosmological constant measures the absolute value (via gravity). Is there a no-go theorem that precisely delimits when absolute ZPE is and is not observable?

**Approach:**
- Review the literature on vacuum energy observability (Jaffe 2005 on Casimir effect, Weinberg 1989 on cosmological constant, Polchinski 2006 on the CC problem)
- Formalize a theorem: "In any Poincaré-invariant QFT with only local interactions and no dynamical gravity, the absolute zero-point energy density is unobservable — only energy differences between configurations produce measurable effects."
- Identify the precise assumptions: Poincaré invariance, locality, no dynamical gravity, no topology change
- Test edge cases: Unruh effect (acceleration → apparent temperature), dynamical Casimir effect (moving mirrors), Schwinger effect (pair production in strong fields)

**Deliverable:** `artifacts/zpe-observability-theorem.md` with formal statement, proof sketch, edge case analysis

**Calibration register entry:**
```
[CHECK: indefinite] No experiment measuring absolute ZPE (as opposed to
energy differences between configurations) in a non-gravitational context
shall survive independent replication. Any claimed detection of absolute
ZPE without gravity is presumptively a systematic error.
Status: [PENDING — survival analysis]
```

---

### TIER 2: Medium-Term (multi-session programs)

#### RQ3: Log-Periodic Signatures in Strongly Coupled RG Flows
**Question:** Does discrete scale invariance (log-periodic oscillations) appear generically wherever the RG β-function admits limit cycles, and can we predict specific experimental signatures?

**Context:** Pillar I notes that the equally-spaced HO spectrum ($\Delta E = \hbar\omega$) is the prototype for discrete scale invariance in RG flows — log-periodic oscillations in $\ln\mu$. The Efimov effect (log-periodic trimer energies in cold atoms) is the canonical example. But does this generalize?

**Approach:**
- Map the known landscape of RG limit cycles: Efimov physics, Berezinskii-Kosterlitz-Thouless transition, conformal window in QCD, quantum critical points
- For each, compute the predicted log-period $\ln\lambda$ from the β-function structure
- Identify experimental signatures: Efimov resonances (already known), scaling violations in near-conformal QCD, log-periodic corrections to critical exponents
- Cross-reference with QNFO's existing adelic physics program: are log-periodic RG signatures the archimedean avatar of p-adic structure?

**Deliverable:** Multi-paper program with experimental predictions for each domain

**Calibration register entry:**
```
[CHECK: 2030] Log-periodic oscillations with period ln(λ) ≈ π/|β'(g*)| must
appear in at least one strongly coupled RG system beyond the Efimov effect.
Candidates: near-conformal QCD (N_f ≈ 12, lattice), quantum critical metals
(heavy fermions), BKT transition (finite-size scaling corrections).
Status: [PENDING]
```

---

#### RQ4: The Hidden Harmonic Structure of the Standard Model
**Question:** Can the Standard Model's three gauge couplings and Yukawa sector be understood as RG flows from a single harmonic oscillator prototype at the GUT scale?

**Context:** The near-convergence of $\alpha_i^{-1}(\mu)$ at $M_{\text{GUT}} \sim 10^{16}$ GeV is an RG fingerprint. The RG-harmonic thesis predicts this is not a coincidence — it's the signature of a single harmonic prototype at the unification scale from which the three couplings bifurcate.

**Approach:**
- Two-loop RG running: compute the precise unification scale and coupling with current PDG data
- Harmonic prototype model: what symmetry breaking pattern produces SU(3)×SU(2)×U(1) from a single harmonic mode?
- Testable predictions: proton decay lifetime, gauge coupling unification precision, threshold corrections at the SUSY scale
- Cross-reference: does the non-anthropocentric natural units program (976/919) constrain the GUT-scale harmonic prototype?

**Deliverable:** `artifacts/sm-harmonic-unification.md` with RG analysis, prototype model, testable predictions

**Calibration register entry:**
```
[CHECK: 2035] If Hyper-Kamiokande detects proton decay with τ_p in the
range 10^{34}-10^{35} years (minimal SU(5) prediction) AND the three gauge
couplings converge to within 2σ at a single scale when run with SUSY
threshold corrections → harmonic prototype interpretation strengthened.
If HK sees NO proton decay by 2040 with sensitivity τ_p > 10^{35} years
→ minimal harmonic unification falsified; non-minimal variants remain viable.
Status: [PENDING]
```

---

#### RQ5: The Inverted Harmonic Oscillator and the Hierarchy Problem
**Question:** Does the RG-harmonic lens suggest a new approach to the hierarchy problem ($m_H \ll M_{\text{Planck}}$)?

**Context:** The Higgs potential is an inverted harmonic oscillator ($-\mu^2\phi^2$ instead of $+m^2\omega^2 x^2$). The hierarchy problem is: why does the instability occur at $v \approx 246$ GeV rather than at $M_{\text{Planck}}$? The RG-harmonic lens reframes this: the inverted HO is a system that has already undergone an RG-driven phase transition. Can we understand the hierarchy as a consequence of the RG flow structure near the inverted fixed point?

**Approach:**
- Study the RG flow near an inverted Gaussian fixed point (negative mass-squared)
- Map the phase diagram: for what initial conditions does the instability occur at parametrically low scales?
- Explore mechanisms: dimensional transmutation à la Coleman-Weinberg, near-conformal dynamics (walking technicolor), landscape/anthropic selection
- Does the harmonic prototype impose constraints on possible solutions?

**Deliverable:** `artifacts/inverted-ho-hierarchy.md` with RG phase diagram, mechanism classification, experimental signatures

---

### TIER 3: Speculative/Long-Range (paradigm forecast)

#### RQ6: Harmonic Quantum Gravity?
**Question:** Does the RG-harmonic isomorphism extend to quantum gravity?

**Context:** If the harmonic oscillator is the universal grammar of quantum theory and the RG is its scale-space syntax, does quantum gravity fit into this picture? String theory's worldsheet is a 2D conformal field theory — an infinite collection of harmonic oscillators (the oscillator modes of the string). Loop quantum gravity's spin networks are representations of SU(2) — the quantum harmonic oscillator's symmetry group. Is gravity the "un-harmonized" sector that awaits its harmonic prototype?

**Approach:**
- Survey harmonic structures in quantum gravity approaches: string theory (worldsheet CFT, oscillator modes), LQG (SU(2) spin networks, area spectrum), asymptotic safety (RG fixed point), causal dynamical triangulations
- Test the thesis: does each approach's mathematical structure reduce to harmonic oscillators in some limit?
- Speculative synthesis: is the graviton the missing harmonic mode?

**Deliverable:** `artifacts/harmonic-quantum-gravity.md` — speculative, clearly marked as paradigm-forecast territory

---

#### RQ7: The Adelic Harmonic Oscillator
**Question:** Pillar V shows the harmonic oscillator is the universal IR attractor at the archimedean place. QNFO's adelic program extends physics to all completions of $\mathbb{Q}$. Is there a p-adic harmonic oscillator, and does it serve as the p-adic RG fixed point?

**Context:** The adelic synthesis paper (DOI: 10.5281/zenodo.21208366) constructs adelic braid groups, Temperley-Lieb algebras, and anyon fusion categories. The harmonic oscillator's algebraic structure — the Heisenberg algebra $[x, p] = i\hbar$ — has a natural p-adic generalization using p-adic quantum mechanics (Vladimirov derivatives, p-adic wavefunctions). Does the p-adic harmonic oscillator exhibit the same RG fixed-point behavior?

**Approach:**
- Construct the p-adic harmonic oscillator using Vladimirov fractional derivatives
- Compute its spectrum, ladder operators, and coherent states
- Study RG flows perturbing away from the p-adic Gaussian fixed point
- Does the transmon's convergence toward harmonicity have a p-adic analog (e.g., in p-adic anyon models)?

**Deliverable:** `artifacts/p-adic-harmonic-oscillator.md` — connects RG-harmonic isomorphism to adelic physics program

---

## 3. Cross-Cutting Themes

### 3.1 The Qubit Delusion — Extended

The Two-Level Lie (DOI: 10.5281/zenodo.21484345) showed the transmon is 98.1% harmonic oscillator. The RG-harmonic isomorphism provides the theoretical foundation: the transmon is flowing to the harmonic IR fixed point. This suggests a broader research program:

**"The Qubit Delusion — Phase VI: Harmonic Quantum Computing"**

If all weakly anharmonic bosonic systems are harmonic oscillators in drag, what does "quantum computing" actually compute? Is the computational power of superconducting circuits better understood as **bosonic quantum computing** — manipulating continuous-variable harmonic modes rather than discrete two-level systems? This connects to existing paradigms (boson sampling, Gottesman-Kitaev-Preskill codes, continuous-variable quantum computing) but reframes them as the **native** paradigm rather than a niche alternative.

### 3.2 The Non-Anthropocentric Natural Units Connection

The parent project (DOI: 10.5281/zenodo.21480756) seeks dimensionless mass ratios as organizing principles. The RG-harmonic lens suggests that mass ratios correspond to ratios of harmonic oscillator frequencies at different RG scales:

$$m_i / m_j = \omega_i(\mu) / \omega_j(\mu)$$

where the $\omega_i(\mu)$ are the effective harmonic oscillator frequencies of the corresponding fields at scale $\mu$. The 976/919 ratio may be understood as the ratio of RG-improved harmonic frequencies at the electroweak scale.

### 3.3 The Fine-Structure Constant as Cross-Ratio — RG Extension

The fine-structure constant paper (DOI: 10.5281/zenodo.20108536) reframes $\alpha$ as a cross-ratio. The RG-harmonic lens adds: $\alpha$ is not just a static cross-ratio — it's an **RG-flowing cross-ratio**. The value $\alpha \approx 1/137$ is not a fundamental constant but the value of a running harmonic anharmonicity at the Thomson limit ($q^2 \to 0$). At the Z-pole, $\alpha(M_Z) \approx 1/128$. The harmonic oscillator's anharmonicity $\alpha_r$ is the transmon analog of the fine-structure constant — both measure the deviation from pure harmonicity, and both run with scale.

---

## 4. Bayesian Calibration Register — Full Table

| ID | Prediction | Check Date | Condition | Status | EV of Falsification |
|---|---|---|---|---|---|
| CAL-01 | Transmon $\alpha_r \propto (E_C/E_J)^{1/2}$ at $E_J/E_C > 500$ | 2028-Q4 | Published transmon characterization data | PENDING | Falsifies Pillar V |
| CAL-02 | No non-gravitational absolute ZPE measurement survives replication | Indefinite | Any claimed detection must survive independent replication | PENDING (survival) | Falsifies Pillar IV |
| CAL-03 | Log-periodic oscillations beyond Efimov in ≥1 strongly coupled system | 2030 | Lattice QCD or quantum critical metals data | PENDING | Weakens Pillar I universality |
| CAL-04 | Proton decay at HK with $\tau_p \sim 10^{34-35}$ yr + coupling convergence | 2035 | Hyper-Kamiokande + precision SM running | PENDING | Falsifies harmonic GUT prototype |
| CAL-05 | Inverted HO hierarchy: new mechanism identified by 2028 | 2028 | Theory paper with falsifiable predictions | PENDING | Weakens RG-harmonic approach to hierarchy |
| CAL-06 | P-adic harmonic oscillator constructed and shown to have RG fixed-point structure | 2027 | Published paper with explicit $\beta$-function | PENDING | Weakens adelic extension claim |
| CAL-07 | Bosonic quantum computing advantage demonstrated on harmonic-native algorithm | 2030 | Peer-reviewed experimental result | PENDING | N/A (not falsifiable in isolation) |
| CAL-08 | 976/919 ratio derived from RG-improved harmonic frequencies at EW scale | 2027 | Closed-form derivation, not numerical fit | PENDING | Weakens natural-units ↔ RG-harmonic connection |
| CAL-09 | $\alpha(M_Z)$ and $\alpha_r$ (transmon) shown to be structurally analogous running anharmonicities | 2027 | Explicit mapping between QED β-function and transmon anharmonicity flow | PENDING | Weakens cross-ratio ↔ RG unification |
| CAL-10 | All weakly anharmonic bosonic systems tested to date follow the $\nu = 1/2$ IR flow | 2030 | Systematic review of ≥5 experimental platforms | PENDING (survival) | Falsifies Pillar V universality |

---

## 5. Recommended Session Sequence

For future deep-dive sessions, the recommended priority order is:

1. **RQ1: Transmon Scaling Law** — highest EV, immediate actionability, directly tests Pillar V, leverages existing experimental data
2. **RQ8: α as Running Harmonic Anharmonicity** — connects three QNFO papers (α-cross-ratio, Two-Level Lie, RG-Harmonic), high synthesis value
3. **RQ2: ZPE Observability Theorem** — formalizes Pillar IV, closes a long-standing conceptual gap
4. **RQ5: Inverted HO Hierarchy** — attacks the biggest open problem in particle physics with a novel lens
5. **RQ4: SM Harmonic Unification** — requires precision RG running, connects to non-anthropocentric natural units
6. **RQ3: Log-Periodic Signatures** — broader survey, connects to adelic physics
7. **RQ7: P-adic Harmonic Oscillator** — speculative, connects to adelic physics program
8. **RQ6: Harmonic Quantum Gravity** — most speculative, paradigm-forecast territory

---

## 6. Deliverable Registry

| ID | Deliverable | Path | Dependencies | Estimated Sessions |
|---|---|---|---|---|
| D-01 | Transmon Scaling Analysis | `artifacts/transmon-scaling-analysis.md` | None (literature data) | 1 |
| D-02 | ZPE Observability Theorem | `artifacts/zpe-observability-theorem.md` | None (review + formalization) | 1 |
| D-03 | Log-Periodic RG Survey | `artifacts/log-periodic-rg-survey.md` | None (literature survey) | 1-2 |
| D-04 | SM Harmonic Unification | `artifacts/sm-harmonic-unification.md` | D-01 (scaling methodology) | 2-3 |
| D-05 | Inverted HO Hierarchy | `artifacts/inverted-ho-hierarchy.md` | None | 2-3 |
| D-06 | Harmonic Quantum Gravity Survey | `artifacts/harmonic-quantum-gravity.md` | None | 1-2 |
| D-07 | P-adic Harmonic Oscillator | `artifacts/p-adic-harmonic-oscillator.md` | D-03 (log-periodic context) | 2-3 |
| D-08 | α as Running Anharmonicity | `artifacts/alpha-running-anharmonicity.md` | D-01 (transmon scaling) | 1-2 |

---

## 7. Cross-References

| QNFO Paper | DOI | Relevance |
|---|---|---|
| The Two-Level Lie | 10.5281/zenodo.21484345 | Experimental confirmation of Pillar V |
| Fine-Structure Constant as Cross-Ratio | 10.5281/zenodo.20108536 | α as static cross-ratio — extend to running RR |
| Non-Anthropocentric Natural Units | 10.5281/zenodo.21480756 | Mass ratios as harmonic frequency ratios |
| Adelic Synthesis | 10.5281/zenodo.21208366 | P-adic harmonic oscillator construction |
| Informational Universe Synthesis | 10.5281/zenodo.21480126 | Scale hierarchy as information structure |

---

## 8. Handoff State for Next Session

**Last action:** Published RG-Harmonic Isomorphism paper (15 pages, DOI: 10.5281/zenodo.21486206) and created this spinoff/handoff document.

**Active branch:** `feature/phase0-init` on `QNFO/non-anthropocentric-natural-units`

**Next action for continuer:** Pick the highest-priority RQ (RQ1: Transmon Scaling Law) and execute as a single-session deep dive. The literature data (Koch 2007 through Wang 2024) should be collected from published transmon characterization tables. Fit the scaling law, perform Bayesian model comparison, and produce `artifacts/transmon-scaling-analysis.md`.

**Blockers:** None. All research questions are unblocked and actionable.

**Environment:** Python 3.12, Pandoc+XeLaTeX, Cloudflare Workers/D1/R2, Zenodo API, full QNFO infrastructure available.

---

*This document serves as both a research agenda and a session handoff. Load the parent paper (DOI: 10.5281/zenodo.21486206) for full context before beginning any deep dive.*
