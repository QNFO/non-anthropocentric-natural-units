/**
 * Avenue 2: RG-Flow Derivation of Lepton Mass Ratios
 * Tests SO(10) b-tau Yukawa unification at M_GUT using 1-loop SM RGEs.
 * Pre-registered: 2026-07-22, PROJECT-PLAN-v3.0.md Section 4.
 */
const fs = require('fs');

// Physical constants
const MZ = 91.1876;          // Z mass (GeV)
const v = 246.21965;         // Higgs vev (GeV)
const MGUT = 2e16;           // GUT scale (GeV)
const MT_pole = 172.5;       // top pole mass (GeV)
const MB_mb = 4.18;          // bottom MS-bar at m_b (GeV)
const MTau_pole = 1.77686;   // tau pole mass (GeV)

// Yukawa couplings at M_Z
const yt_MZ = Math.sqrt(2) * (MT_pole * 0.951) / v;   // pole -> MS at M_Z
const yb_MZ = Math.sqrt(2) * MB_mb / v;
const ytau_MZ = Math.sqrt(2) * MTau_pole / v;

console.log('=== AVENUE 2: RG-Flow Derivation ===\n');
console.log(`Yukawa couplings at M_Z:`);
console.log(`  y_t(M_Z)  = ${yt_MZ.toFixed(4)}`);
console.log(`  y_b(M_Z)  = ${yb_MZ.toFixed(4)}`);
console.log(`  y_tau(M_Z)= ${ytau_MZ.toFixed(4)}`);
console.log(`  m_b/m_tau(M_Z) = ${(yb_MZ/ytau_MZ).toFixed(3)}`);

// Gauge couplings at M_Z (SU(5) normalization)
const alpha_em = 1/127.952, sin2W = 0.23121, alpha_s = 0.1181;
const g1_MZ = Math.sqrt(4*Math.PI*alpha_em/(1-sin2W)*(5/3));
const g2_MZ = Math.sqrt(4*Math.PI*alpha_em/sin2W);
const g3_MZ = Math.sqrt(4*Math.PI*alpha_s);

console.log(`\nGauge couplings at M_Z (SU(5) norm):`);
console.log(`  g1 = ${g1_MZ.toFixed(4)}, g2 = ${g2_MZ.toFixed(4)}, g3 = ${g3_MZ.toFixed(4)}`);

// 1-loop beta function coefficients: dg_i/dt = b_i * g_i^3/(16 pi^2)
const B = [41/10, -19/6, -7];

// 1-loop Yukawa beta functions (3rd gen dominant)
function byt(yt, yb, yt_, g1, g2, g3) {
  return yt/(16*Math.PI*Math.PI)*(4.5*yt*yt+1.5*yb*yb+yt_*yt_-8*g3*g3-2.25*g2*g2-0.85*g1*g1);
}
function byb(yb, yt, yt_, g1, g2, g3) {
  return yb/(16*Math.PI*Math.PI)*(1.5*yt*yt+4.5*yb*yb+yt_*yt_-8*g3*g3-2.25*g2*g2-0.25*g1*g1);
}
function byt_(yt_, yt, yb, g1, g2, g3) {
  return yt_/(16*Math.PI*Math.PI)*(3*yt*yt+3*yb*yb+2.5*yt_*yt_-2.25*g2*g2-2.25*g1*g1);
}

