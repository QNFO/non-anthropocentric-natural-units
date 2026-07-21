# PROJECT-PLAN: Non-Anthropocentric Natural Units Interpretation

**Project Slug:** `non-anthropocentric-natural-units`
**Status:** Active — Phase 0 (Initialization)
**Author:** Rowan Brad Quni
**Created:** 2026-07-21
**License:** QNFO Unified License Agreement (QNFO-ULA)

---

## §1 Charter

### 1.1 Motivation

The Bekenstein-Hawking entropy bound — S ≤ A/4ℓ²_P — is typically expressed in human-chosen units (Planck length, Boltzmann constant, base-2 "bits"). This project asks: what remains of the bound when ALL anthropocentric constructions are stripped away — units, logarithmic bases, the Archimedean continuum, even the choice of real numbers over p-adic completions? What is a "universal invariant" in physics when stripped to its mathematical minimum?

### 1.2 Core Claim (Locked)

> The maximum number of mutually orthogonal quantum states accessible within a finite spacetime region is a universal integer invariant N_max bounded by the natural exponential of one quarter of the region's dimensionless boundary area A. The exponential function exp(A/4) can be defined without reference to any logarithmic base — as the limit of a sequence of rationals, or via its power series — making the bound base-independent. However, the assumption of Archimedean linearity (the real numbers) is itself a choice: Ostrowski's theorem reveals that the rational numbers admit infinitely many inequivalent completions (R and Q_p for every prime p). A truly non-anthropocentric formulation may require an adelic/place-democratic treatment in which physical quantities are defined simultaneously at all completions.

**Original formulation (from source note):** "INTERPRET THIS IN NON-ANTHROPOCENTRIC NATURAL UNITS: HOW TO DEFINE 'AREA' OR EVEN 'BIT' AS UNIVERSAL INVARIANTS WITHOUT SLIPPING INTO HUMAN-CREATED CONSTRUCTS AND NUMBER THEORY?"

**Falsifiability condition:** The adelic extension of this claim would be disconfirmed if no p-adic or ultrametric signature appears in physical observables at the Planck scale, or if the product formula ∏_v N_v = 1 (idelic norm = 1) produces predictions inconsistent with known black hole thermodynamics.

### 1.3 Scope

This project investigates, from first principles:
1. **Natural Units:** What are genuinely non-anthropocentric units of measurement? (Planck units as dimensionless ratios.)
2. **Information Without Base:** How to define information capacity without choosing a logarithmic base (bits, nats, bans).
3. **Archimedean vs. Non-Archimedean:** Ostrowski's theorem and the democratic treatment of all completions of Q.
4. **Adelic Physics:** Whether black hole thermodynamics, quantum gravity, and particle physics find a unified expression in adelic/multi-place formalism.
5. **Monster Moonshine:** If the adelic framework naturally connects to the Monster group and McKay-Thompson series as organising principles for physical constants.

---

## §2 Phases and Work Breakdown Structure (WBS)

### Phase 0: Project Initialization **[IN PROGRESS]**
| WBS | Task | Dependencies |
|-----|------|-------------|
| 0.1 | Repository scaffold, directory structure, source note import | — |
| 0.2 | Git init on feature branch, .gitignore, GitHub repo creation | 0.1 |
| 0.3 | PROJECT-PLAN.md with charter, WBS, milestones, risk/deliverable registries | 0.1 |
| 0.4 | README.md | 0.3 |
| 0.5 | KG/memory seed, Phase Closeout (commit, tag v0.1-phase0, push) | 0.2–0.4 |

### Phase 1: Due Diligence — Cross-Reference Discovery
| WBS | Task | Dependencies |
|-----|------|-------------|
| 1.1 | QNFO ecosystem scan: KG query, D1 search, Vectorize semantic search | 0.5 |
| 1.2 | External literature: arXiv, Semantic Scholar, web search on Bekenstein bound, Ostrowski's theorem in physics, p-adic/adelic physics | 1.1 |
| 1.3 | Gap analysis: identify novelty, flag overlaps with existing QNFO papers (informational-universe, etc.) | 1.2 |
| 1.4 | Due Diligence Report in artifacts/due-diligence-report.md | 1.3 |

