const PILLARS = [
{ id: 'process', label: 'Process and documentation', weight: 20 },
{ id: 'requirements', label: 'Requirements and acceptance criteria', weight: 15 },
{ id: 'environment', label: 'Environment and reproducibility', weight: 15 },
{ id: 'automation', label: 'Automation and CI/CD', weight: 20 },
{ id: 'metrics', label: 'Metrics and trend analysis', weight: 20 },
{ id: 'culture', label: 'Culture and ownership', weight: 10 },
];
const QUESTIONS = [
{ id:'q1', pillar:'process', text:'How often do you run performance tests?', answers:[
{ id:'a', label:'Only when incidents happen or right before big releases', score:0 },
{ id:'b', label:'On a release cadence for key applications', score:1 },
{ id:'c', label:'Continuously as part of development workflows', score:2 },
{ id:'d', label:'Continuously, plus ongoing optimization cycles', score:3 },
]},
{ id:'q2', pillar:'process', text:'How documented is your performance testing approach?', answers:[
{ id:'a', label:'Not documented; mostly tribal knowledge', score:0 },
{ id:'b', label:'Documented playbooks and repeatable procedures', score:1 },
{ id:'c', label:'Standardized across teams and reviewed regularly', score:2 },
{ id:'d', label:'Treated as a living system; improved and shared widely', score:3 },
]},
{ id:'q3', pillar:'process', text:'What does test coverage look like?', answers:[
{ id:'a', label:'Inconsistent scope; a few happy paths', score:0 },
{ id:'b', label:'Core user journeys with repeatable scenarios', score:1 },
{ id:'c', label:'Broad coverage, including regressions and key risks', score:2 },
{ id:'d', label:'Risk-based coverage using real usage and outcomes', score:3 },
]},
{ id:'q4', pillar:'requirements', text:'Do you have clear performance requirements?', answers:[
{ id:'a', label:'No defined targets', score:0 },
{ id:'b', label:'Basic targets for key flows', score:1 },
{ id:'c', label:'Targets agreed cross-team and tied to releases', score:2 },
{ id:'d', label:'Targets evolve with business goals and capacity plans', score:3 },
]},
{ id:'q5', pillar:'requirements', text:'How do you decide pass or fail?', answers:[
{ id:'a', label:'Subjective review of charts and logs', score:0 },
{ id:'b', label:'Basic thresholds for latency and errors', score:1 },
{ id:'c', label:'Automated assertions in CI/CD pipelines', score:2 },
{ id:'d', label:'Assertions plus risk rules and forecasting', score:3 },
]},
{ id:'q6', pillar:'requirements', text:'Who owns performance requirements?', answers:[
{ id:'a', label:'No clear owner', score:0 },
{ id:'b', label:'A performance team defines them', score:1 },
{ id:'c', label:'Shared ownership across dev, ops, and platform teams', score:2 },
{ id:'d', label:'Performance is designed in from feature conception', score:3 },
]},
{ id:'q7', pillar:'environment', text:'How close is your test environment to production?', answers:[
{ id:'a', label:'Not representative of production', score:0 },
{ id:'b', label:'Partially representative for key components', score:1 },
{ id:'c', label:'Consistent and reproducible across teams', score:2 },
{ id:'d', label:'Production-like and continuously validated', score:3 },
]},
{ id:'q8', pillar:'environment', text:'Can you reproduce results reliably?', answers:[
{ id:'a', label:'Results vary; comparisons are hard', score:0 },
{ id:'b', label:'Reproducible for a few known scenarios', score:1 },
{ id:'c', label:'Reproducible with baselines and comparisons', score:2 },
{ id:'d', label:'Reproducible plus long-term trend-driven optimization', score:3 },
]},
{ id:'q9', pillar:'environment', text:'How do you manage test data?', answers:[
{ id:'a', label:'Manual and ad hoc', score:0 },
{ id:'b', label:'Stable datasets for core scenarios', score:1 },
{ id:'c', label:'Automated data generation or refresh for pipelines', score:2 },
{ id:'d', label:'Data strategy mirrors production patterns and evolves', score:3 },
]},
{ id:'q10', pillar:'automation', text:'How automated is test execution?', answers:[
{ id:'a', label:'Manual runs', score:0 },
{ id:'b', label:'Repeatable, but manually triggered', score:1 },
{ id:'c', label:'Automated in CI/CD', score:2 },
{ id:'d', label:'Automated and self-service across teams', score:3 },
]},
{ id:'q11', pillar:'automation', text:'When do performance tests run?', answers:[
{ id:'a', label:'Late, right before release', score:0 },
{ id:'b', label:'Before major releases and critical changes', score:1 },
{ id:'c', label:'During development cycles', score:2 },
{ id:'d', label:'Continuously, plus preemptive capacity validation', score:3 },
]},
{ id:'q12', pillar:'automation', text:'How easy is it for teams to run tests?', answers:[
{ id:'a', label:'Only a few specialists can run them', score:0 },
{ id:'b', label:'Possible with documentation, but specialist-heavy', score:1 },
{ id:'c', label:'Developers can run and review tests reliably', score:2 },
{ id:'d', label:'Templates, guardrails, and coaching enable everyone', score:3 },
]},
{ id:'q13', pillar:'metrics', text:'Do you track metrics over time?', answers:[
{ id:'a', label:'No history; one-off results', score:0 },
{ id:'b', label:'Basic baselines', score:1 },
{ id:'c', label:'Trend analysis drives decisions', score:2 },
{ id:'d', label:'Forecasting and planning based on trends', score:3 },
]},
{ id:'q14', pillar:'metrics', text:'How do you share results?', answers:[
{ id:'a', label:'Screenshots or one-off summaries', score:0 },
{ id:'b', label:'Shared reports sometimes', score:1 },
{ id:'c', label:'Dashboards used by dev, ops, and leaders', score:2 },
{ id:'d', label:'Results tied to governance and business outcomes', score:3 },
]},
{ id:'q15', pillar:'metrics', text:'Do you correlate test results with observability data?', answers:[
{ id:'a', label:'No correlation', score:0 },
{ id:'b', label:'Manual correlation sometimes', score:1 },
{ id:'c', label:'Routine correlation with monitoring or tracing', score:2 },
{ id:'d', label:'Automated correlation loops that drive prevention', score:3 },
]},
{ id:'q16', pillar:'culture', text:'How is performance ownership distributed?', answers:[
{ id:'a', label:'Unclear; mostly reactive firefighting', score:0 },
{ id:'b', label:'A performance team drives it', score:1 },
{ id:'c', label:'Shared responsibility across teams', score:2 },
{ id:'d', label:'A performance-first culture across teams', score:3 },
]},
{ id:'q17', pillar:'culture', text:'How do you improve maturity over time?', answers:[
{ id:'a', label:'Only after incidents', score:0 },
{ id:'b', label:'Periodic improvements', score:1 },
{ id:'c', label:'Regular review cycles', score:2 },
{ id:'d', label:'Continuous improvement and experimentation', score:3 },
]},
{ id:'q18', pillar:'culture', text:'Do you actively transfer knowledge?', answers:[
{ id:'a', label:'Mostly tribal knowledge', score:0 },
{ id:'b', label:'Some documentation and onboarding', score:1 },
{ id:'c', label:'Regular enablement and sharing', score:2 },
{ id:'d', label:'Mentorship and community contribution', score:3 },
]},
];
const STAGES = [
{
id: 1,
label: 'Stage 1 — Initial (ad hoc)',
min: 0, max: 25,
desc: 'Testing is reactive. Scope and results vary. Work happens late or after incidents.',
stat: 'Ad hoc teams are 2.6× more likely to have unplanned downtime.',
statSource: 'DORA 2023 Accelerate State of DevOps Report',
},
{
id: 2,
label: 'Stage 2 — Defined (repeatable)',
min: 26, max: 50,
desc: 'You have repeatable tests for key flows. Basic targets exist. Results are comparable.',
stat: '57% of QE teams say undefined acceptance criteria is their biggest gap — Stage 2 is the most common plateau.',
statSource: 'World Quality Report 2024-25, Capgemini / OpenText',
},
{
id: 3,
label: 'Stage 3 — Managed (measured)',
min: 51, max: 75,
desc: 'Performance testing is part of delivery. Assertions and dashboards guide decisions.',
stat: 'Integrated observability detects regressions 3× faster, 40% fewer escalations.',
statSource: 'New Relic Observability Forecast 2023',
},
{
id: 4,
label: 'Stage 4 — Optimized (continuous)',
min: 76, max: 100,
desc: 'Performance is a continuous practice. You forecast, optimize, and prevent incidents.',
stat: 'Elite performers — with continuous testing and shared ownership — deploy 973× more and recover 6,570× faster.',
statSource: 'DORA 2023 Accelerate State of DevOps Report',
},
];
const ACTIONS = {
process: [
'Standardize core user journeys to test every release',
'Document a lightweight testing playbook',
'Define coverage: critical flows plus top risk areas',
],
requirements: [
'Set performance targets for key journeys (latency, errors, throughput)',
'Turn targets into pass-fail assertions — not opinions',
'Tie requirements to releases and SLA/peak-traffic impact',
],
environment: [
'Make test environments more production-like for critical flows',
'Stabilize test data so runs are comparable',
'Adopt baselines to detect regressions confidently',
],
automation: [
'Automate key load tests per schedule or release',
'Shift testing earlier by adding smaller tests in CI/CD',
'Create templates so developers can run tests independently',
],
metrics: [
'Store results so you can compare run-to-run trends',
'Publish dashboards so dev, ops, and leadership align',
'Correlate load tests with traces and metrics for faster root cause',
],
culture: [
'Define ownership: targets, regressions, and sign-off',
'Run regular performance reviews (monthly or per milestone)',
'Enable teams via examples, office hours, and champions',
],
};
const PILLAR_COLORS = ['#FF763C','#4557DD','#F861EE','#FF492C','#FF763C','#4557DD'];
let currentIdx = 0;
let answers = {};
let mode = 'intro';
function fetchWithTimeout(url, options = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  return fetch(url, { ...options, signal: controller.signal })
    .finally(() => clearTimeout(timeout));
}
function show(id) {
document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
document.getElementById('screen-' + id).classList.add('active');
}
function startQuiz() {
currentIdx = 0;
mode = 'question';
document.getElementById('progressWrap').style.display = 'block';
renderQuestion();
show('question');
}
function resetQuiz() {
answers = {};
currentIdx = 0;
mode = 'intro';
document.getElementById('progressWrap').style.display = 'none';
show('intro');
}
function showReview() {
mode = 'review';
renderReview();
show('review');
}
function showGate() {
const { total, stage, pillarSorted } = computeScores();
mode = 'gate';
document.getElementById('teaserScore').textContent = total + '/100';
document.getElementById('teaserStage').textContent = stage.label;
const barsEl = document.getElementById('teaserBars');
barsEl.innerHTML = pillarSorted.map((p, i) => `
<div class="gate-teaser-bar-row">
<div class="gate-teaser-bar-label">${p.label}</div>
<div class="gate-teaser-bar-track">
<div class="gate-teaser-bar-fill" style="width:${p.percent}%;background:${PILLAR_COLORS[i % PILLAR_COLORS.length]}"></div>
</div>
</div>
`).join('');
show('gate');
}