// Runge-Kutta 4 integrator (ytop=top, ybot=bottom, ytau=tau)
function rk4_step(yt, yb, yt_, g1, g2, g3, h, forward) {
  const s = forward ? 1 : -1;
  const k1 = {
    yt:  byt(yt, yb, yt_, g1, g2, g3),
    yb:  byb(yb, yt, yt_, g1, g2, g3),
    yt_: byt_(yt_, yt, yb, g1, g2, g3),
    g1:  B[0]*g1*g1*g1/(16*Math.PI*Math.PI),
    g2:  B[1]*g2*g2*g2/(16*Math.PI*Math.PI),
    g3:  B[2]*g3*g3*g3/(16*Math.PI*Math.PI)
  };
  const k2 = {
    yt:  byt(yt+0.5*h*k1.yt, yb+0.5*h*k1.yb, yt_+0.5*h*k1.yt_, g1+0.5*h*k1.g1, g2+0.5*h*k1.g2, g3+0.5*h*k1.g3),
    yb:  byb(yb+0.5*h*k1.yb, yt+0.5*h*k1.yt, yt_+0.5*h*k1.yt_, g1+0.5*h*k1.g1, g2+0.5*h*k1.g2, g3+0.5*h*k1.g3),
    yt_: byt_(yt_+0.5*h*k1.yt_, yt+0.5*h*k1.yt, yb+0.5*h*k1.yb, g1+0.5*h*k1.g1, g2+0.5*h*k1.g2, g3+0.5*h*k1.g3),
    g1:  B[0]*Math.pow(g1+0.5*h*k1.g1,3)/(16*Math.PI*Math.PI),
    g2:  B[1]*Math.pow(g2+0.5*h*k1.g2,3)/(16*Math.PI*Math.PI),
    g3:  B[2]*Math.pow(g3+0.5*h*k1.g3,3)/(16*Math.PI*Math.PI)
  };
  const k3 = {
    yt:  byt(yt+0.5*h*k2.yt, yb+0.5*h*k2.yb, yt_+0.5*h*k2.yt_, g1+0.5*h*k2.g1, g2+0.5*h*k2.g2, g3+0.5*h*k2.g3),
    yb:  byb(yb+0.5*h*k2.yb, yt+0.5*h*k2.yt, yt_+0.5*h*k2.yt_, g1+0.5*h*k2.g1, g2+0.5*h*k2.g2, g3+0.5*h*k2.g3),
    yt_: byt_(yt_+0.5*h*k2.yt_, yt+0.5*h*k2.yt, yb+0.5*h*k2.yb, g1+0.5*h*k2.g1, g2+0.5*h*k2.g2, g3+0.5*h*k2.g3),
    g1:  B[0]*Math.pow(g1+0.5*h*k2.g1,3)/(16*Math.PI*Math.PI),
    g2:  B[1]*Math.pow(g2+0.5*h*k2.g2,3)/(16*Math.PI*Math.PI),
    g3:  B[2]*Math.pow(g3+0.5*h*k2.g3,3)/(16*Math.PI*Math.PI)
  };
  const k4 = {
    yt:  byt(yt+h*k3.yt, yb+h*k3.yb, yt_+h*k3.yt_, g1+h*k3.g1, g2+h*k3.g2, g3+h*k3.g3),
    yb:  byb(yb+h*k3.yb, yt+h*k3.yt, yt_+h*k3.yt_, g1+h*k3.g1, g2+h*k3.g2, g3+h*k3.g3),
    yt_: byt_(yt_+h*k3.yt_, yt+h*k3.yt, yb+h*k3.yb, g1+h*k3.g1, g2+h*k3.g2, g3+h*k3.g3),
    g1:  B[0]*Math.pow(g1+h*k3.g1,3)/(16*Math.PI*Math.PI),
    g2:  B[1]*Math.pow(g2+h*k3.g2,3)/(16*Math.PI*Math.PI),
    g3:  B[2]*Math.pow(g3+h*k3.g3,3)/(16*Math.PI*Math.PI)
  };
  return {
    yt:  yt  + s*h/6*(k1.yt+2*k2.yt+2*k3.yt+k4.yt),
    yb:  yb  + s*h/6*(k1.yb+2*k2.yb+2*k3.yb+k4.yb),
    yt_: yt_ + s*h/6*(k1.yt_+2*k2.yt_+2*k3.yt_+k4.yt_),
    g1:  g1  + s*h/6*(k1.g1+2*k2.g1+2*k3.g1+k4.g1),
    g2:  g2  + s*h/6*(k1.g2+2*k2.g2+2*k3.g2+k4.g2),
    g3:  g3  + s*h/6*(k1.g3+2*k2.g3+2*k3.g3+k4.g3)
  };
}

// Run RG from MZ to MGUT
const N = 2000;
const h_up = Math.log(MGUT/MZ)/N;
let state = { yt: yt_MZ, yb: yb_MZ, yt_: ytau_MZ, g1: g1_MZ, g2: g2_MZ, g3: g3_MZ };
for (let i = 0; i < N; i++) {
  state = rk4_step(state.yt, state.yb, state.yt_, state.g1, state.g2, state.g3, h_up, true);
}

const yt_GUT = state.yt, yb_GUT = state.yb, ytau_GUT = state.yt_;
const g1_GUT = state.g1, g2_GUT = state.g2, g3_GUT = state.g3;

console.log(`\nYukawa couplings at M_GUT:`);
console.log(`  y_t(M_GUT)  = ${yt_GUT.toFixed(6)}`);
console.log(`  y_b(M_GUT)  = ${yb_GUT.toFixed(6)}`);
console.log(`  y_tau(M_GUT)= ${ytau_GUT.toFixed(6)}`);
console.log(`  y_b/y_tau(M_GUT) = ${(yb_GUT/ytau_GUT).toFixed(4)}`);

// BC-1: SO(10) b-tau unification: set yb(MGUT)=ytau(MGUT), run down
const y_unif = Math.sqrt(yb_GUT * ytau_GUT);
console.log(`\n=== BC-1: SO(10) b-tau Unification ===`);
console.log(`  Imposing y_b(M_GUT) = y_tau(M_GUT) = ${y_unif.toFixed(6)} (geometric mean)`);