### Phase 2: Literature Search & Triage
| WBS | Task | Dependencies |
|-----|------|-------------|
| 2.1 | Multi-source parallel search: Semantic Scholar, arXiv, web, QNFO Vectorize, QNFO KG | 1.4 |
| 2.2 | Deduplication and classification (core/supporting/background/reject) | 2.1 |
| 2.3 | Deep read core papers; extract claims, methodology, assumptions | 2.2 |

### Phase 3: Citation Management
| WBS | Task | Dependencies |
|-----|------|-------------|
| 3.1 | Extract citations, build refs.bib | 2.3 |
| 3.2 | BibTeX verification: cross-reference, auto-generate missing DOIs, audit report | 3.1 |

### Phase 4: Deep Research — 9-Stage Bayesian Cascade
| WBS | Task | Dependencies |
|-----|------|-------------|
| 4.0 | Domain assessment: map the field of natural units, adelic physics | Phase 1 |
| 4.1–4.8 | Full Bayesian cascade (paradigm candidates, assumption audit, red-team, sensitivity, calibration, portfolio, memo, adversarial review) | 4.0 |

### Phase 5: Publication Pipeline
| WBS | Task | Dependencies |
|-----|------|-------------|
| 5.1 | Draft paper in docs/paper.md with YAML frontmatter, author block, curly quotes | Phase 4 |
| 5.2 | Publication Language Gate scan (internal language, credential leaks, style) | 5.1 |
| 5.3 | PDF build (Pandoc+XeLaTeX via unicode-latex-preprocess.py), rendering verification | 5.2 |
| 5.4 | Zenodo deposit: create, upload (paper.md, paper.pdf, PROVENANCE-BUNDLE.zip), metadata, publish, DOI verify | 5.3 |
| 5.5 | OSF registration (GATE-CONDITIONAL: only if significant falsifiable predictions with calibration register) | 5.4 |

### Phase 6: Cloudflare Deployment
| WBS | Task | Dependencies |
|-----|------|-------------|
| 6.1 | D1 living-paper insert/update | 5.4 |
| 6.2 | papers-server Worker verification (HTTP 200) | 6.1 |
| 6.3 | R2 archive upload (qnfo-releases) | 5.4 |

### Phase 7: Dissemination & Permanence
| WBS | Task | Dependencies |
|-----|------|-------------|
| 7.1 | SEO audit: robots.txt, sitemap, llms.txt, meta tags | 6.2 |
| 7.2 | Buffer social media posting (Twitter, LinkedIn, Bluesky) | 5.4 |
| 7.3 | Internet Archive snapshot submission | 6.2 |

### Phase 8: Core Distribution
| WBS | Task | Dependencies |
|-----|------|-------------|
| 8.1 | GitHub push + tag + release with DOI link | 6.2 |
| 8.2 | Zenodo new-version deposit (if existing concept) | 5.4 |
| 8.3 | DNSLink (OPTIONAL): _dnslink.<slug>.qnfo.org TXT record | 5.4 |
| 8.4 | D1/KG records sync + lifecycle timestamp update | 6.1 |

---

## §3 Milestones and Gate Criteria

| Phase | Milestone | Gate Criteria | Tag |
|-------|-----------|--------------|-----|
| 0 | Project initialized | Repo scaffolded, PROJECT-PLAN.md locked, git committed + tagged + pushed | v0.1-phase0 |
| 1 | Due diligence complete | KG + D1 + Vectorize + 2+ external sources queried; gap analysis written | v0.2-phase1-dd |
| 2 | Literature triaged | All papers classified (core/supporting/background/reject), classification table produced | v0.3-phase2-lit |
| 3 | Citations verified | BibTeX audit passed: 0 missing entries, 0 unused entries | v0.4-phase3-cite |
| 4 | Deep research complete | 9-stage Bayesian cascade passed, adversarial review passed | v0.5-phase4-deep |
| 5 | Published | Paper PDF clean (0 \ufffd), Zenodo DOI resolves HTTP 200, PROVENANCE-BUNDLE uploaded | v1.0 |
| 6 | Deployed | papers-server HTTP 200, D1 row verified, R2 archive round-trips | v1.1-deploy |
| 7 | Disseminated | Buffer posts confirmed scheduled, Internet Archive submitted, SEO audit passed | v1.2-disseminate |
| 8 | Distributed | All 4 core layers verified (GitHub, Zenodo, R2, D1/KG) | v1.3-distribute |

