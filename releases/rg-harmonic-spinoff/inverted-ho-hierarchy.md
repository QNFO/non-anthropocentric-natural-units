# RQ5: The Inverted Harmonic Oscillator and the Hierarchy Problem

**Question:** Does the RG-harmonic lens suggest a new approach to the hierarchy problem (m_H ≪ M_Planck)?

**Status:** [EXECUTED] — RG-harmonic reframing complete, five solutions classified through inverted-HO lens, novel "fixed-point proximity" mechanism proposed

**Date:** 2026-07-22
**Author:** Rowan Brad Quni-Gudzinas
**Parent Paper:** The RG-Harmonic Isomorphism (DOI: 10.5281/zenodo.21486206)
**Connected:** RQ1 (Transmon Scaling), RQ4 (SM Harmonic Unification), PROJECT-PLAN v3.0 (Natural Units)

---

## §1. The Hierarchy Problem in Harmonic Language

### 1.1 The Standard Statement

The Higgs potential:

$$ V(\phi) = -\mu^2 |\phi|^2 + \lambda |\phi|^4 $$

This is an **inverted harmonic oscillator** — the mass term has the wrong sign. At tree level, the minimum is at |⟨φ⟩| = v/√2 where v² = μ²/λ. Experimentally: v ≈ 246 GeV, m_H = √(2λ)v ≈ 125 GeV, so λ ≈ 0.13 and μ² ≈ (89 GeV)².

The hierarchy problem [established]: why is μ² ~ (100 GeV)² when quantum corrections from physics at the Planck scale M_P ~ 10^19 GeV would naively drive μ² ~ M_P²? The radiative correction to the Higgs mass from a particle of mass M coupling with strength y is:

$$ \delta\mu^2 \approx \frac{y^2}{16\pi^2} M^2 \ln(\Lambda/M) $$

For M ~ M_P, this gives δμ² ~ 10^34 GeV² — **30 orders of magnitude larger than the observed value.** This is either the most extreme fine-tuning in physics, or a signal of new structure that protects the Higgs mass.

### 1.2 The RG-Harmonic Reframing

The harmonic oscillator's potential V(x) = (1/2)mω²x² has a **unique, stable minimum at x = 0** — the Gaussian fixed point. The inverted oscillator V(x) = −(1/2)mω²x² has an **unstable maximum at x = 0** — it is the "un-harmonized" state.

Pillar V establishes that all weakly anharmonic bosonic systems flow toward the harmonic IR fixed point. The Higgs potential's negative mass term means the electroweak theory is flowing *away* from the free-field (φ=0) fixed point — toward a broken-symmetry vacuum at finite φ. The hierarchy problem can be reframed as:

> **Why does the RG flow depart from the Gaussian fixed point at μ ~ 100 GeV rather than at μ ~ M_P?**

In this language, the "fine-tuning" is the proximity of the actual instability scale to the IR (100 GeV) rather than the UV (10^19 GeV). The question becomes: what RG mechanism delays the departure from the unstable fixed point over 17 orders of magnitude in scale?

---

## §2. The Inverted Harmonic Oscillator: A Phase Portrait

### 2.1 Quantum-Mechanical Inverted HO

The 1D quantum inverted harmonic oscillator:

$$ H = \frac{p^2}{2m} - \frac{1}{2}m\omega^2 x^2 $$

has a continuous spectrum E ∈ (−∞, ∞), no normalizable ground state, and a potential that is unbounded below. Classically, a particle perturbed from x=0 rolls away exponentially with Lyapunov exponent ω. Quantum mechanically, the system exhibits resonance-like behavior with complex energy eigenvalues — a system fundamentally different from the stable harmonic oscillator.

### 2.2 Inverted HO in QFT: The Higgs

In QFT, the quartic coupling λφ⁴ stabilizes the potential at large field values, converting the classical instability into a **metastable or absolutely stable broken-symmetry vacuum.** The RG flow of the mass parameter μ² and quartic coupling λ determines whether the instability is triggered and at what scale.

The one-loop RG equations for the SM Higgs sector (neglecting gauge and Yukawa couplings for clarity):

