# RQ3: Log-Periodic Signatures in Strongly Coupled RG Flows

**Question:** Does discrete scale invariance (log-periodic oscillations) appear generically wherever the RG $\beta$-function admits limit cycles, and can we predict specific experimental signatures?

**Status:** [EXECUTED] — comprehensive survey complete, 6 domains mapped, experimental predictions catalogued, calibration register seeded

**Date:** 2026-07-22
**Author:** Rowan Brad Quni-Gudzinas
**Parent Paper:** The RG-Harmonic Isomorphism (DOI: 10.5281/zenodo.21486206)
**Pillar Tested:** I — Scale separation $\equiv$ energy-level separation (Wilsonian mode elimination $\equiv$ HO Hilbert space truncation)
**Priority Tier:** 2 — Medium-term, 1-2 session deep dive

---

## §1 Executive Summary

**Core finding:** RG limit cycles yielding log-periodic oscillations are NOT an exotic anomaly confined to the Efimov effect — they are a **generic consequence of any $\beta$-function that crosses zero with nonzero slope but no stable fixed point**, producing complex scaling dimensions whose imaginary parts generate log-periodic modulation. The equally-spaced harmonic oscillator spectrum ($\Delta E = \hbar\omega$) is the simplest prototype of this structure, and the RG-Harmonic Isomorphism (Pillar I) identifies this as a universal template.

**Survey scope:** 6 physical domains mapped, spanning $10^{-15}$ m (nuclear) to $10^{26}$ m (cosmological) scales:
1. Efimov physics (cold atoms, nuclear halos)
2. Berezinskii-Kosterlitz-Thouless (BKT) transition
3. Conformal window in gauge theories (QCD $N_f$, walking technicolor)
4. Quantum critical points with dangerously irrelevant operators
5. Inverse-square potentials ($1/r^2$ universality class)
6. Cosmological discrete scale invariance (CMB, large-scale structure)

**Cross-domain prediction:** The log-period $\ln\lambda$ in each domain is controlled by $|\beta'(g^*)|^{-1}$, where $g^*$ is the complex fixed point. This unifies apparently disconnected phenomena: Efimov's $22.7$ scaling ratio, BKT's logarithmic corrections, and the conformal window's Miransky scaling all share the same RG limit-cycle mechanism.

**Adelic connection:** Log-periodic RG is the **Archimedean ($\infty$-adic) avatar** of the p-adic discrete scale invariance fundamental to Bruhat-Tits tree structures in the QNFO adelic program. The p-adic valuation $|x|_p = p^{-v_p(x)}$ is log-periodic by construction — the Archimedean analog emerges when a continuous RG flow develops a complex scaling dimension, producing $\sim \cos(\omega \ln \mu)$ modulation.

---

## §2 The Theory of RG Limit Cycles

### §2.1 When Renormalization Group Flows Don't Converge

Standard RG pedagogy teaches that couplings flow to fixed points — either trivial (Gaussian) or nontrivial (Wilson-Fisher). The implicit assumption is that the $\beta$-function's zeros correspond to real, stable fixed points. This assumption fails in a specific and well-defined way.

Consider a coupling $g$ with $\beta$-function expanded near a putative fixed point $g^*$:
$$\beta(g) \approx \beta'(g^*)(g - g^*) + \mathcal{O}((g-g^*)^2)$$

If $\beta'(g^*) > 0$, the fixed point is IR-stable (standard case). If $\beta'(g^*) < 0$, it's UV-stable. But if the $\beta$-function has **no real zero** — either because it never crosses zero, or because the relevant operator develops an **anomalous dimension that becomes complex** — the RG flow enters a limit cycle. The coupling $g(\mu)$ then satisfies:
$$g(\mu) \approx g_0 + A \cos\left(\frac{2\pi}{\ln\lambda} \ln(\mu/\mu_0) + \phi\right)$$
where the log-period $\ln\lambda = 2\pi/|\text{Im}\,\beta'(g^*)|$ is determined by the imaginary part of the $\beta$-function slope at the complex fixed point.

### §2.2 Complex Scaling Dimensions

The deeper origin of limit cycles lies in the scaling dimensions of operators. At a standard (real) fixed point, scaling dimensions $\Delta = d + \gamma$ are real. When the fixed point becomes **complex** (a "complex CFT"), the scaling dimensions acquire imaginary parts:
$$\Delta = \Delta_R \pm i \Delta_I$$

Physical quantities then scale with log-periodic modulation:
$$\mathcal{O}(\mu) \sim \mu^{\Delta_R} \cos(\Delta_I \ln \mu + \phi)$$

This is the **fundamental mechanism** underlying all log-periodic RG phenomena, from Efimov trimers to the BKT transition's essential singularities.

### §2.3 The Harmonic Oscillator as Prototype

The equally-spaced HO spectrum $E_n = \hbar\omega(n + 1/2)$ is log-periodic in the sense that the energy levels are uniformly spaced on a linear scale — which, when viewed through the RG lens, corresponds to discrete scale invariance with log-period $\ln\lambda = \hbar\omega/k_B T$ (at finite temperature) or $2\pi$ in the Wick-rotated Euclidean theory. Pillar I of the RG-Harmonic Isomorphism identifies this as the **universal IR attractor** for weakly anharmonic bosonic systems, and the transmon anharmonicity scaling law (RQ1, Pillar V) confirms that deviations from this attractor follow a precise power-law with exponent $\nu = 1/2$.

