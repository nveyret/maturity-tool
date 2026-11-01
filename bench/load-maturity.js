// Loads the browser-only maturity.js script into the current (happy-dom)
// environment, backed by the real assessment page markup, and exposes its
// internal functions and state so they can be benchmarked.
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(`${root}/Code_Performance_Maturity_Assessment`, "utf8");
const source = readFileSync(`${root}/maturity.js`, "utf8");

export function loadMaturity() {
  // Use the page body without its <script> tags (the tool script is evaluated below).
  const body = html
    .slice(html.indexOf("<body"), html.lastIndexOf("</body>"))
    .replace(/^<body[^>]*>/, "")
    .replace(/<script[\s\S]*?<\/script>/g, "");
  document.body.innerHTML = body;

  // jsdom-like environments do not implement smooth scrolling or a 2D canvas.
  window.scrollTo = () => {};
  globalThis.requestAnimationFrame = (cb) => cb();

  const factory = new Function(
    `${source}
return {
  PILLARS, QUESTIONS, STAGES,
  computeScores, renderQuestion, renderReview, showGate, showResults,
  selectAnswer, updateLinkedInBtn,
  setAnswers(next) { answers = next; },
  setCurrentIdx(i) { currentIdx = i; },
};`,
  );
  return factory();
}

// Deterministic answer sets covering every maturity stage.
export function answerSets(QUESTIONS) {
  const pick = (fn) =>
    Object.fromEntries(QUESTIONS.map((q, i) => [q.id, q.answers[fn(i)].id]));
  return {
    empty: {},
    worst: pick(() => 0),
    mixed: pick((i) => (i * 7 + 3) % 4),
    best: pick(() => 3),
  };
}
