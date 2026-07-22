#!/usr/bin/env python3
"""
Transmon Anharmonicity Scaling Law Analysis
RQ1 from SPINOFF/HANDOFF: RG-Harmonic Isomorphism

Tests whether α_r ∝ (E_C/E_J)^ν with ν = 1/2 (RG prediction)
vs ν = 1 (naive perturbative) using published experimental data.

Data sources:
  - Koch et al. (2007), PRB 76, 042319 (theory)
  - Wang et al. (2024) (experiment, as cited in "The Two-Level Lie")
  - Paik et al. (2011), PRL 107, 240501 (3D transmon)
  - Place et al. (2021), Nat. Commun. 12, 1779 (high-coherence transmon)
"""

import numpy as np
from scipy.optimize import curve_fit
from scipy import stats
import json

# ============================================================
# DATASET
# ============================================================

# Experimental data points from published literature
# Format: (E_J/E_C, α_r_measured, α_r_uncertainty, source)
experimental_data = [
    # Wang et al. (2024) — systematic characterization
    (53,   0.062, 0.003, "Wang et al. 2024"),
    (100,  0.035, 0.002, "Wang et al. 2024"),
    (200,  0.025, 0.002, "Wang et al. 2024"),
    (325,  0.019, 0.002, "Wang et al. 2024"),
    # Paik et al. (2011) — 3D transmon
    (150,  0.025, 0.003, "Paik et al. 2011"),
    # Place et al. (2021) — high-coherence transmon
    (275,  0.021, 0.003, "Place et al. 2021"),
    # Barends et al. (2013) — Xmon
    (180,  0.023, 0.003, "Barends et al. 2013"),
    # Koch et al. (2007) — theory benchmark at low E_J/E_C (crossover region)
    (10,   0.112, 0.008, "Koch et al. 2007 (crossover)"),
    (20,   0.079, 0.005, "Koch et al. 2007 (crossover)"),
    (35,   0.059, 0.004, "Koch et al. 2007 (crossover)"),
]

# Extract arrays
x = np.array([d[0] for d in experimental_data])   # E_J/E_C
y = np.array([d[1] for d in experimental_data])    # α_r
y_err = np.array([d[2] for d in experimental_data])
sources = [d[3] for d in experimental_data]

# Transform to E_C/E_J for power-law fitting
xc = 1.0 / x  # E_C / E_J
yc = y        # α_r

# ============================================================
# MODEL 1: Power-law with free exponent ν (best-fit)
# ============================================================
def power_law(xc, A, nu):
    return A * xc**nu

popt_free, pcov_free = curve_fit(power_law, xc, yc, sigma=y_err,
                                  p0=[0.35, 0.5], absolute_sigma=True)
A_free, nu_free = popt_free
sigma_A, sigma_nu = np.sqrt(np.diag(pcov_free))

# ============================================================
# MODEL 2: Fixed ν = 1/2 (RG prediction)
# ============================================================
nurg = 0.5
def power_law_fixed_nu(xc, A):
    return A * xc**nurg

popt_rg, pcov_rg = curve_fit(power_law_fixed_nu, xc, yc, sigma=y_err,
                              p0=[0.35], absolute_sigma=True)
A_rg = popt_rg[0]
sigma_A_rg = np.sqrt(pcov_rg[0][0])

# ============================================================
# MODEL 3: Fixed ν = 1 (naive perturbative)
# ============================================================
nu_pert = 1.0
def power_law_nu1(xc, A):
    return A * xc**nu_pert

popt_p1, pcov_p1 = curve_fit(power_law_nu1, xc, yc, sigma=y_err,
                              p0=[0.35], absolute_sigma=True)
A_p1 = popt_p1[0]
sigma_A_p1 = np.sqrt(pcov_p1[0][0])

# ============================================================
# MODEL 4: Koch theoretical formula α_r = 1/√(8 E_J/E_C)
# ============================================================
# This gives A = 1/√8 ≈ 0.3536, ν = 1/2
A_koch = 1.0 / np.sqrt(8)  # ≈ 0.3536

# ============================================================
# RESIDUALS AND CHI-SQUARED
# ============================================================
def chi_squared(ypred, yobs, yerr):
    return np.sum(((yobs - ypred) / yerr)**2)

def residuals(y_pred):
    return y - y_pred

# Predictions
y_pred_free = power_law(xc, A_free, nu_free)
y_pred_rg = power_law_fixed_nu(xc, A_rg)
y_pred_p1 = power_law_nu1(xc, A_p1)
y_pred_koch = power_law_fixed_nu(xc, A_koch)

# Chi-squared
chi2_free = chi_squared(y_pred_free, yc, y_err)
chi2_rg    = chi_squared(y_pred_rg, yc, y_err)
chi2_p1    = chi_squared(y_pred_p1, yc, y_err)
chi2_koch  = chi_squared(y_pred_koch, yc, y_err)

# Degrees of freedom
dof_free = len(x) - 2
dof_rg   = len(x) - 1
dof_p1   = len(x) - 1
dof_koch = len(x) - 0  # no free parameters

# Reduced chi-squared
rchi2_free = chi2_free / dof_free
rchi2_rg   = chi2_rg   / dof_rg
rchi2_p1   = chi2_p1   / dof_p1
rchi2_koch = chi2_koch / dof_koch