async function submitGate() {
  const emailEl = document.getElementById('gEmail');
  const optInEl = document.getElementById('gOptIn');
  const emailErrEl = document.getElementById('gateEmailError');
  const errEl = document.getElementById('gateError');
  const btn = document.getElementById('gateSubmitBtn');

  errEl.textContent = '';
  emailErrEl.textContent = '';
  emailEl.classList.remove('error');

  const email = (emailEl.value || '').trim();
  const opt_in = !!(optInEl && optInEl.checked);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailEl.classList.add('error');
    emailErrEl.textContent = 'Please enter a valid work email.';
    emailEl.focus();
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Loading your results...';

// Compute once (prevents "Identifier 'total' has already been declared")
const { total, stage, pillarSorted } = computeScores();

// Helper to read a pillar percent safely
const pillar = (id) => pillarSorted.find(p => p.id === id)?.percent ?? 0;

const percentsRounded = {
  process_percent: pillar('process'),
  requirements_percent: pillar('requirements'),
  environment_percent: pillar('environment'),
  automation_percent: pillar('automation'),
  metrics_percent: pillar('metrics'),
  culture_percent: pillar('culture'),
};

const hutk = (document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1]) || "";

const hsUrl =
  "https://api.hsforms.com/submissions/v3/integration/submit/8006059/7555b2f9-be30-46f3-899b-0d0659f84670";