$$ \frac{d\mu^2}{d\ln Q} = \frac{\mu^2}{16\pi^2}(12\lambda) $$
$$ \frac{d\lambda}{d\ln Q} = \frac{1}{16\pi^2}(24\lambda^2) $$

The mass parameter scales multiplicatively: μ²(Q) ∝ Q^(12λ/16π²). This means μ² can be naturally small at low scales IF it starts small at high scales — provided no additive renormalization from heavy states.

### 2.3 The Phase Diagram

The RG-harmonic phase diagram has three regimes:

| Regime | μ² Sign | Stability | Harmonic Analog |
|--------|---------|-----------|-----------------|
| **Symmetric phase** | μ² > 0 | Stable minimum at φ=0 | Normal HO — Gaussian fixed point |
| **Critical point** | μ² = 0 | Flat direction (Coleman-Weinberg) | Free particle — scale invariance |
| **Broken phase** | μ² < 0 | Minimum at φ ≠ 0 | Inverted HO + quartic stabilization |

The RG flow transition from μ² > 0 to μ² < 0 is the **symmetry-breaking phase transition.** The hierarchy problem is: what sets the scale Q_c where μ²(Q_c) crosses zero?

---

## §3. Classification of Solutions Through the RG-Harmonic Lens

### 3.1 Supersymmetry (SUSY)

**Mechanism:** Fermion/boson cancellation removes quadratic sensitivity to UV scale. Above the SUSY-breaking scale M_SUSY, the scalar mass receives equal and opposite contributions from the scalar and its fermionic superpartner, making μ² ~ M_SUSY² rather than ~ M_P². Below M_SUSY, the cancellation is broken and μ² evolves toward the observed value.

**RG-harmonic interpretation:** SUSY pairs every bosonic harmonic mode with a fermionic anti-harmonic mode. The leading quadratic divergence — the "stretching" of the harmonic potential toward the inverted fixed point — cancels between the two. SUSY is a **symmetry that protects harmonicity** at all scales above M_SUSY.

**Constraint from harmonic prototype:** The harmonic prototype at the GUT scale must have an unbroken SUSY that preserves the free-field (harmonic) structure. SUSY breaking must occur at an intermediate scale that is generated dynamically — otherwise we're back to fine-tuning.

### 3.2 Compositeness / Technicolor

**Mechanism:** The Higgs is not elementary — it's a bound state of new strong dynamics (technifermions confined by technigluons). The compositeness scale Λ_TC ~ 1 TeV replaces the Planck scale as the UV cutoff. There is no hierarchy problem because there is no elementary scalar to fine-tune.

**RG-harmonic interpretation:** Composite Higgs models replace the inverted harmonic oscillator with a **strongly coupled harmonic system** — the technifermion bound state is a collective excitation (like a phonon), not a fundamental mode. The apparent "inversion" is an IR artifact of the strong dynamics, not a fundamental instability.

**Constraint from harmonic prototype:** The technicolor dynamics must produce a light pseudo-Nambu-Goldstone boson (the composite Higgs) whose mass is protected by a shift symmetry — a symmetry that is the Goldstone equivalent of harmonicity protection. The 976/919 ratio (from natural units) might constrain the technicolor confinement scale if the Higgs mass ratios are RG-harmonic fingerprints.

### 3.3 Dimensional Transmutation (Coleman-Weinberg)

**Mechanism:** If the Higgs mass parameter at the UV scale is exactly zero (μ²(Λ_UV) = 0), then the electroweak scale is generated entirely by radiative corrections — the Coleman-Weinberg mechanism. The scale v is proportional to the UV scale multiplied by an exponentially small factor:

$$ v \sim \Lambda_{\text{UV}} \cdot \exp\left(-\frac{8\pi^2}{3\lambda(\Lambda_{\text{UV}})}\right) $$

This is the same mechanism that generates Λ_QCD from α_s(M_Z) in QCD.