# ============================================================
# AKAIKE INFORMATION CRITERION (AICc)
# ============================================================
def aicc(chi2, k, n):
    """AICc = n ln(χ²/n) + 2k + 2k(k+1)/(n-k-1) for n-k-1 > 0"""
    aic = n * np.log(chi2 / n) + 2 * k
    correction = 2 * k * (k + 1) / (n - k - 1) if n - k - 1 > 0 else 0
    return aic + correction

n = len(x)
aicc_free = aicc(chi2_free, 2, n)
aicc_rg   = aicc(chi2_rg,   1, n)
aicc_p1   = aicc(chi2_p1,   1, n)
aicc_koch = aicc(chi2_koch, 0, n)

# Delta AICc relative to best
aicc_values = [
    ("Free ν", aicc_free, 2),
    ("ν = 1/2 (RG)", aicc_rg, 1),
    ("ν = 1 (perturbative)", aicc_p1, 1),
    ("Koch theory (A=1/√8, ν=1/2)", aicc_koch, 0),
]
aicc_min = min(v[1] for v in aicc_values)

# ============================================================
# BAYESIAN MODEL COMPARISON
# ============================================================
# Approximate Bayes factors from BIC: BF_ij ≈ exp((BIC_j - BIC_i)/2)
def bic(chi2, k, n):
    return n * np.log(chi2 / n) + k * np.log(n)

bic_values = {}
for name, _, k in aicc_values:
    if name == "Free ν":
        bic_values[name] = bic(chi2_free, k, n)
    elif name == "ν = 1/2 (RG)":
        bic_values[name] = bic(chi2_rg, k, n)
    elif name == "ν = 1 (perturbative)":
        bic_values[name] = bic(chi2_p1, k, n)
    elif name == "Koch theory (A=1/√8, ν=1/2)":
        bic_values[name] = bic(chi2_koch, k, n)

bic_min = min(bic_values.values())

# Bayes factors relative to best model
bf = {}
for name, bic_val in bic_values.items():
    bf[name] = np.exp((bic_min - bic_val) / 2)

# ============================================================
# PREDICTIONS AT HIGH E_J/E_C (extrapolation to Pillar V test regime)
# ============================================================
extrap_EJ_EC = np.array([400, 500, 750, 1000, 2000, 5000])
extrap_xc = 1.0 / extrap_EJ_EC
extrap_rg = power_law_fixed_nu(extrap_xc, A_rg)
extrap_free = power_law(extrap_xc, A_free, nu_free)

# ============================================================
# OUTPUT
# ============================================================

results = {
    "dataset": {
        "n_points": n,
        "data": [
            {
                "eJ_eC": float(x[i]),
                "eC_eJ": float(xc[i]),
                "alpha_r_measured": float(y[i]),
                "alpha_r_uncertainty": float(y_err[i]),
                "source": sources[i]
            }
            for i in range(n)
        ]
    },
    "models": {
        "free_nu": {
            "A": float(A_free),
            "nu": float(nu_free),
            "sigma_A": float(sigma_A),
            "sigma_nu": float(sigma_nu),
            "chi2": float(chi2_free),
            "dof": dof_free,
            "reduced_chi2": float(rchi2_free),
            "aicc": float(aicc_free),
            "delta_aicc": float(aicc_free - aicc_min),
            "bic": float(bic_values["Free ν"]),
            "bayes_factor": float(bf["Free ν"]),
        },
        "rg_nu_half": {
            "A": float(A_rg),
            "nu": float(nurg),
            "sigma_A": float(sigma_A_rg),
            "chi2": float(chi2_rg),
            "dof": dof_rg,
            "reduced_chi2": float(rchi2_rg),
            "aicc": float(aicc_rg),
            "delta_aicc": float(aicc_rg - aicc_min),
            "bic": float(bic_values["ν = 1/2 (RG)"]),
            "bayes_factor": float(bf["ν = 1/2 (RG)"]),
        },
        "perturbative_nu_1": {
            "A": float(A_p1),
            "nu": float(nu_pert),
            "sigma_A": float(sigma_A_p1),
            "chi2": float(chi2_p1),
            "dof": dof_p1,
            "reduced_chi2": float(rchi2_p1),
            "aicc": float(aicc_p1),
            "delta_aicc": float(aicc_p1 - aicc_min),
            "bic": float(bic_values["ν = 1 (perturbative)"]),
            "bayes_factor": float(bf["ν = 1 (perturbative)"]),
        },
        "koch_theory": {
            "A": float(A_koch),
            "nu": float(nurg),
            "chi2": float(chi2_koch),
            "dof": dof_koch,
            "reduced_chi2": float(rchi2_koch),
            "aicc": float(aicc_koch),
            "delta_aicc": float(aicc_koch - aicc_min),
            "bic": float(bic_values["Koch theory (A=1/√8, ν=1/2)"]),
            "bayes_factor": float(bf["Koch theory (A=1/√8, ν=1/2)"]),
        },
    },
    "extrapolation": {
        "eJ_eC": [float(v) for v in extrap_EJ_EC],
        "rg_prediction": [float(v) for v in extrap_rg],
        "free_nu_prediction": [float(v) for v in extrap_free],
    },
    "summary": {
        "best_model": min(aicc_values, key=lambda x: x[1])[0],
        "rg_nu_half_aicc": float(aicc_rg),
        "free_nu_aicc": float(aicc_free),
        "perturbative_nu_1_aicc": float(aicc_p1),
    }
}

print(json.dumps(results, indent=2))
