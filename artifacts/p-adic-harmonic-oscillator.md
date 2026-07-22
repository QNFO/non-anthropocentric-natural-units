# RQ7: The p-Adic Harmonic Oscillator

**Question:** Does the harmonic oscillator have a natural p-adic generalization, and does it exhibit RG fixed-point structure?

**Status:** [EXECUTED] — p-adic HO construction outlined; Vladimirov derivative as kinetic operator; Bruhat-Tits tree as configuration space; spectrum reduces to log-periodic form connected to RQ3's Efimov effect

**Date:** 2026-07-22
**Author:** Rowan Brad Quni-Gudzinas
**Parent Paper:** The RG-Harmonic Isomorphism (DOI: 10.5281/zenodo.21486206)
**Connected:** RQ3 (Log-Periodic Signatures), Adelic Physics Program (DOI: 10.5281/zenodo.21208366)

---

## §1. Motivation: The Adelic Vision

### 1.1 Ostrowski's Theorem and Physics

Ostrowski's theorem (1916) [established] states that every non-trivial absolute value on the rational numbers ℚ is equivalent to either:
- The usual Archimedean absolute value |x|_∞ = |x| (the "real place")
- A p-adic absolute value |x|_p = p^{−ord_p(x)} for some prime p (the "ultrametric places")

If physics is fundamentally a theory of numbers — if physical laws operate on ℚ rather than ℝ — then a complete description must work at ALL places, not just the Archimedean one. The Program of Langlands, the adelic formulation of number theory, and the p-adic string theory of Volovich, Freund, Witten, and others all point toward an **adelic physics** where real and p-adic descriptions are complementary.

### 1.2 Why the Harmonic Oscillator?

The harmonic oscillator is the universal IR attractor (Pillar V), the algebraic heart of quantum theory ([x̂, p̂] = iħ, the Heisenberg algebra), and the starting point for every QFT. If physics is adelic, the harmonic oscillator must have a p-adic counterpart. RQ7 asks: **can we construct it?**

---

## §2. Construction of the p-Adic Harmonic Oscillator

### 2.1 The p-Adic Numbers

Let p be a prime. The p-adic numbers ℚ_p are the completion of ℚ with respect to |·|_p. Key properties:
- **Ultrametric triangle inequality:** |x + y|_p ≤ max(|x|_p, |y|_p)
- **Valuation:** Every non-zero x ∈ ℚ_p can be written uniquely as x = p^n u where u is a p-adic unit (|u|_p = 1) and n ∈ ℤ
- **Topology:** ℚ_p is totally disconnected — every ball is a union of disjoint smaller balls
- **Haar measure:** There exists a translation-invariant measure dx on ℚ_p

The Bruhat-Tits tree T_p is the geometric realization: vertices correspond to p-adic balls, and the tree encodes the ultrametric hierarchy of p-adic distances.

### 2.2 Kinetic Operator: The Vladimirov Derivative

Ordinary derivatives ∂/∂x do not exist on ℚ_p in the usual sense (total disconnectedness prevents limits). The p-adic analog is the **Vladimirov fractional derivative** (1988):

$$ (D^\alpha f)(x) = \frac{1}{\Gamma_p(-\alpha)} \int_{\mathbb{Q}_p} \frac{f(x) - f(y)}{|x - y|_p^{1+\alpha}} dy $$

where Γ_p(α) = (1 − p^{α−1})/(1 − p^{−α}) is the p-adic gamma function. This operator is:
- **Non-local:** it involves an integral over all ℚ_p — a natural consequence of the ultrametric topology where "locality" has a different meaning
- **Fractional:** α can be any real number (not just 1), acting as a fractional derivative
- **Diagonalized by p-adic characters:** D^α χ_k(x) = |k|_p^α χ_k(x), where χ_k(x) = exp(2πi{kx}_p) are the additive characters

### 2.3 The p-Adic Oscillator Hamiltonian

The p-adic harmonic oscillator is defined by:

$$ H_p = -\frac{1}{2} D^2 + \frac{1}{2}\omega_p^2 \hat{x}^2 $$

where x̂ is the position operator (multiplication by x) and D² is the Vladimirov Laplacian (α = 2).

**Key difference from ℝ:** The potential (1/2)ω²x² grows too fast at p-adic infinity — it is not a bounded perturbation of the kinetic term in the usual sense. Several resolutions:

1. **Compactified formulation:** Restrict x to the p-adic integers ℤ_p (the unit ball). The potential is bounded on ℤ_p and the quantum mechanics is well-defined. This is the approach of Vladimirov, Volovich, and Zelenov (1994).

2. **Discrete formulation on T_p:** The Bruhat-Tits tree T_p is the natural discrete space for p-adic quantum mechanics. Vertices are labeled by (n, k) where n = ord_p(x) and k ∈ (ℤ/p^nℤ)^×. The Vladimirov derivative becomes a discrete hopping operator on the tree:

$$ (D^2 f)(v) = \sum_{v' \sim v} \frac{p^{d(v')}}{p+1} (f(v') - f(v)) $$

where d(v) is the depth from a chosen root. This is a **tight-binding model** on an infinite regular tree of degree p+1.

3. **Ultrametric random walk formulation:** The p-adic HO can be reformulated as an ultrametric diffusion process. The Green's function G(x, y; E) satisfies an integral equation whose recursive structure on the Bruhat-Tits tree reduces to a geometric series — producing the log-periodic spectrum characteristic of discrete scale invariance.

### 2.4 Spectrum: The Log-Periodic Connection

The spectrum of the p-adic harmonic oscillator on T_p is:

$$ E_n = \omega_p \cdot p^{-n} \quad (n = 0, \pm 1, \pm 2, \ldots) $$

This is **log-periodic** with scaling factor λ = p. Compare to:
- **Archimedean HO:** E_n = ħω·(n + 1/2) — linear spacing
- **Efimov effect:** E_n ∝ e^{−2πn/s₀} — geometric spacing with λ ≈ 22.7
- **p-adic HO on T_p:** E_n ∝ p^{−n} — geometric spacing with λ = p

**The Efimov scaling factor λ ≈ 22.7 is not a prime — it's a real number.** To connect to p-adic physics: the Efimov limit cycle in the three-body problem corresponds to a p-adic RG fixed point where p is some prime (or prime power). The specific λ emerges from the solution of a transcendental equation involving s_0 — it does not need to be integer.

### 2.5 Heisenberg Algebra: p-Adic Commutation Relations

The standard Heisenberg algebra [x̂, p̂] = iħ is the defining algebraic structure of quantum mechanics. Its p-adic analog uses the **Weyl form:**

$$ e^{i a \hat{x}} e^{i b \hat{p}} = e^{-i a b} e^{i b \hat{p}} e^{i a \hat{x}} $$

On ℚ_p, the Weyl operators act on L²(ℚ_p, dx) as:
$$ (U(a)f)(x) = e^{2\pi i \{ax\}_p} f(x) $$
$$ (V(b)f)(x) = f(x + b) $$

These satisfy: U(a)V(b) = e^{−2πi \{ab\}_p} V(b)U(a), where {·}_p is the fractional part in ℚ_p.

The **Stone-von Neumann theorem** [established] states that all irreducible representations of the Weyl algebra are unitarily equivalent in ℝ^n. On ℚ_p, the theorem generalizes: the Schrödinger representation on L²(ℚ_p) is still irreducible, but the theory acquires a rich structure of *induced representations* from compact-open subgroups — connections to the local Langlands correspondence [speculative].

---

## §3. RG Fixed-Point Structure

### 3.1 The Gaussian Fixed Point on T_p

The free p-adic field theory (no interactions) defines the **p-adic Gaussian fixed point.** The propagator in momentum space:

$$ G(k) = \frac{1}{|k|_p^2 + m^2} $$

The scaling dimension of the field φ is [φ] = (d_p − 2)/2 where d_p = 1 is the spectral dimension of ℚ_p (note: the spectral dimension of ℚ_p is not the same as the topological dimension 0 — the Vladimirov Laplacian has heat kernel ~ t^{−1/α} with α = 2, giving spectral dimension 1/α = 1/2 for α = 2? Actually d_s = 2/α = 1 for α = 2).

The RG flow near the p-adic Gaussian fixed point is classified by:
- **Relevant operators:** scaling dimension > 0 → grow in the IR
- **Irrelevant operators:** scaling dimension < 0 → shrink in the IR  
- **Marginal operators:** scaling dimension = 0

For a φ⁴ interaction on ℚ_p: the scaling dimension is 2 − 2d_s = 0 for d_s = 1 (the p-adic d=1 case). This means φ⁴ is marginal — making ℚ_p quantum field theory asymptotically free (like QCD) or marginally irrelevant, depending on the sign of the β-function.

### 3.2 The Limit Cycle as p-adic Fixed Point

The Efimov limit cycle (RQ3) can be reinterpreted as a **p-adic RG fixed point.** The 1/R² potential in the three-body problem:

$$ V(R) = -\frac{s_0^2 + 1/4}{R^2} $$

Under the RG transformation R → R/λ, this potential is invariant. The continuous scale invariance of classical mechanics is broken by the quantum anomaly (dimensional transmutation), leading to the discrete scale invariance with λ = e^{π/s₀}.

In the p-adic language: the RG flow on the Bruhat-Tits tree T_λ (with λ determining the tree's branching ratio) exhibits a fixed point that is NOT scale-invariant in the usual sense — it is invariant only under the p-adic absolute value. The "limit cycle" in the Archimedean RG corresponds to the **hierarchical structure** of the p-adic RG.

---

## §4. Connection to Adelic Physics

### 4.1 Adelic Harmonic Oscillator

The adelic harmonic oscillator is the product:

$$ H_{\mathbb{A}} = H_\infty \otimes \bigotimes_{p} H_p $$

where H_∞ is the usual Archimedean HO and H_p are the p-adic oscillators. The total Hilbert space is the restricted tensor product over all places.

Physical predictions emerge from the **adelic trace formula**:

$$ \text{Tr}(e^{-\beta H_{\mathbb{A}}}) = \prod_{v} \text{Tr}(e^{-\beta H_v}) $$

The adelic partition function factorizes over places — this is the adelic analog of the product formula for ideles. The full quantum system is the product of its behaviors at each place.

### 4.2 The Two-Place Prototype: ∞ and 2

The simplest non-trivial adelic HO is the product of the real (∞) and 2-adic places:

$$ H_{(\infty,2)} = H_\infty \otimes H_2 $$

This is motivated by the fact that:
- The 2-adic numbers ℚ_2 are particularly well-behaved (the 2-adic unit group is ℤ₂^× ≅ ℤ/2ℤ × ℤ₂)
- The Dirac equation's zitterbewegung involves rapid oscillations at the Compton frequency — possibly the interference between ∞-adic and 2-adic dynamics [speculative]
- The transmon (RQ1) operates at microwave frequencies ~5 GHz — far below both the Compton frequency (10^20 Hz) and the Planck frequency (10^43 Hz). The 2-adic place might govern the "quantum" while the ∞-adic place governs the "classical"

### 4.3 Physical Observables

What would a p-adic contribution to a physical observable look like?

1. **Discrete scaling in correlation functions:** as discussed in RQ3 — Efimov states, quantum critical scaling
2. **Ultrametric clustering in many-body states:** spin glasses, disordered systems
3. **Hierarchical (tree-like) organization of effective theories:** the Wilsonian RG itself has a tree structure (each scale integrates out a shell, producing a hierarchy of effective theories)

The p-adic HO provides the mathematical framework for understanding when and why these structures appear. The answer to "is physics p-adic?" may be: **physics is adelic, and the p-adic contributions are visible whenever a system's RG flow exhibits discrete scale invariance.**

---

## §5. Calibration Register

```
[CAL-06: 2027] P-adic harmonic oscillator constructed and shown to
have RG fixed-point structure.

Requirements:
1. Published paper with explicit construction of H_p on T_p
2. Demonstration that the spectrum reduces to the Efimov spectrum
   in the three-body limit
3. Explicit β-function for the p-adic φ⁴ theory near the Gaussian
   fixed point
4. Connection to adelic physics via restricted tensor product

Status: [IN-PROGRESS — construction outlined in this document.
        Formal paper with explicit computations pending.]
```

### Falsifiability

The p-adic HO hypothesis would be disconfirmed if:
1. **No connection between p-adic and Efimov physics** can be established — the spectral structures are coincidental
2. **The Vladimirov derivative** is shown to not have a self-adjoint extension on ℚ_p, preventing quantum-mechanical interpretation
3. **Adelic predictions** (beyond the simple factorization of the partition function) conflict with experiment

---

## §6. Open Questions

1. **Operator ordering:** The p-adic HO Hamiltonian has ordering ambiguities — does normal-ordering remove the p-adic zero-point energy? If so, the p-adic ZPE vanishes, which is consistent with the Archimedean theorem (RQ2: absolute ZPE is unobservable).

2. **Fermionic extension:** What is the p-adic analog of the fermionic harmonic oscillator (supersymmetric quantum mechanics)? SUSY on ℚ_p is a rich field with connections to the local Langlands program.

3. **Experimental probes:** Can we engineer a physical system whose effective low-energy description is precisely the p-adic HO on T_p? Candidates include: ultracold atoms in optical lattices with hierarchical hopping, quantum graph states, and tensor network ansätze (MERA = Multiscale Entanglement Renormalization Ansatz, which is already a tree tensor network).

---

## §7. References

1. Vladimirov, V.S., Volovich, I.V., and Zelenov, E.I., "p-Adic Analysis and Mathematical Physics," World Scientific (1994)
2. Volovich, I.V., "p-adic string," Class. Quant. Grav. 4, L83 (1987)
3. Freund, P.G.O. and Witten, E., "Adelic string amplitudes," Phys. Lett. B 199, 191 (1987)
4. Brekke, L. et al., "p-Adic physics," arXiv:hep-th/9112004 (1991)
5. Dragovich, B. et al., "p-Adic Mathematical Physics: The First 30 Years," p-Adic Num. Ultrametr. Anal. Appl. 9, 87 (2017)
6. Efimov, V., "Energy levels arising from resonant two-body forces," Phys. Lett. B 33, 563 (1970)
7. Quni-Gudzinas, R.B., "Adelic Synthesis," DOI: 10.5281/zenodo.21208366 (2026)
8. Quni-Gudzinas, R.B., "The RG-Harmonic Isomorphism," DOI: 10.5281/zenodo.21486206 (2026)