const pillar = (id) => pillarSorted.find(p => p.id === id)?.percent ?? 0;

const hsBody = {
  fields: [
    { name: "email", value: email },

    // Core assessment
    { name: "performance_maturity_score", value: total },
    { name: "performance_maturity_stage", value: stage.label },
    { name: "performance_maturity_opt_in", value: opt_in },

    // Pillar percents
    { name: "performance_maturity_process_percent", value: pillar("process") },
    { name: "performance_maturity_requirements_percent", value: pillar("requirements") },
    { name: "performance_maturity_environment_percent", value: pillar("environment") },
    { name: "performance_maturity_automation_percent", value: pillar("automation") },
    { name: "performance_maturity_metrics_percent", value: pillar("metrics") },
    { name: "performance_maturity_culture_percent", value: pillar("culture") },

    // Attribution / debug
    { name: "performance_maturity_page_url", value: window.location.href.slice(0, 500) },
    { name: "performance_maturity_timestamp", value: new Date().toISOString() },
    { name: "performance_maturity_last_submission", value: "performance-maturity-analyzer" }
  ],

  context: {
    hutk,
    pageUri: window.location.href,
    pageName: document.title || "Performance maturity tool",
  },

  legalConsentOptions: {
    consent: {
      consentToProcess: true,
      text: "I agree to allow Gatling to store and process my personal data.",
      communications: [
        {
          value: opt_in,
          subscriptionTypeId: 9999,
          text: "I agree to receive other communications from Gatling Corp."
        }
      ]
    }
  }
};

  try {
    const [hsRes] = await Promise.all([
      fetchWithTimeout(hsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hsBody),
      }, 8000),

    
    ]);

    if (!hsRes.ok) throw new Error("HubSpot submit failed: " + hsRes.status);

  } catch (e) {
    console.warn("Submit error:", e);
    errEl.textContent = "Something went wrong. Please try again.";
    btn.disabled = false;
    btn.textContent = "See my full results →";
    return;
  }

  showResults();
}
function updateProgress() {
const answered = QUESTIONS.filter(q => answers[q.id] !== undefined).length;
const pct = Math.round((answered / QUESTIONS.length) * 100);
document.getElementById('progressFill').style.width = pct + '%';
document.getElementById('progressPct').textContent = pct + '%';
document.getElementById('progressLabel').textContent = `Question ${Math.min(currentIdx + 1, QUESTIONS.length)} of ${QUESTIONS.length}`;
}
function renderQuestion() {
const q = QUESTIONS[currentIdx];
const pillar = PILLARS.find(p => p.id === q.pillar);
const chosen = answers[q.id];
document.getElementById('pillarLabel').textContent = pillar ? pillar.label : q.pillar;
document.getElementById('qCounter').textContent = `${currentIdx + 1} / ${QUESTIONS.length}`;
document.getElementById('qText').textContent = q.text;
const list = document.getElementById('answersList');
list.innerHTML = q.answers.map((a, i) => `
<button class="answer-btn ${chosen === a.id ? 'selected' : ''}"
onclick="selectAnswer('${a.id}')"
data-id="${a.id}">
<div class="answer-key">${i + 1}</div>
<div class="answer-text">${a.label}</div>
</button>
`).join('');
const isLast = currentIdx === QUESTIONS.length - 1;
const nextBtn = document.getElementById('btnNext');
nextBtn.innerHTML = isLast ? 'Review answers &#8594;' : 'Next &#8594;';
nextBtn.disabled = !chosen;
document.getElementById('btnBack').disabled = currentIdx === 0;
updateProgress();
}
function selectAnswer(id) {
answers[QUESTIONS[currentIdx].id] = id;
document.querySelectorAll('.answer-btn').forEach(btn => {
btn.classList.toggle('selected', btn.dataset.id === id);
btn.querySelector('.answer-key').style.background = btn.dataset.id === id ? 'var(--blue)' : '';
btn.querySelector('.answer-key').style.color = btn.dataset.id === id ? '#fff' : '';
btn.querySelector('.answer-key').style.borderColor = btn.dataset.id === id ? 'var(--blue)' : '';
});
document.getElementById('btnNext').disabled = false;
updateProgress();
}
function goNext() {
if (currentIdx < QUESTIONS.length - 1) {
currentIdx++;
renderQuestion();
} else {
showReview();
}
}
function goBack() {
if (currentIdx > 0) {
currentIdx--;
renderQuestion();
}
}
function skipQuestion() {
if (currentIdx < QUESTIONS.length - 1) {
currentIdx++;
renderQuestion();
} else {
showReview();
}
}
function renderReview() {
const missing = QUESTIONS.filter(q => !answers[q.id]);
const alert = document.getElementById('reviewMissingAlert');
if (missing.length > 0) {
alert.style.display = 'block';
alert.textContent = `You skipped ${missing.length} question${missing.length === 1 ? '' : 's'}. Skipped questions are scored as the lowest level.`;
} else {
alert.style.display = 'none';
}
const list = document.getElementById('reviewList');
list.innerHTML = QUESTIONS.map((q, i) => {
const chosen = answers[q.id];
const chosenLabel = chosen ? q.answers.find(a => a.id === chosen)?.label : '(Skipped)';
return `
<div class="review-row">
<div>
<div class="review-q">${i + 1}. ${q.text}</div>
<div class="review-a">${chosenLabel}</div>
</div>
<button class="review-edit" onclick="jumpToQuestion(${i})">Edit</button>
</div>
`;
}).join('');
}
function jumpToQuestion(i) {
currentIdx = i;
mode = 'question';
renderQuestion();
show('question');
}
function computeScores() {
const buckets = {};
for (const p of PILLARS) buckets[p.id] = { score: 0, max: 0 };
for (const q of QUESTIONS) {
const chosen = answers[q.id];
const ans = q.answers.find(a => a.id === chosen);
const val = ans ? ans.score : 0;
buckets[q.pillar].score += val;
buckets[q.pillar].max += 3;
}
const percents = {};
for (const p of PILLARS) {
const b = buckets[p.id];
percents[p.id] = b.max ? (b.score / b.max) * 100 : 0;
}
let total = 0;
for (const p of PILLARS) total += (percents[p.id] / 100) * p.weight;
const totalRounded = Math.round(total);
const stage = STAGES.find(s => totalRounded >= s.min && totalRounded <= s.max) || STAGES[0];
const pillarSorted = [...PILLARS].map(p => ({
...p,
percent: Math.round(percents[p.id])
})).sort((a, b) => b.percent - a.percent);
const strengths = pillarSorted.slice(0, 2);
const weaknesses = pillarSorted.slice(-3).reverse();
return { total: totalRounded, stage, pillarSorted, strengths, weaknesses };
}
function showResults() {
const { total, stage, pillarSorted, strengths, weaknesses } = computeScores();
mode = 'results';
document.getElementById('resultScore').textContent = total + '/100';
document.getElementById('resultStageLabel').textContent = stage.label;
document.getElementById('resultStageDesc').textContent = stage.desc;
document.getElementById('resultStatText').textContent = stage.stat;
document.getElementById('resultStatSource').textContent = stage.statSource;
const barsEl = document.getElementById('pillarBarsContainer');
barsEl.innerHTML = pillarSorted.map((p, i) => `
<div class="pillar-bar-row">
<div class="pillar-bar-meta">
<span class="pillar-bar-name">${p.label}</span>
<span class="pillar-bar-pct">${p.percent}%</span>
</div>
<div class="pillar-bar-track">
<div class="pillar-bar-fill" data-width="${p.percent}" style="background:${PILLAR_COLORS[i % PILLAR_COLORS.length]}"></div>
</div>
</div>
`).join('');
const fastWins = weaknesses.flatMap(w => (ACTIONS[w.id] || []).slice(0, 1)).slice(0, 3);
const strategic = weaknesses.flatMap(w => (ACTIONS[w.id] || []).slice(1, 2)).slice(0, 3);
const actionEl = document.getElementById('actionPlanContainer');
actionEl.innerHTML = `
<div class="action-section">
<div class="action-section-label fast">Fast wins</div>
<ul class="action-list fast">
${fastWins.map(x => `<li>${x}</li>`).join('')}
</ul>
</div>
<div class="action-section">
<div class="action-section-label strategic">Strategic upgrades</div>
<ul class="action-list strategic">
${strategic.map(x => `<li>${x}</li>`).join('')}
</ul>
</div>
<div class="action-section">
<div class="action-section-label strengths">What you do well</div>
<ul class="action-list">
${strengths.map(s => `<li>${s.label}</li>`).join('')}
</ul>
</div>
`;
const nextStage = STAGES.find(s => s.id === stage.id + 1);
const nextBox = document.getElementById('nextStageBox');
if (nextStage) {
document.getElementById('nextStageName').textContent = nextStage.label;
document.getElementById('nextStageDesc').textContent = nextStage.desc;
nextBox.style.display = 'flex';
} else {
nextBox.style.display = 'none';
}
show('results');
 updateLinkedInBtn();
requestAnimationFrame(() => {
document.querySelectorAll('.pillar-bar-fill[data-width]').forEach(el => {
el.style.width = el.dataset.width + '%';
});
});
}
document.addEventListener('keydown', e => {
if (mode !== 'question') return;
const q = QUESTIONS[currentIdx];
if (['1','2','3','4'].includes(e.key)) {
const a = q.answers[parseInt(e.key) - 1];
if (a) selectAnswer(a.id);
} else if (e.key === 'ArrowLeft' && currentIdx > 0) {
currentIdx--;
renderQuestion();
} else if (e.key === 'Enter' && answers[q.id]) {
goNext();
}
});
const QUIZ_URL = 'https://gatling.io';
const SC_COLORS = ['#FF763C','#4557DD','#F861EE','#FF492C','#FF763C','#4557DD'];
function buildShareCard(){const{total,stage}=computeScores();const si=stage.id-1;const cv=document.getElementById('shareCard');const x=cv.getContext('2d');const W=1200,H=630;x.clearRect(0,0,W,H);const SD=[{n:'1',l:'Stage 1',t1:'Every performance expert',t2:'started here.',b:['You have a baseline to grow from','Awareness is the first step to improvement','Most teams begin exactly where you are']},{n:'2',l:'Stage 2',t1:"You're building something",t2:'that lasts.',b:['Repeatable tests reduce guesswork','Your team shares a common baseline','Performance is becoming part of the process']},{n:'3',l:'Stage 3',t1:'Data drives your decisions.',t2:"That's rare.",b:['Testing is baked into your delivery process','Assertions catch regressions before they ship','Dashboards give your team shared visibility']},{n:'4',l:'Stage 4',t1:"You're in the top tier",t2:'of engineering teams.',b:['Performance is a continuous practice','You prevent incidents before they happen','Your team forecasts and optimizes proactively']}];const ST=[['Initial','ad hoc'],['Defined','repeatable'],['Managed','measured'],['Optimized','continuous']];const sd=SD[si];const bg=x.createLinearGradient(0,0,518,988);bg.addColorStop(0,'#0A0A0F');bg.addColorStop(1,'#0F0F1F');x.fillStyle=bg;x.fillRect(0,0,W,H);const gl=x.createRadialGradient(900,315,0,900,315,720);gl.addColorStop(0,'rgba(69,87,221,.25)');gl.addColorStop(1,'rgba(69,87,221,0)');x.fillStyle=gl;x.fillRect(0,0,W,H);const ng=x.createLinearGradient(235,359,525,359);ng.addColorStop(0,'#4557DD');ng.addColorStop(.5,'#F861EE');ng.addColorStop(1,'#FF763C');x.font='900 480px Arial Black,Arial,sans-serif';x.textAlign='left';x.textBaseline='alphabetic';x.fillStyle=ng;x.globalAlpha=.9;x.fillText(sd.n,220,550);x.globalAlpha=1;const dg=x.createLinearGradient(760,0,760,630);dg.addColorStop(0,'rgba(255,255,255,0)');dg.addColorStop(.2,'rgba(255,255,255,.1)');dg.addColorStop(.8,'rgba(255,255,255,.1)');dg.addColorStop(1,'rgba(255,255,255,0)');x.strokeStyle=dg;x.lineWidth=1;x.beginPath();x.moveTo(760.5,0);x.lineTo(760.5,630);x.stroke();x.fillStyle='white';const LP=["M161.8 44H155.3V77H161.8V44Z","M148 47.3H141.4V54H137.1V60.7H141.4V70.4C141.4 70.5 141.4 70.6 141.4 70.7H141.4C141.4 74.1 144.2 77 147.7 77H153.6V70.7H148V60.7H153.6V54H148V47.3H148Z","M170 54H163.5V77H170V54Z","M170 44H163.5V50.6H170V44Z","M129 55C127.3 54.1 125.4 53.6 123.3 53.6C116.8 53.6 111.5 58.9 111.5 65.5C111.5 72.1 116.8 77.4 123.3 77.4C125.4 77.4 127.3 76.9 129 76V77H135.5V54H129V55V55ZM123.3 71.2C120.2 71.2 117.7 68.6 117.7 65.5C117.7 62.4 120.2 59.8 123.3 59.8C126.4 59.8 129 62.4 129 65.5C129 68.6 126.4 71.2 123.3 71.2Z","M178.2 54C174.6 54 171.7 57 171.7 60.6V77H178.2V60.6H184.8V54H178.2V54V54Z","M191.3 60.6H184.8V76.9H191.3V60.6Z","M210.5 55C208.8 54.1 206.9 53.6 204.9 53.6C198.3 53.6 193 58.9 193 65.5C193 72.1 198.3 77.4 204.9 77.4C206.9 77.4 208.8 76.9 210.5 76V80.7H217V54H210.5V55V55ZM204.9 71.2C201.8 71.2 199.2 68.6 199.2 65.5C199.2 62.4 201.8 59.8 204.9 59.8C208 59.8 210.5 62.4 210.5 65.5C210.5 68.6 208 71.2 204.9 71.2Z","M103.1 57.6H93.2V63.8H103.1V57.6Z","M109.8 63.8V77H103.6V73.8C100.7 76.1 97.1 77.4 93.2 77.4H76.6C71.4 77.4 66.7 75 63.6 71.2H80.2C78.6 69.1 77.4 66.6 76.9 63.8H60.3C60.1 62.8 60 61.8 60 60.7C60 59.6 60.1 58.6 60.3 57.6H76.9C77.4 54.8 78.6 52.4 80.2 50.3H63.6C66.7 46.4 71.4 44 76.6 44H93.2C97.8 44 101.9 45.9 104.9 48.9L100.5 53.3C98.7 51.4 96.1 50.3 93.2 50.3C92.1 50.3 91 50.4 90 50.8C86.8 51.8 84.3 54.4 83.3 57.6C83 58.6 82.8 59.6 82.8 60.7C82.8 61.8 83 62.9 83.3 63.8C84.3 67.1 86.8 69.6 90 70.6C91 71 92.1 71.2 93.2 71.2C97.8 71.2 101.8 68.1 103.1 63.8H109.8V63.8Z","M210.5 87H199.2V80.7H210.5V87Z"];LP.forEach(d=>{x.fill(new Path2D(d))});x.font='700 11px Inter,Arial,sans-serif';x.fillStyle='rgba(255,255,255,.35)';x.textAlign='left';x.textBaseline='alphabetic';x.fillText('PERFORMANCE MATURITY',60,184);x.font='900 72px Arial Black,Arial,sans-serif';x.fillStyle='white';x.fillText(sd.l,60,262);const ag=x.createLinearGradient(60,420,160,420);ag.addColorStop(0,'#4557DD');ag.addColorStop(.5,'#F861EE');ag.addColorStop(1,'#FF763C');x.fillStyle=ag;x.fillRect(60,419,100,2);x.font='700 22px Inter,Arial,sans-serif';x.fillStyle='rgba(255,255,255,.9)';x.fillText(sd.t1,60,330);x.fillText(sd.t2,60,358);const wg=x.createLinearGradient(60,412,160,412);wg.addColorStop(0,'#4557DD');wg.addColorStop(.5,'#F861EE');wg.addColorStop(1,'#FF763C');x.font='700 10px Inter,Arial,sans-serif';x.fillStyle=wg;x.fillText('WHAT THIS MEANS',60,412);sd.b.forEach((b,i)=>{const y=444+i*36;x.beginPath();x.arc(63,y-5,3.5,0,Math.PI*2);x.fillStyle='#4557DD';x.fill();x.font='500 16px Inter,Arial,sans-serif';x.fillStyle='rgba(255,255,255,.75)';x.textAlign='left';x.textBaseline='alphabetic';x.fillText(b,80,y)});x.font='700 10px Inter,Arial,sans-serif';x.fillStyle='rgba(255,255,255,.35)';x.fillText('YOUR STAGE',822,164);const SY=[200,296,380,466];SY.forEach((y,i)=>{const act=i===si;if(i<3){x.beginPath();x.moveTo(820,y+15);x.lineTo(820,SY[i+1]-15);x.setLineDash([3,3]);x.strokeStyle='rgba(255,255,255,.15)';x.lineWidth=1.5;x.stroke();x.setLineDash([])}if(act){const dg2=x.createRadialGradient(820,y,0,820,y,14);dg2.addColorStop(0,'#4557DD');dg2.addColorStop(1,'#6C4DD8');x.beginPath();x.arc(820,y,14,0,Math.PI*2);x.fillStyle=dg2;x.fill();x.beginPath();x.arc(820,y,14.75,0,Math.PI*2);x.strokeStyle='#F861EE';x.lineWidth=1.5;x.stroke();x.font='800 11px Inter,Arial,sans-serif';x.fillStyle='white';x.textAlign='center';x.textBaseline='middle';x.fillText(i+1,820,y);x.textAlign='left';x.textBaseline='alphabetic';x.font='800 16px Inter,Arial,sans-serif';x.fillStyle='white';x.fillText(ST[i][0],860,y-2);x.font='400 12px Inter,Arial,sans-serif';x.fillStyle='rgba(255,255,255,.6)';x.fillText(ST[i][1],860,y+16)}else{x.beginPath();x.arc(820,y,10,0,Math.PI*2);x.strokeStyle='rgba(255,255,255,.2)';x.lineWidth=1.5;x.stroke();x.font='400 10px Inter,Arial,sans-serif';x.fillStyle='rgba(255,255,255,.3)';x.textAlign='center';x.textBaseline='middle';x.fillText(i+1,820,y);x.textAlign='left';x.textBaseline='alphabetic';x.font='400 14px Inter,Arial,sans-serif';x.fillStyle='rgba(255,255,255,.3)';x.fillText(ST[i][0],860,y-2);x.font='400 11px Inter,Arial,sans-serif';x.fillStyle='rgba(255,255,255,.2)';x.fillText(ST[i][1],860,y+15)}});x.font='700 11px Inter,Arial,sans-serif';x.fillStyle='rgba(255,255,255,.6)';x.textAlign='left';x.textBaseline='alphabetic';x.fillText('SEE YOUR MATURITY STAGE AT',782,571);const ug=x.createLinearGradient(782,594,1156,594);ug.addColorStop(0,'#4557DD');ug.addColorStop(.5,'#F861EE');ug.addColorStop(1,'#FF763C');x.font='400 11px Inter,Arial,sans-serif';x.fillStyle=ug;x.fillText('GATLING.IO/RESOURCES/PERFORMANCE-MATURITY-ANALYZER',782,592)}
function downloadCard(){buildShareCard();const cv=document.getElementById('shareCard');const a=document.createElement('a');a.download='maturity-score.png';a.href=cv.toDataURL('image/png');a.click()}
function updateLinkedInBtn() {
 const {total, stage} = computeScores();
 const text = 'My Gatling maturity score: ' + total + '/100 — ' + stage.label + '.\n\nFind out your team’s stage → ' + QUIZ_URL;
 const btn = document.getElementById('liBtn');
 if (btn) btn.href = 'https://www.linkedin.com/feed/?shareActive=true&text=' + encodeURIComponent(text);
}
window.startQuiz = startQuiz;
window.resetQuiz = resetQuiz;
window.goNext = goNext;
window.goBack = goBack;
window.skipQuestion = skipQuestion;
window.showGate = showGate;
window.showReview = showReview;
window.submitGate = submitGate;
window.downloadCard = downloadCard;