---

## §4 Deliverable Registry

| Deliverable | Path | Archival Target |
|-------------|------|----------------|
| Source Note (imported) | docs/source-note.md | R2: qnfo-projects/non-anthropocentric-natural-units/docs/ |
| PROJECT-PLAN.md | PROJECT-PLAN.md | GitHub + R2 + Zenodo PROVENANCE-BUNDLE |
| README.md | README.md | GitHub + R2 |
| Due Diligence Report | artifacts/due-diligence-report.md | GitHub + R2 |
| Literature Classification | artifacts/literature-classification.md | GitHub + R2 |
| Refs BibTeX | refs.bib | GitHub + Zenodo |
| Paper Draft | docs/paper.md | GitHub + R2 + Zenodo |
| Paper PDF | paper.pdf | R2 + Zenodo |
| PROVENANCE-BUNDLE.zip | PROVENANCE-BUNDLE.zip | Zenodo |
| Calibration Register | artifacts/calibration-register.md | GitHub + R2 |

---

## §5 Risk Register

| ID | Risk | Likelihood | Impact | Mitigation |
|----|------|-----------|--------|------------|
| R1 | Adelic physics literature is sparse — difficulty finding core papers | Medium | High | Broaden to p-adic physics, Ostrowski's theorem in foundations, non-Archimedean geometry |
| R2 | Project scope creep: adelic/moonshine programme too ambitious for single paper | High | Medium | Phase-gate: core paper covers natural-units + Ostrowski question; adelic extension is Phase 4 deep-dive |
| R3 | Overlap with existing QNFO "informational-universe" paper — novelty claim challenged | Medium | High | Due diligence (Phase 1) must explicitly differentiate: informational-universe covers correlations; this project covers the UNIT SYSTEM and PLACE-COMPLETENESS question |
| R4 | Pandoc+XeLaTeX Unicode math rendering failures (Greek, subscript/superscript, bra-ket outside $...$) | High | Low | Use unicode-latex-preprocess.py; KIF-01 fix is well-tested |
| R5 | Zenodo 403 from credential misconfiguration | Low | High | Run zenodo-token-check.py before any deposit; never hand-copy token (KIF-10) |
| R6 | D1 ON CONFLICT upsert failure on living-paper.papers (FTS5 shadow tables) | Medium | Medium | Use CHECK-THEN-WRITE pattern (SELECT existence, then plain INSERT or UPDATE) |
| R7 | Obsidian source note contains internal monologue mixed with publishable content | Medium | Low | Load doc-coauthoring skill during Phase 5 to separate meta-planning from publishable content |

---

## §6 Success Criteria

1. **Conceptual clarity:** The paper clearly articulates what a "non-anthropocentric unit" means and demonstrates it for area and information capacity.
2. **Mathematical rigour:** The exponential bound is defined without logarithmic base; Ostrowski's theorem is correctly presented; adelic extension is mathematically well-formed.
3. **Empirical grounding:** Bekenstein-Hawking results are cited as the empirical anchor; any adelic predictions include falsifiability conditions and calibration registers.
4. **Publication quality:** PDF passes all rendering checks (0 \ufffd glyphs, clean build); Zenodo DOI resolves; papers.qnfo.org serves the paper.
5. **No phantom claims:** Every action verified independently; Anti-Phantom Gate passed at every phase.

---

## §7 Version History

| Version | Date | Description |
|---------|------|-------------|
| v0.1-phase0 | 2026-07-21 | Project initialization: scaffold, charter, core claim lock, WBS, risk register |