const h_dn = Math.log(MZ/MGUT)/N;
let sd = { yt: yt_GUT, yb: y_unif, yt_: y_unif, g1: g1_GUT, g2: g2_GUT, g3: g3_GUT };
for (let i = 0; i < N; i++) {
  sd = rk4_step(sd.yt, sd.yb, sd.yt_, sd.g1, sd.g2, sd.g3, h_dn, true);
}

const ratio_pred = sd.yb / sd.yt_;
const ratio_obs = yb_MZ / ytau_MZ;

console.log(`  Predicted y_b(M_Z)  = ${sd.yb.toFixed(6)}`);
console.log(`  Predicted y_tau(M_Z)= ${sd.yt_.toFixed(6)}`);
console.log(`  Predicted m_b/m_tau = ${ratio_pred.toFixed(3)}`);
console.log(`  Observed  m_b/m_tau = ${ratio_obs.toFixed(3)}`);
console.log(`  Pred/Obs = ${(ratio_pred/ratio_obs).toFixed(3)} (${((ratio_pred/ratio_obs-1)*100).toFixed(1)}% deviation)`);

// Null model: 1000 random UV BCs
console.log(`\n=== BC-3: Anarchic UV — 1000 random BCs ===`);

function runDownFast(yb_GUT0, ytau_GUT0) {
  let yt_ = yt_GUT, yb_ = yb_GUT0, yt__ = ytau_GUT0;
  let g1_ = g1_GUT, g2_ = g2_GUT, g3_ = g3_GUT;
  for (let i = 0; i < 500; i++) {
    const r = rk4_step(yt_, yb_, yt__, g1_, g2_, g3_, h_dn*4, true);
    yt_ = r.yt; yb_ = r.yb; yt__ = r.yt_; g1_ = r.g1; g2_ = r.g2; g3_ = r.g3;
  }
  return yb_ / yt__;
}

const surrogates = [];
for (let i = 0; i < 1000; i++) {
  const yb_r = Math.pow(10, -4 + 4*Math.random());
  const yt_r = Math.pow(10, -4 + 4*Math.random());
  surrogates.push(runDownFast(yb_r, yt_r));
}
surrogates.sort((a,b)=>a-b);

const median = surrogates[500], p5 = surrogates[50], p95 = surrogates[950];
let rank = 0;
for (let i = 0; i < surrogates.length; i++) { if (ratio_pred <= surrogates[i]) { rank = i; break; } }
const pct = rank/1000;

console.log(`  Surrogate median m_b/m_tau: ${median.toFixed(3)}`);
console.log(`  Surrogate 5th pct:          ${p5.toFixed(3)}`);
console.log(`  Surrogate 95th pct:         ${p95.toFixed(3)}`);
console.log(`  SO(10) prediction:          ${ratio_pred.toFixed(3)}`);
console.log(`  SO(10) rank: ${rank}/1000 (${(pct*100).toFixed(1)}th percentile)`);

console.log(`\n=== VERDICT ===`);
if (pct > 0.95) {
  console.log(`  MECHANISM SURVIVES: prediction in top 5% of random BCs`);
} else if (pct < 0.05) {
  console.log(`  DISCONFIRMED: prediction in bottom 5%`);
} else {
  console.log(`  INDISTINGUISHABLE from random BCs`);
}

// Also test: does b-tau unification at GUT produce ratio close to observed?
const dev = Math.abs(ratio_pred/ratio_obs - 1);
console.log(`  Deviation from observed: ${(dev*100).toFixed(1)}%`);
if (dev < 0.10) {
  console.log(`  Within 10% of observed — qualitatively consistent with b-tau unification`);
} else {
  console.log(`  >10% deviation — SO(10) b-tau unification at 1-loop SM requires SUSY threshold corrections`);
}

// Save results
const results = {
  avenue: 2, date: '2026-07-22',
  yukawa_MZ: { yt: yt_MZ, yb: yb_MZ, ytau: ytau_MZ },
  yukawa_GUT_flow_up: { yt: yt_GUT, yb: yb_GUT, ytau: ytau_GUT, ratio: yb_GUT/ytau_GUT },
  yukawa_GUT_unified: y_unif,
  prediction: { yb_MZ: sd.yb, ytau_MZ: sd.yt_, ratio_pred, ratio_obs, dev_pct: dev*100 },
  null_model: { n: 1000, median, p5, p95, rank, percentile: pct },
  verdict: pct > 0.95 ? 'SURVIVES' : pct < 0.05 ? 'DISCONFIRMED' : 'INDISTINGUISHABLE'
};
fs.writeFileSync('avenue2_results.json', JSON.stringify(results, null, 2));
console.log('\nSaved avenue2_results.json');