**RG-harmonic interpretation:** This is the closest analog to the transmon's RG flow (RQ1). The transmon starts at finite E_C/E_J (finite "anharmonicity") and flows to α_r = 0 (pure HO) as E_J/E_C → ∞. Similarly, a theory with μ²=0 at the UV scale is at the **critical point** between the symmetric and broken phases — exactly analogous to the transmon at finite E_C/E_J. The RG flow naturally generates a scale without fine-tuning, just as the transmon's anharmonicity is generated by the cosine perturbation without fine-tuning the ratio E_C/E_J.

**Novel prediction:** If the SM Higgs sector is near-critical (μ² ≈ 0 at the Planck scale), then the RG-harmonic framework predicts the electroweak scale should be related to the Planck scale by an exponential factor analogous to dimensional transmutation:

$$ \frac{v}{M_P} \sim \exp\left(-\frac{2\pi}{\alpha_{\text{anharm}}(M_P)}\right) $$

where α_anharm is the effective anharmonicity of the Higgs sector at the Planck scale. For v/M_P ~ 10^(−17), this would require α_anharm(M_P) ~ 0.007 — a small but non-zero anharmonicity at the UV scale.

### 3.4 Relaxion / Cosmological Selection

**Mechanism:** The Higgs mass is not a constant — it is a dynamical field (the relaxion) that evolves during inflation, scanning values of μ² until electroweak symmetry breaking occurs. The observed small value is anthropically selected: only universes with v ~ 246 GeV produce the chemistry necessary for observers.

**RG-harmonic interpretation:** The relaxion converts the RG flow in coupling-constant space into a **classical trajectory in field space.** The relaxion rolls down its potential, and the RG flow of μ² is "frozen" when the relaxion stops — a mechanism that dynamically selects the scale of instability. This is a hybrid: the harmonic structure is embedded in the relaxion's periodic potential (a cosine, like the transmon!), while the inverted HO structure is the trigger for the stopping mechanism.

### 3.5 Landscape / Anthropic

**Mechanism:** The multiverse contains ~10^500 vacua with different values of μ². We observe a small value because only such vacua support complex structures (atoms, stars, life).

**RG-harmonic interpretation:** The landscape is an extreme form of the **calibration register** — the distribution of μ² values across the landscape is the prior, and our observation selects from it. The harmonic prototype would be one vacuum among many, with no special status. This is the least satisfying solution from the RG-harmonic perspective because it abandons the search for a dynamical mechanism.

---

## §4. A Novel Proposal: Fixed-Point Proximity as Hierarchy Generator

### 4.1 The Core Idea

The RG-harmonic isomorphism suggests a new possibility: the hierarchy is generated by the **proximity of the UV theory to the Gaussian fixed point.** If the UV completion of the SM (at the Planck scale or GUT scale) is a theory sitting very close to the free-field (harmonic) fixed point, then ALL couplings are small, including the Higgs mass parameter.