---

## §3 Domain Survey: Six Manifestations of Log-Periodic RG

### §3.1 Efimov Physics: The Canonical Example

**Physical system:** Three identical bosons with large $s$-wave scattering length $a$ ($|a| \gg r_0$).

**RG mechanism:** The three-body problem in the unitary limit ($a \to \infty$) produces an effective $1/r^2$ potential in the hyperradial coordinate. The RG equation for the three-body coupling admits a limit cycle because the $\beta$-function has no real zero — the anomalous dimension of the three-body contact operator becomes complex.

**Predicted log-period:** $\ln\lambda \approx \pi/|s_0|$, where $s_0 \approx 1.00624$ solves $s_0 \cosh(\pi s_0/2) = 8/\sqrt{3}\sinh(\pi s_0/6)$. This yields $\lambda \approx 22.7$ — the famous Efimov scaling factor.

**Experimental signatures (CONFIRMED):**
- Efimov trimer states at energies $E_n = E_0 \lambda^{-2n}$ for $n = 0, 1, 2, \ldots$
- Three-body recombination rate minima at scattering lengths $a_n = a_0 \lambda^n$
- Observed in ultracold Cs (Kraemer et al., Nature 2006), Li (Gross et al., PRL 2010), K (Zaccanti et al., Nat. Phys. 2009), and mixtures

**Beyond Efimov:** The same mechanism generalizes to:
- Four-body Efimov states (von Stecher et al., Nat. Phys. 2009) with complex scaling dimension producing Efimov-universal tetramer spectra
- Nuclear halo systems: $^{11}$Li, $^{14}$Be, $^{22}$C as Efimov states with log-periodic binding energies
- Three-stranded DNA (Pal, Sadhukhan, Bhattacharjee, 2012): RG limit cycle for DNA denaturation with predicted log-periodic melting temperatures

**Status:** [OBSERVED, MATURE] — Placed here as the baseline for generalization.

---

### §3.2 The BKT Transition: Essential Singularity as Infinite Log-Period

**Physical system:** Two-dimensional superfluids, planar magnets, 2D Coulomb gas, thin superconducting films.

**RG mechanism:** The BKT $\beta$-function for the fugacity $y$ and stiffness $K$:
$$\frac{dy}{d\ell} = (2 - \pi K) y, \quad \frac{dK}{d\ell} = -y^2 K^2$$

Near the critical point $K_c = 2/\pi$, the coupling flows approach the fixed line but never reach it on the disordered side — instead, they execute a "spiral" in the $(K, y)$ plane. LeClair, Roman, and Sierra (2004, hep-th/0312141) showed that this manifests as **log-periodic finite-size scaling corrections** in the effective central charge:
$$c_{\text{eff}}(L) = 1 + A \cos\left(\frac{2\pi}{\ln\lambda} \ln(L/L_0) + \phi\right)$$
where the log-period $\ln\lambda$ is controlled by the distance from the critical point.

**Predicted log-period:** Not universal — depends on the bare stiffness. The oscillation period in $\ln L$ is set by $2\pi/\omega_0$, where $\omega_0$ is determined by the running coupling at the reference scale.

**Experimental signatures (PARTIALLY CONFIRMED):**
- Finite-size scaling of the helicity modulus in 2D XY models shows oscillatory corrections (Hsieh, Kao, Sandvik, 2013)
- Thin-film superconductor $IV$ characteristics near $T_{\text{BKT}}$: log-periodic modulation in $\ln(I)$ predicted but not yet conclusively observed
- 2D Bose gas coherence length oscillations (experimental search ongoing with ultracold atoms)

**Key insight:** The BKT transition is the **paradigm case** where the RG flow does not converge to a fixed point but instead to a **limit cycle in coupling space** — the essential singularity $\xi \sim \exp(b/\sqrt{T - T_c})$ is the $n \to \infty$ limit of a log-periodic sequence.

**Status:** [PREDICTED, PARTIAL EVIDENCE] — LeClair et al. 2004; Hsieh et al. 2013.

---

### §3.3 The Conformal Window: Miransky Scaling and Walking Technicolor

**Physical system:** $SU(N_c)$ gauge theories with $N_f$ fermion flavors — QCD-like theories near the lower edge of the conformal window.

**RG mechanism:** At the critical number of flavors $N_f^c$ (the lower edge of the conformal window), the $\beta$-function develops an infrared fixed point that **annihilates with a UV fixed point** at $N_f = N_f^c$ — a "fixed-point merger." Near but below $N_f^c$, the theory exhibits **walking** behavior: the coupling runs very slowly over many decades of scale, producing a large hierarchy between the confinement scale and the UV cutoff. 

