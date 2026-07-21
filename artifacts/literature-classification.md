# Literature Classification Report: Non-Anthropocentric Natural Units

**Phase:** 2 — Literature Search & Triage
**Date:** 2026-07-21
**Sources:** arXiv API (5 clusters, 40 papers), QNFO Vectorize (10 papers), QNFO KG

---

## Classification Matrix

### CORE (5 papers) — Directly addresses research question

| # | Title | Authors | Source | Year | Key Relevance |
|---|-------|---------|--------|------|---------------|
| C1 | Black hole entropy and the Bekenstein bound | Raphael Bousso | arXiv:1810.01880 | 2018 | Authoritative perspective on Bekenstein's legacy and the entropy bound. Bousso is the leading figure in holographic entropy bounds. |
| C2 | The Bekenstein Bound | Don N. Page | arXiv:1804.10623 | 2018 | Systematic treatment of the Bekenstein bound, including its limitations and counterexamples. Page is a foundational figure. |
| C3 | p-Adic and Adelic Quantum Mechanics | Branko Dragovich | arXiv:hep-th/0312046 | 2003 | Foundational paper on non-Archimedean approach to spacetime at Planck scale. Introduces adelic quantum mechanics. **THE key external paper for this project.** |
| C4 | On Measurements, Numbers and p-Adic Mathematical Physics | Branko Dragovich | arXiv:1206.3106 | 2012 | Directly addresses the philosophical question: "p-Adic numbers are not results of measurement." Discusses the relationship between measurement and number systems. **Crucially relevant to the non-anthropocentric measurement question.** |
| C5 | Ultrametric Physics Research Plan | QNFO | QNFO Internal | 2026 | Ratio-based valuations, base-invariant formulations, Bruhat-Tits trees. Direct internal ancestor. |

### SUPPORTING (8 papers) — Adjacent work, citations, related methods

| # | Title | Authors | Source | Year | Key Relevance |
|---|-------|---------|--------|------|---------------|
| S1 | Entropy from Carnot to Bekenstein | Ted Jacobson | arXiv:1810.07839 | 2018 | Historical development of entropy concept from thermodynamics to black holes. |
| S2 | Bekenstein, I, and the quantum of black-hole surface area | Shahar Hod | arXiv:1805.03660 | 2018 | Quantum of area and Bekenstein's contributions. |
| S3 | p-Adic Mathematical Physics: The First 30 Years | Dragovich, Khrennikov | arXiv:1705.04758 | 2017 | Comprehensive review of p-adic physics — excellent source for additional references. |
| S4 | Where Does Black Hole Entropy Lie? | Sho Tanaka | arXiv:1304.6581 | 2013 | Area-entropy law, holographic principle, and noncommutative spacetime. |
| S5 | Corrections to Bekenstein-Hawking entropy | Shankaranarayanan | arXiv:1101.0030 | 2010 | Robustness of BH entropy predictions under quantum corrections. |
| S6 | Conditional State Distances in PW Clocks | QNFO | QNFO Internal | 2026 | Ultrametricity emergence in quantum clock systems. Bridges PW formalism to p-adic geometry. |
| S7 | Bruhat-Tits Readout Protocol | QNFO | QNFO Internal | 2026 | Experimental protocols for p-adic observables. |
| S8 | Informational Universe (Correlated Universe 1.0) | QNFO | QNFO Internal | 2026 | Empirical anchor: Bekenstein-Hawking as foundation of informational-universe framework. |

### BACKGROUND (6 papers) — Context, related domains

| # | Title | Authors | Source | Year | Key Relevance |
|---|-------|---------|--------|------|---------------|
| B1 | Bekenstein Bound and Cosmological Parameters | Haranas, Gkigkitzis | arXiv:1406.3040 | 2014 | Bekenstein bound applied to cosmology. |
| B2 | The quantum of area ΔA = 8πl²_P | Kostiantyn Ropotenko | arXiv:0911.5635 | 2009 | Statistical interpretation of black hole entropy, area quantization. |
| B3 | Black hole entropy: classical and quantum aspects | Parthasarathi Majumdar | arXiv:hep-th/0110198 | 2001 | Elementary introduction to BH entropy (pedagogical). |
| B4 | Physics of Computation | QNFO | QNFO Internal | 2026 | Landauer, Bremermann, Margolus-Levitin bounds — shared information-theoretic framing. |
| B5 | Homotopy Type Theory: Univalent Foundations | UF Program | arXiv:1308.0729 | 2013 | Alternative foundations of mathematics — relevant to "what is a number?" question. |
| B6 | Extending valuations to formal completions | Govantes, Acosta | arXiv:1211.0398 | 2012 | Valuation theory extension (mathematical foundation). |

### REJECT (21 papers) — Irrelevant, noise, or duplicate

Classified as REJECT: Planck satellite data papers (7), supergravity/BPS states, collider physics (3), p-adic Potts model (stat mech), p-adic DNA, protein linguistics, data-to-ultrametric (data science), ultrametric embeddings, valuation Hilbert modules, cosmic ray acceleration (author name Ostrowski, not theorem).

---

## Reading Protocol Summary

### Core Papers — Deep Read Required

**C3 (Dragovich 2003)** and **C4 (Dragovich 2012)** are the most critical external papers. They:
- Introduce p-adic and adelic quantum mechanics
- Discuss the relationship between measurement and number systems
- Argue that p-adic numbers arise at the Planck scale naturally
- Address the philosophical question of what constitutes a "measurement"

**C1 (Bousso 2018)** and **C2 (Page 2018)** provide the authoritative modern perspective on the Bekenstein bound, including its precise formulation, limitations, and relationship to holography.

**C5 (Ultrametric Physics Plan)** is the internal companion — this paper should explicitly position itself as the foundational/philosophical counterpart.

### Key Claims to Extract
1. Dragovich's argument about measurement and p-adic numbers (C4)
2. Bousso's formulation of the covariant entropy bound (C1)
3. Page's analysis of bound counterexamples (C2)
4. The adelic quantum mechanics framework (C3)

---

## Search Source Coverage

| Source | Papers Found | Core | Supporting | Background | Reject |
|--------|-------------|------|------------|------------|--------|
| arXiv API | 40 | 4 | 5 | 4 | 27 |
| QNFO Vectorize | 10 | 1 | 3 | 1 | 5 |
| QNFO KG | — | — | — | — | — |
| **Total (unique)** | **50** | **5** | **8** | **6** | **31** |

---

## Next Steps

1. Extract citations from all Core + Supporting papers into `refs.bib`
2. Verify BibTeX entries, auto-generate missing DOIs
3. Deep-read Core papers, extract key claims for paper drafting
4. Position paper as foundational companion to Ultrametric Physics Research Plan