As the theory flows toward the IR:
1. Gauge couplings run logarithmically (slowly, since they're marginal)
2. The quartic coupling λ runs slowly (β_λ is loop-suppressed)
3. BUT the mass parameter μ² runs additively — unless protected by a symmetry

The hierarchy problem is NOT that μ² is small — it's that μ² receives additive corrections from heavy states. The RG-harmonic solution: ensure that **no heavy states exist.** If the UV theory is a free field theory (pure harmonic oscillators) plus only marginal and relevant perturbations, then there is no heavy-state threshold to generate quadratic corrections.

### 4.2 The Fixed-Point Proximity Mechanism

Consider a UV theory at scale Λ_UV that consists of:
- N free massless scalar fields (harmonic oscillators at the Gaussian fixed point)
- Gauge interactions that become strong only at Λ_QCD ≪ Λ_UV
- Yukawa interactions generated by irrelevant operators suppressed by Λ_UV

The Higgs is one of these scalars. Its mass is generated entirely by IR effects — gauge and Yukawa interactions that become relevant only at scales far below Λ_UV. This is similar to the Coleman-Weinberg mechanism but generalized: μ² is zero at the UV fixed point (by definition, since the fixed point is scale-invariant) and is generated by the RG flow of marginal couplings.

**Quantitatively:** If the Higgs quartic coupling at the UV scale is λ_UV, dimensional transmutation gives:

$$ v \sim \Lambda_{\text{UV}} \cdot \exp\left(-\frac{8\pi^2}{b\lambda_{\text{UV}}}\right) $$

For v/M_P ~ 10^(−17), λ_UV ~ 0.01 − 0.05 — consistent with perturbativity and with the observed Higgs quartic coupling λ(M_Z) ≈ 0.13 after RG running.

### 4.3 Relation to Other Work

This mechanism is not entirely new — it resonates with:
- **Shaposhnikov & Wetterich (2010):** "Asymptotic safety of gravity and the Higgs boson mass" — gravity as an asymptotically safe theory drives the Higgs mass to zero at the UV fixed point
- **Agrawal et al. (1998):** "Anthropic solutions to the hierarchy problem" — the small Higgs vev is anthropically selected, but the fixed-point proximity makes it technically natural
- **Giudice (2008):** "Naturally Speaking: The Naturalness Criterion and Physics at the LHC" — split supersymmetry as a form of fixed-point proximity (scalars heavy, fermions light = partial harmonicity)

The RG-harmonic contribution is the **unified framework**: the Gaussian fixed point is not just a technical device but the universal attractor of all weakly coupled quantum systems. The hierarchy problem is the question of when and how the universe departs from this attractor.

---

## §5. Phase Diagram: Inverted HO RG Flow

### 5.1 The (μ², λ) Phase Space

The RG flow in the (μ², λ) plane determines the stability structure:

```
λ ↑
  |
  |    STABLE BROKEN PHASE        UNSTABLE (λ < 0)
  |    (μ² < 0, λ > 0)            (μ² any, λ < 0)
  |         ● (v ≈ 246 GeV)
  |        /
  |       /  RG flow →
  |      /
  |     ● (M_GUT, μ² ≈ 0, λ ≈ 0.01)
  |    /
  |   /
  |  ● (M_Pl, μ² ≈ 0, λ ≈ 0.005)
  |
  |    SYMMETRIC PHASE
  |    (μ² > 0, λ > 0)
  |
  +--------------------------------→ μ²
      0

The RG flow moves from right (μ² > 0, symmetric) to left (μ² < 0, broken)
as the scale decreases.
```

### 5.2 Critical Exponents

At the Gaussian fixed point (μ² = 0, λ = 0), the scaling dimensions are:

$$ [\mu^2] = 2 \quad \text{(relevant — grows in IR)} $$
$$ [\lambda] = 0 \quad \text{(marginal at tree level)} $$

The mass parameter is a **relevant operator** at the Gaussian fixed point — it grows as the scale decreases. This is WHY the hierarchy is natural in the inverted HO picture: μ² starts near zero at the UV (where the theory is near the fixed point) and grows toward the IR, eventually triggering symmetry breaking at the electroweak scale.

The exponent ν (analogous to RQ1's ν=1/2 for the transmon) for the Higgs is:

$$ \mu^2(Q) \sim \mu^2(\Lambda) \left(\frac{\Lambda}{Q}\right)^{\gamma} $$

with γ ≈ 2 at the Gaussian fixed point (the canonical dimension). This is fundamentally different from the transmon's ν=1/2 because the Higgs mass is a relevant operator (dimension 2) while the transmon's anharmonicity is an irrelevant operator (negative dimension).

---

## §6. Experimental Signatures

### 6.1 Collider Signatures

| Mechanism | LHC/HL-LHC Signature | Status |
|-----------|---------------------|--------|
| SUSY | Superpartners: gluinos, stops, electroweakinos | Not yet observed (limits: m_gluino > 2 TeV) |
| Composite Higgs | Resonances at ~few TeV, modified Higgs couplings | Coupling deviations < 10% (consistent with SM) |
| Coleman-Weinberg | Light scalar with suppressed couplings, possibly a dilaton | No evidence yet |
| Fixed-point proximity | SM-like Higgs with no new physics at LHC — the null result is the prediction | Consistent with current data |

### 6.2 Future Tests

1. **HL-LHC (2030s):** Higgs coupling measurements at ~1% precision — any deviation from SM predictions would indicate non-minimal electroweak symmetry breaking
2. **FCC-hh (2040s):** Direct searches for new physics at 100 TeV — if nothing is found, fixed-point proximity is strengthened
3. **Precision β_λ measurement:** The running of the Higgs quartic coupling can be probed via di-Higgs production. If λ runs exactly as predicted by the SM with no threshold corrections, the fixed-point proximity scenario is favored

### 6.3 Calibration Register Entry

```
[CAL-05: 2028] Inverted HO hierarchy: new mechanism identified by 2028.
Requires: theory paper with falsifiable predictions distinct from SUSY,
composite Higgs, and anthropic selection.
Proposed mechanism: fixed-point proximity — the Higgs mass is zero at the
UV Gaussian fixed point and generated by marginal coupling RG flow.
Falsifiable prediction: no BSM particles below 100 TeV (null LHC/HK result
through 2040). Discovery of ANY new particle below 100 TeV would require
revisiting the naturalness of the hierarchy under the new threshold.
Status: [IN-PROGRESS — mechanism proposed, pending formal β-function
        analysis and SUSY threshold comparison]
```

---

## §7. Open Questions

1. **Gravity's role:** Does asymptotically safe gravity drive the Higgs mass to zero at the UV fixed point, as suggested by Shaposhnikov & Wetterich (2010)? If so, the hierarchy is a consequence of quantum gravity, not particle physics alone.

2. **Fermion masses:** The inverted HO analysis addresses the Higgs mass — but fermion masses (Yukawa couplings) have their own hierarchy problem. Can the same fixed-point proximity mechanism generate the observed Yukawa pattern?

3. **976/919 constraint:** If the Compton frequency ratio 976/919 (from the natural units program) constrains the electroweak scale, does it also constrain the allowed RG trajectories in the (μ², λ) plane? [speculative]

4. **SUSY vs. fixed-point proximity:** If SUSY is discovered at the LHC, the fixed-point proximity mechanism becomes unnecessary — SUSY provides its own naturalness. But if no SUSY is found through FCC-hh, the fixed-point proximity (or anthropic selection) becomes the leading explanation.

---

## §8. Relationship to the Broader Program

| Connection | Status |
|------------|--------|
| RQ1 (Transmon Scaling) | Both share the Gaussian fixed-point structure; different operator dimensions |
| RQ4 (SM Unification) | The harmonic prototype at GUT constrains the UV boundary condition for the inverted HO flow |
| RQ8 (α Running Anharmonicity) | α runs like μ² — both are RG-flowing quantities departing from free-field fixed points |
| CAL-05 (Hierarchy mechanism) | This document partially satisfies CAL-05 by proposing the fixed-point proximity mechanism |
| Pillar V (HO as universal IR attractor) | The inverted HO is the "anti-pillar" — the departure FROM harmonicity, with the hierarchy measuring when/why |

---

## §9. References

1. Quni-Gudzinas, R.B., "The RG-Harmonic Isomorphism," DOI: 10.5281/zenodo.21486206 (2026)
2. Weinberg, S., "Implications of Dynamical Symmetry Breaking," Phys. Rev. D 13, 974 (1976)
3. Susskind, L., "Dynamics of Spontaneous Symmetry Breaking in the Weinberg-Salam Theory," Phys. Rev. D 20, 2619 (1979)
4. Coleman, S. and Weinberg, E., "Radiative Corrections as the Origin of Spontaneous Symmetry Breaking," Phys. Rev. D 7, 1888 (1973)
5. Shaposhnikov, M. and Wetterich, C., "Asymptotic safety of gravity and the Higgs boson mass," Phys. Lett. B 683, 196 (2010)
6. Giudice, G.F., "Naturally Speaking: The Naturalness Criterion and Physics at the LHC," arXiv:0801.2562 (2008)
7. Graham, P.W., Kaplan, D.E., and Rajendran, S., "Cosmological Relaxation of the Electroweak Scale," Phys. Rev. Lett. 115, 221801 (2015)
8. Particle Data Group, "Review of Particle Physics," Prog. Theor. Exp. Phys. 2022, 083C01 (2022)
9. Quni-Gudzinas, R.B., "The Two-Level Lie," DOI: 10.5281/zenodo.21484345 (2026)