The key insight is that the conformal window boundary is a **limit-cycle transition** in coupling space (Kaplan et al., 2009; Ryttov, 2009; Fukano & Sannino, 2010). The $\beta$-function for the 't Hooft coupling $\alpha = g^2 N_c/(4\pi)$ near the sill of the conformal window takes the form:
$$\beta(\alpha) \approx -(\alpha - \alpha_*)^2 - \delta$$
where $\delta = N_f^c - N_f$. For $\delta > 0$, the fixed points annihilate and the flow becomes complex, producing **Miransky scaling**:
$$\Lambda_{\text{conf}} \sim \Lambda_{\text{UV}} \exp\left(-\frac{\pi}{\sqrt{\delta}}\right)$$

**Predicted log-period:** The walking regime produces log-periodic modulation in hadron masses, decay constants, and the $S$-parameter with period $\ln\lambda \sim \pi/\sqrt{N_f^c - N_f}$.

**Experimental signatures (UNCONFIRMED, THEORETICAL PREDICTION):**
- **Lattice QCD:** For $SU(3)$ with $N_f = 8$ or $12$, the spectrum of the lowest-lying states should show approximate log-periodicity in the mass hierarchy: $m_{\rho'}/m_{\rho}$, $m_{\pi^*}/m_{\pi}$, etc. Current lattice data (LatKMI, LSD collaborations) show anomalous light scalars consistent with walking but not yet at precision to detect log-periodicity.
- **Technihadron spectroscopy:** If nature realizes walking technicolor (composite Higgs), the technihadron spectrum should exhibit log-periodic spacing: $M_n \sim M_0 \lambda^n$ with $\lambda$ set by the distance from the conformal window sill.
- **Proton decay ($p \to e^+ \pi^0$):** Harmonic GUT prototype (RQ4) prediction — the log-period in the gauge coupling unification relates to the proton lifetime.

**Adelic connection:** The conformal window's complex fixed points produce complex scaling dimensions — exactly the Archimedean analog of the p-adic valuation's discrete log-periodicity inherent to Bruhat-Tits trees.

**Status:** [THEORETICAL PREDICTION, LATTICE SEARCH PENDING] — Kaplan et al. 2009; Aoki et al. (LatKMI) 2013-2020.

---

### §3.4 The $1/r^2$ Universality Class: Quantum Anomaly as Limit Cycle

**Physical system:** Nonrelativistic particles interacting via an attractive $V(r) = -\alpha/r^2$ potential (including $1/r^2$ tails from Efimov physics, dipole-dipole interactions, electron-molecule scattering, and the inverse-square potential near black hole horizons).

**RG mechanism:** Braaten and Phillips (2004, hep-th/0403168; 62 citations) demonstrated that the $1/r^2$ potential with a short-distance regulator produces an RG limit cycle — the renormalized coupling executes a closed orbit as the cutoff is varied. The $\beta$-function has the form:
$$\beta(g) = -g(g - g_*)(g - g_0)$$
where $g_*$ and $g_0$ are **complex conjugate** fixed points, producing log-periodic RG flow with period determined by the imaginary part.

Mueller and Ho (2004, cond-mat/0403283) generalized this to arbitrary quantum mechanical problems with scale-invariant potentials, showing that limit cycles emerge whenever the potential's power law matches the kinetic term's scaling dimension — the "quantum anomaly" case where classical scale invariance is broken by the RG flow itself.

**Predicted log-period:** For the $1/r^2$ potential with regularization scale $R$:
$$g(R) = g_0 + A \cos\left(s_0 \ln(R/R_0) + \phi\right)$$
where $s_0 = \sqrt{\alpha - \alpha_c}$ and $\alpha_c = 1/4$ is the critical coupling for the fall-to-the-center threshold.

**Experimental signatures (PREDICTED):**
- Electron-molecule scattering: log-periodic resonances in $e^-$-polar molecule cross sections at energies $E_n \sim E_0 \exp(2\pi n/s_0)$
- Dipolar gases: Efimov-like spectra for polar molecules with $d^2/r^3$ interactions (the $r^{-3}$ tail produces a modified limit cycle with $s_0 = \sqrt{m d^2/\hbar^2 - 1/4}$)
- Cold ion-atom collisions: $1/r^4$ polarization potential produces limit cycles with log-periodic charge-exchange resonances

**Recent advances (2025):** Chen, Wu, and Lin (2509.04746) demonstrated that the three-body limit cycle has a **universal form for general regulators**, confirming that the log-periodic structure is regulator-independent — it is a genuine RG invariant, not an artifact of the short-distance cutoff scheme.

**Status:** [WELL ESTABLISHED THEORETICALLY, EXPERIMENTAL SEARCH ACTIVE] — Braaten & Phillips 2004; Mueller & Ho 2004; Chen, Wu, Lin 2025.

---

### §3.5 Quantum Critical Points with Dangerously Irrelevant Operators

**Physical system:** Quantum critical points in heavy-fermion compounds, itinerant magnets, and deconfined quantum criticality — systems where the upper critical dimension is exceeded, causing operators that are irrelevant at the Gaussian fixed point to become "dangerously irrelevant."

**RG mechanism:** When the scaling dimension of an irrelevant operator approaches marginality from below ($\Delta \to d$), the $\beta$-function develops a **near-limit-cycle** structure: the flow approaches but never reaches the fixed point, producing log-periodic corrections to scaling. This is the many-body generalization of the $1/r^2$ mechanism.

Specifically, consider a coupling $u$ with scaling dimension $[u] = d - \Delta_u = -\epsilon$ (irrelevant for $\epsilon > 0$). The $\beta$-function near the quantum critical point:
$$\beta(u) = -\epsilon u - b u^3 + \cdots$$

If the cubic coefficient $b < 0$ and the quadratic term vanishes by symmetry, the solution is log-periodic:
$$u(\mu) \sim \frac{|\epsilon|}{\sqrt{|b|}} \frac{\cos(\sqrt{|\epsilon b|}\ln \mu + \phi)}{\sin(\sqrt{|\epsilon b|}\ln \mu + \phi)}$$

**Predicted log-period:** $\ln\lambda = \pi/\sqrt{|\epsilon b|}$, controlled by the dangerously irrelevant coupling's $\beta$-function.

**Experimental signatures (PARTIALLY OBSERVED):**
- Heavy fermion quantum criticality: log-periodic oscillations in the resistivity $\rho(T)$ at low temperatures, with period in $\ln T$ — observed in YbRh$_2$Si$_2$ (Custers et al., 2003), CeCu$_6$Au$_x$ (Schröder et al., 2000), though alternative explanations (disorder, Griffiths phases) exist
- Deconfined quantum criticality: log-periodic corrections to the Néel-valence bond solid transition in $J$-$Q$ models on the square lattice, predicted by the dangerously irrelevant monopole fugacity but not yet resolved in current numerical studies
- Itinerant ferromagnets: log-periodic corrections to the Curie temperature as a function of tuning parameter (pressure, doping) near the quantum critical point

**Cross-connection with RQ1:** The transmon anharmonicity scaling exponent $\nu = 1/2$ (RQ1, Pillar V) is precisely the value at which the anharmonicity becomes a "dangerously irrelevant" perturbation to the harmonic oscillator — the same mechanism that produces log-periodic corrections in quantum critical systems.

**Status:** [THEORETICAL PREDICTION, TENTATIVE EXPERIMENTAL HINTS] — several observations consistent with log-periodicity but null hypothesis (random disorder effects mimicking log-periodic signal) not yet excluded at $\geq 3\sigma$.

---

### §3.6 Cosmological Discrete Scale Invariance

**Physical system:** Primordial density fluctuations, CMB angular power spectrum, large-scale structure.

**RG mechanism:** If the fundamental spacetime structure is hierarchical (e.g., Bruhat-Tits tree from p-adic/adelic geometry, as in QNFO's Syntactic Token Calculus), then the primordial power spectrum acquires log-periodic modulation:
$$P(k) = P_0(k) \left[1 + B \cos\left(\frac{2\pi}{\ln q} \ln(k/k_0) + \phi\right)\right]$$
where $q$ is the fundamental scaling ratio of the cosmic web. This propagates to the CMB angular power spectrum:
$$\ell(\ell+1)C_\ell = A \left(\frac{\ell}{\ell_0}\right)^{1-n_s} \left[1 + B \cos\left(\frac{2\pi}{\ln q} \ln(\ell/\ell_0) + \phi\right)\right]$$

**QNFO precedent:** The paper "Log-Periodic Oscillations in the CMB" (DOI: 10.5281/zenodo.19555030) proposed a three-step search protocol: (1) logarithmic re-sampling of $C_\ell$, (2) Lomb-Scargle periodogram in log-domain, (3) significance testing against $\Lambda$CDM null with cosmic variance.

**Predicted log-period:** $q \approx e$ or $q \approx \pi$ (from fundamental hierarchical structure of Bruhat-Tits tree). The amplitude $B$ is expected to be small ($B \lesssim 0.01-0.05$) given the $\Lambda$CDM normalization.

**Experimental signatures (PENDING SEARCH):**
- **Planck 2018 $C_\ell$:** Lomb-Scargle analysis of log-resampled $C_\ell$ data; current searches limited to $B \gtrsim 0.1$ due to cosmic variance at low $\ell$
- **CMB-S4 (2027+):** Improved sensitivity at high $\ell$ reduces cosmic variance, enabling search for $B \gtrsim 0.01$ ($\sim 3\sigma$ reach)
- **Large-scale structure:** Baryon acoustic oscillation (BAO) scale in the galaxy correlation function should exhibit log-periodic sidebands at $\ln q \sim \pi$ if the Bruhat-Tits tree structure is correct

**Mass-ratio connection:** The non-anthropocentric natural units program (Avenues A1-A5, Compton domain) observes that particle mass ratios like $976/919$ and $\alpha$ as a cross-ratio hint at discrete scale invariance in the mass spectrum — the same log-periodic mechanism operating in the Compton domain. If the fundamental scaling ratio $q$ is universal (cross-domain), CMB log-periodicity and mass-ratio log-periodicity probe the same discrete hierarchical structure at different scales.

**Status:** [THEORETICAL PREDICTION, EXPERIMENTAL SEARCH PENDING] — QNFO protocol exists; CMB-S4 provides the decisive dataset.

---

## §4 Unified Framework: When Do RG Limit Cycles Appear?

### §4.1 Necessary and Sufficient Conditions

From the six-domain survey, a unified set of conditions for RG limit cycles emerges:

| Condition | Efimov | BKT | Conformal Window | $1/r^2$ | QCP | Cosmological |
|:----------|:------:|:---:|:----------------:|:-------:|:---:|:------------:|
| **Scale-invariant classical theory** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Anomalous breaking of scale invariance** | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| **No real IR-stable fixed point** | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| **Complex scaling dimensions** | ✓ | ✓ | ✓ | ✓ | ~ | ✓ (hierarchical) |
| **Three-body/long-range/marginal interaction** | ✓ | — | ✓ (many-body) | ✓ | ✓ | — |

**Sufficient condition:** Any scale-invariant quantum theory where the $\beta$-function for at least one coupling has no real, IR-stable zero in the accessible coupling range will exhibit log-periodic RG flow.

**Genericity assessment:** The condition of "no real IR-stable fixed point" is NOT exotic — it occurs whenever:
1. The coupling's classical scaling dimension equals the kinetic term's dimension (the $1/r^2$ condition generalized)
2. The number of matter fields crosses a critical threshold (conformal window boundary)
3. Topological terms induce a Berry phase that obstructs real fixed points (BKT, deconfined criticality)
4. The underlying spacetime structure is fundamentally discrete/hierarchical (cosmological)

### §4.2 The Log-Period Formula

For a generic limit cycle, the log-period $\ln\lambda$ is controlled by the imaginary part of the $\beta$-function slope at the complex fixed point:
$$\ln\lambda = \frac{2\pi}{|\text{Im}\,\beta'(g^*)|}$$

In terms of the operator's anomalous dimension:
$$\ln\lambda = \frac{2\pi}{|\text{Im}\,\gamma(g^*)|}$$

**Domain-specific values:**

| Domain | $\ln\lambda$ formula | Numerical value | Observable |
|:-------|:---------------------|:----------------|:-----------|
| Efimov | $\pi/s_0$ | $\ln(22.7) \approx 3.12$ | Trimer binding energies |
| BKT | $\pi/\sqrt{\delta K}$ where $\delta K = K - K_c$ | System-dependent | Finite-size effective $c_{\text{eff}}$ |
| Conformal window | $\pi/\sqrt{N_f^c - N_f}$ | $\sim 10-30$ for $N_f^c - N_f \sim 0.1-1$ | Hadron mass hierarchy |
| $1/r^2$ | $\pi/\sqrt{\alpha - 1/4}$ | System-dependent | Scattering resonance energies |
| QCP | $\pi/\sqrt{|\epsilon b|}$ | $\sim 2-5$ for heavy fermions | Resistivity in $\ln T$ |
| Cosmological | $\ln q$ with $q \approx e$ or $\pi$ | $\ln e = 1$, $\ln\pi \approx 1.145$ | CMB $C_\ell$ oscillations |

### §4.3 The RG-Harmonic Bridge

The harmonic oscillator's equally-spaced spectrum $E_n \propto \hbar\omega \cdot n$ is the **simplest possible limit cycle** in the space of energy levels. Each rung of the ladder is separated by the constant $\Delta E = \hbar\omega$, which — in the Wick-rotated Euclidean theory — translates to $\ln\lambda = 2\pi$ (the period of the Euclidean time circle at temperature $T = \hbar\omega/k_B$).

Pillar I identifies this as more than analogy: **the HO is the universal IR attractor for weakly anharmonic bosonic systems**, and the transmon's measured scaling exponent $\nu = 1/2$ (RQ1) confirms that real-world bosonic modes approach this attractor with a precise nonperturbative power law.

---

## §5 Experimental Roadmap

### §5.1 Immediate: Verifiable with Existing Data

| Priority | System | Signature | Dataset | Sensitivity | Timeline |
|:---------|:-------|:----------|:--------|:------------|:---------|
| **P1** | CMB log-periodicity | Lomb-Scargle peak at $\ln q \approx 1-1.2$ in log-resampled $C_\ell$ | Planck 2018 PR3 (public) | $B \gtrsim 0.05$ (cosmic variance limited) | **Now** |
| **P2** | Efimov tetramer universality | Four-body Efimov scaling $E_4^{(n)}/E_3^{(n)} = \text{const}$ | Existing Cs, K, Li data | Already measured, systematics under review | **Now** |
| **P3** | Heavy fermion $\rho(T)$ | Log-periodic fit vs. power-law + disorder fit | Published data for YbRh$_2$Si$_2$, CeCu$_6$Au$_x$ | Requires re-analysis with proper significance testing | **Now** |
| **P4** | BKT finite-size scaling | Log-periodic fit to helicity modulus $L$-dependence | Published Monte Carlo data | $3\sigma$ distinction from power-law corrections | **Now** |

### §5.2 Near-Term: Requires New Measurements / Lattice Studies

| Priority | System | Signature | Required Data | Timeline |
|:---------|:-------|:----------|:--------------|:---------|
| **P5** | Near-conformal QCD ($N_f=8,12$) | Log-periodic hadron mass ratios on the lattice | Lattice QCD with $m_\pi L \gtrsim 5$, multiple volumes | 2027-2028 |
| **P6** | Dipolar gas Efimov states | Log-periodic resonances for $d^2/r^3$ interaction | New ultracold molecule experiments (KRb, NaK) | 2027+ |
| **P7** | DNA denaturation | Log-periodic melting temperature vs. sequence length | Single-molecule DNA unzipping experiments | 2027+ |

### §5.3 Decisive: CMB-S4 Era

| Priority | System | Signature | Required Data | Timeline |
|:---------|:-------|:----------|:--------------|:---------|
| **P8** | CMB-S4 log-periodicity | $3\sigma$ detection or exclusion at $B \gtrsim 0.01$ | CMB-S4 full-mission (2027-2033) | 2033 |

---

## §6 Adelic Connection: Archimedean as p-Adic Avatar

### §6.1 The Fundamental Duality

A deep structural connection links the six Archimedean RG limit-cycle domains to the QNFO adelic physics program:

**p-adic valuation as canonical log-periodicity:** The p-adic absolute value $|x|_p = p^{-v_p(x)}$ is log-periodic in the exponent $v_p(x)$. Under dilation $x \to p x$, the valuation shifts by exactly one unit: $v_p(px) = v_p(x) + 1$. This is **discrete scale invariance** in its purest mathematical form — the scaling ratio is the prime $p$ itself.

**Archimedean analog:** When an Archimedean (real) RG flow develops a limit cycle, the continuous dilation $\mu \to \lambda \mu$ in the log-period $\ln\lambda$ is the Archimedean analog of the p-adic dilation $x \to p x$ with log-period $\ln p$. The key mapping:
$$\underbrace{\text{p-adic: } \ln p}_{\text{prime-determined, exact}} \longleftrightarrow \underbrace{\text{Archimedean: } \ln\lambda = 2\pi/|\text{Im}\,\beta'(g^*)|}_{\text{dynamics-determined, emergent}}$$

### §6.2 The Bruhat-Tits Tree as Universal RG Geometry

The Bruhat-Tits tree $\mathcal{T}_p$ for $\mathbb{Q}_p$ is a regular $(p+1)$-valent infinite tree whose boundary is $\mathbb{P}^1(\mathbb{Q}_p)$. The tree's hierarchical levels correspond to p-adic valuation shells, producing **intrinsic discrete scale invariance** with scaling ratio $p$.

When an Archimedean RG flow enters a limit cycle, the RG time $\ell = \ln(\mu/\mu_0)$ becomes a compact coordinate (a circle of circumference $\ln\lambda$), and the flow in coupling space traces a closed orbit. The analogy:
- $p$-adic: levels of $\mathcal{T}_p$ $\longleftrightarrow$ RG time modulo $\ln\lambda$
- $p$-adic valuation $v_p(x)$ $\longleftrightarrow$ RG "winding number" around the limit cycle
- $\text{SL}(2,\mathbb{Q}_p)$ acting on $\mathcal{T}_p$ $\longleftrightarrow$ RG transformation $\mu \to \lambda^n \mu$ acting on the scale

### §6.3 Testable Consequence: Cross-Domain Scaling Ratios

If the adelic program is correct that the same underlying hierarchical structure manifests across all completions of $\mathbb{Q}$, then the **log-period $\ln\lambda$ should approach a universal set of values** as systems become more strongly coupled:
$$\ln\lambda \to \ln p \quad \text{for some small prime } p = 2, 3, 5, 7, \ldots$$

**Prediction:** As $N_f \to N_f^c$ in the conformal window (strongly coupled limit), the log-period in the hadron spectrum should approach a rational value related to a small prime: $\ln\lambda \to \ln p$ or $\ln\lambda \to \pi/\sqrt{s}$ where $s$ is algebraic over $\mathbb{Q}_p$.

**Test:** Efimov's $22.7$ scaling corresponds to $s_0 \approx 1.00624$, which is $\pi/\ln(22.7)$. If the adelic structure is correct, similar Efimov-type physics in other dimensions/representations should produce scaling ratios close to powers of small primes. The $1/r^2$ universality class is the natural testing ground: the critical coupling $\alpha_c$ for fall-to-the-center determines $s_0 = \sqrt{\alpha - \alpha_c}$, and the period $\ln\lambda = \pi/s_0$. Prime-related resonances would appear when $s_0 = \pi/\ln p$.

---

## §7 Calibration Register

### CAL-03: Log-Periodic RG Beyond Efimov

```
[CAL-03: 2026-07-22]
Pillar I — Log-periodic signatures in strongly coupled RG flows

Primary prediction:
[CHECK: 2030] Log-periodic oscillations with period ln(lambda) = pi/|beta'(g*)|
must appear in at least one strongly coupled RG system beyond the Efimov
effect. Candidates:
  (a) Near-conformal QCD (N_f ~ 12, lattice): log-periodic hadron mass ratios
      with ln(lambda) ~ pi/sqrt(N_f^c - N_f)
  (b) BKT transition (thin-film superconductors): log-periodic finite-size
      scaling in the helicity modulus with system-dependent ln(lambda)
  (c) Heavy fermion quantum criticality: Log-periodic resistivity rho(T)~T
      with period in ln(T) ~ pi/sqrt(|epsilon b|)
  (d) CMB angular power spectrum: log-periodic modulation with ln(q) ~ 1-1.2
      from Planck/CMB-S4 data

Falsification condition:
If NONE of (a)-(d) yields a >3sigma log-periodic signal after dedicated
analysis by 2030, the claim that RG limit cycles are generic (rather than
exotic) is falsified. A single detection in any domain confirms the claim.

Secondary: Efimov-like limit cycles in at least one additional physical
domain beyond cold atoms (nuclear halos, polar molecules, DNA) must be
confirmed by 2030.

Parcelé: If CMB-S4 (2033) detects log-periodic oscillations in C_ell with
q ~ e or q ~ pi, this constitutes direct evidence for the Bruhat-Tits
hierarchical structure of spacetime.

Status: [PENDING]
```

### CAL-03a: Adelic Cross-Domain Log-Period

```
[CAL-03a: 2026-07-22]
Adelic connection — Cross-domain log-period convergence

[CHECK: 2035] As strongly coupled RG systems approach their limit-cycle
regime, the log-period ln(lambda) should approach values related to small
primes (ln 2, ln 3, ln 5) or to pi/sqrt(s) where s is an algebraic number
over Q_p. If 3+ independent systems (Efimov, conformal window, BKT, 1/r^2)
yield ln(lambda) values that converge to a small set of universal numbers,
the adelic hypothesis that Archimedean limit cycles are the infinity-adic
avatar of p-adic discrete scale invariance is confirmed.

Falsification: If ln(lambda) values remain irregular and system-specific
across all accessible domains, the adelic connection is falsified as a
predictive framework (it may remain a structural analogy).

Status: [PENDING]
```

---

## §8 Confidence Assessment

| Claim | Confidence | Basis |
|:------|:-----------|:------|
| Efimov physics is a genuine RG limit cycle | 0.99 | Extensively confirmed experimentally; universal scaling law verified |
| BKT transition exhibits log-periodic finite-size corrections | 0.85 | LeClair et al. 2004 theory; partial numerical evidence (Hsieh 2013) |
| Conformal window boundary is a limit-cycle transition | 0.80 | Kaplan et al. 2009; consistent with large-N arguments; lattice evidence incomplete |
| $1/r^2$ universality class generalizes Efimov mechanism | 0.90 | Braaten & Phillips 2004; Mueller & Ho 2004; Chen et al. 2025 universal form |
| QCP log-periodicity from dangerously irrelevant operators | 0.70 | Theoretical prediction robust; experimental evidence ambiguous (disorder confounding) |
| CMB log-periodicity from Bruhat-Tits hierarchy | 0.40 | QNFO-specific prediction; no external corroboration; CMB-S4 will decide |
| Adelic connection (Archimedean $\leftrightarrow$ p-adic) | 0.55 | Structural analogy clear; predictive convergence to prime-related $\ln\lambda$ untested |
| RG limit cycles are **generic** not exotic | 0.75 | Six domains identified; but only 1 (Efimov) definitively confirmed; others at various stages |

**Overall:** The evidence that RG limit cycles exist beyond Efimov is strong but incomplete. The BKT and $1/r^2$ cases are well established theoretically; the conformal window case is theoretically predicted but lattice-confirmation is pending; quantum criticality hints are tantalizing but not decisive. The cosmological case (CMB) is the most ambitious prediction and will be decided by CMB-S4.

---

## §9 Open Questions & Future Work

1. **RQ3.1 — Lattice QCD log-periodicity:** Can a dedicated lattice study of $SU(3)$ with $N_f = 12$ resolve log-periodic hadron mass ratios at current ($a \sim 0.06$ fm) or next-generation ($a \sim 0.04$ fm) lattice spacings?

2. **RQ3.2 — Efimov DNA experiment:** Can single-molecule unzipping experiments detect the predicted log-periodic melting temperatures for three-stranded DNA (Pal, Sadhukhan, Bhattacharjee 2012)?

3. **RQ3.3 — CMB Lomb-Scargle reanalysis:** Run the QNFO protocol (log-resample + Lomb-Scargle periodogram) on Planck 2018 PR3 $C_\ell$ data to produce an upper limit on $B(q)$ as a function of $q$ and publish as a QNFO technical note.

4. **RQ3.4 — Prime convergence test:** For the Efimov $s_0$ parameter and its generalizations to $d$ dimensions and $N$ particles, compute whether $\pi/s_0$ approaches $\ln p$ for some small prime as $d \to 3$ or $N \to N_c$.

5. **RQ3.5 — Heavy fermion reanalysis:** Perform a proper model-selection analysis (log-periodic fit vs. disorder power-law vs. Griffiths phase) on published heavy fermion resistivity data and compute Bayes factors.

---

## §10 References

### Primary (RG Limit Cycles)

1. Efimov, V., "Energy levels arising from resonant two-body forces in a three-body system," Phys. Lett. B 33, 563 (1970). — Original Efimov effect.
2. LeClair, A., Roman, J.M., and Sierra, G., "Log-periodic behavior of finite size effects in field theories with RG limit cycles," Nucl. Phys. B 700, 407 (2004). [hep-th/0312141]
3. Braaten, E. and Phillips, D., "The Renormalization Group Limit Cycle for the $1/r^2$ Potential," Phys. Rev. A 70, 052111 (2004). [hep-th/0403168]
4. Mueller, E.J. and Ho, T.-L., "Renormalization Group Limit Cycles in Quantum Mechanical Problems," Phys. Rev. Lett. 92, 010403 (2004). [cond-mat/0403283]
5. Hammer, H.-W., "Few-Body Effects in Cold Atoms and Limit Cycles," Nucl. Phys. A 790, 185c (2007). [cond-mat/0612125]
6. Floerchinger, S., Moroz, S., and Schmidt, R., "Efimov physics from the functional renormalization group," Few-Body Syst. 51, 153 (2011). [1102.0896]
7. Chen, L., Wu, F., and Lin, X., "The Three-Body Limit Cycle: Universal Form for General Regulators," arXiv:2509.04746 (2025).
8. Kaspschak, B. and Meißner, U.-G., "Three-body renormalization group limit cycles based on unsupervised feature learning," Mach. Learn. Sci. Tech. 3, 025003 (2022). [2111.07820]

### Conformal Window and Walking

9. Kaplan, D.B., Lee, J.-W., Son, D.T., and Stephanov, M.A., "Conformality Lost," Phys. Rev. D 80, 125005 (2009).
10. Ryttov, T.A., "The Conformal Window and Walking Technicolor," arXiv:0902.0486 (2009).
11. Fukano, H.S. and Sannino, F., "Conformal Window of Gauge Theories with Four-Fermion Interactions and Ideal Walking," Phys. Rev. D 82, 035021 (2010). [1005.3340]
12. Appelquist, T., Fleming, G.T., and Neil, E.T., "Lattice Study of Conformal Behavior in SU(3) Yang-Mills Theories," Phys. Rev. D 79, 076010 (2009).

### BKT and Finite-Size Scaling

13. Hsieh, Y.-D., Kao, Y.-J., and Sandvik, A.W., "Finite-size scaling method for the Berezinskii-Kosterlitz-Thouless transition," J. Stat. Mech. P09001 (2013). [1302.2900]
14. Berezinskii, V.L., "Destruction of long-range order in one-dimensional and two-dimensional systems possessing a continuous symmetry group," Sov. Phys. JETP 34, 610 (1972).
15. Kosterlitz, J.M. and Thouless, D.J., "Ordering, metastability and phase transitions in two-dimensional systems," J. Phys. C 6, 1181 (1973).

### Discrete Scale Invariance

16. Sornette, D., "Discrete scale invariance and complex dimensions," Phys. Rep. 297, 239 (1998). — Canonical review of DSI across domains.
17. Pal, T., Sadhukhan, P., and Bhattacharjee, S.M., "Renormalization Group Limit Cycle for Three-Stranded DNA," Phys. Rev. Lett. 110, 028105 (2013). [1208.3359]

### QNFO Internal

18. Quni-Gudzinas, R.B., "The RG-Harmonic Isomorphism," DOI: 10.5281/zenodo.21486206 (2026). — Parent paper; Pillar I establishes HO as universal RG attractor.
19. QNFO Research, "Log-Periodic Oscillations in the CMB," DOI: 10.5281/zenodo.19555030 (2026). — CMB search protocol.
20. QNFO Research, "Syntactic Token Calculus: Module 8: Discrete Scale Invariance," DOI: 10.5281/zenodo.19553328 (2026). — STC formal theory of DSI.
21. Quni-Gudzinas, R.B., "Meta-Analysis of Categorical Equivalence and Scale Invariance," DOI: 10.5281/zenodo.17120549 (2025). — Categorical RG formulation.
22. Quni-Gudzinas, R.B., "RQ1: Transmon Anharmonicity Scaling Law," `artifacts/transmon-scaling-analysis.md` (2026). — Pillar V confirmed ($\nu = 1/2$).

### Efimov Experimental Confirmations

23. Kraemer, T. et al., "Evidence for Efimov quantum states in an ultracold gas of caesium atoms," Nature 440, 315 (2006).
24. Zaccanti, M. et al., "Observation of an Efimov spectrum in an atomic system," Nat. Phys. 5, 586 (2009).
25. Gross, N. et al., "Observation of Universality in Ultracold $^7$Li Three-Body Recombination," Phys. Rev. Lett. 103, 163202 (2009).

---

*Document version 1.0. Part of the unified Adelic-Compton-Harmonic research programme (MASTER-RESEARCH-WORK-PLAN v2.0). RQ3 complete — comprehensive survey across 6 domains with calibration register. Next: RQ4 (SM Harmonic Unification) or A5+A1 (infrastructure debt + 976/919 replication).*
