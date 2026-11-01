import { beforeAll, describe, test } from "vitest";
import { answerSets, loadMaturity } from "./load-maturity.js";

let tool;
let sets;

beforeAll(() => {
  tool = loadMaturity();
  sets = answerSets(tool.QUESTIONS);
});

describe("computeScores", () => {
  test("answer sets", async ({ bench }) => {
    await bench.compare(
      ...["empty", "mixed", "best"].map((name) =>
        bench(`computeScores (${name} answers)`, () => {
          tool.setAnswers(sets[name]);
          tool.computeScores();
        }),
      ),
    );
  });

  test("single-question variations", async ({ bench }) => {
    await bench("computeScores (all single-question variations)", () => {
      for (const q of tool.QUESTIONS) {
        for (const a of q.answers) {
          tool.setAnswers({ ...sets.mixed, [q.id]: a.id });
          tool.computeScores();
        }
      }
    }).run();
  });
});

describe("quiz flow", () => {
  test("question screens", async ({ bench }) => {
    await bench.compare(
      bench("renderQuestion (walk through all questions)", () => {
        tool.setAnswers(sets.mixed);
        for (let i = 0; i < tool.QUESTIONS.length; i++) {
          tool.setCurrentIdx(i);
          tool.renderQuestion();
        }
      }),
      bench("selectAnswer (answer every question)", () => {
        tool.setAnswers({});
        for (let i = 0; i < tool.QUESTIONS.length; i++) {
          tool.setCurrentIdx(i);
          tool.renderQuestion();
          tool.selectAnswer(tool.QUESTIONS[i].answers[i % 4].id);
        }
      }),
    );
  });

  test("review and gate screens", async ({ bench }) => {
    await bench.compare(
      bench("renderReview (with skipped questions)", () => {
        tool.setAnswers({ q1: "a", q4: "c", q8: "d" });
        tool.renderReview();
      }),
      bench("showGate (teaser screen)", () => {
        tool.setAnswers(sets.mixed);
        tool.showGate();
      }),
    );
  });

  test("results screen", async ({ bench }) => {
    await bench.compare(
      ...["worst", "mixed", "best"].map((name) =>
        bench(`showResults (${name} answers)`, () => {
          tool.setAnswers(sets[name]);
          tool.showResults();
        }),
      ),
    );
  });
});
