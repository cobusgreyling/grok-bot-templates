/**
 * Bot Ready score — 100 points.
 * Inspired by Loop Ready: files on disk are not enough; the contract has to
 * be operational. Week-one templates should land at L1 with a score >= 80.
 */

const AUTONOMY_NOTE = {
  L0: "Observe. Report only.",
  L1: "Draft. Never send, post, pay, merge, or change production.",
  L2: "Approved action. Named writes only after in-chat approval.",
  L3: "Scheduled. Routine may run the skill; writes still follow never-list.",
};

export function scoreTemplate(t) {
  const checks = [];
  const add = (id, points, ok, detail) => {
    checks.push({ id, points, earned: ok ? points : 0, ok, detail });
  };

  add(
    "job",
    10,
    typeof t.job === "string" && t.job.trim().length >= 60 && !/general helper/i.test(t.job),
    "One-sentence job, not a catch-all helper"
  );
  add(
    "sources",
    10,
    Array.isArray(t.sources) && t.sources.length >= 1,
    "Named sources / connectors"
  );
  add(
    "boundary",
    15,
    Array.isArray(t.approval_never) && t.approval_never.length >= 3,
    "Standing never-do list in the description"
  );
  add(
    "deliverable",
    10,
    typeof t.deliverable === "string" && t.deliverable.length >= 40,
    "Reviewable deliverable format"
  );
  add(
    "first_task",
    10,
    typeof t.first_task === "string" && t.first_task.length >= 40,
    "Concrete first task"
  );
  add(
    "skill",
    10,
    Array.isArray(t.skills) && t.skills.length >= 1,
    "At least one named skill to save after the first success"
  );
  add(
    "no_data",
    5,
    typeof t.no_data === "string" && /not|missing|unavailable|say so/i.test(t.no_data),
    "No-data / stale-data policy"
  );
  add(
    "autonomy",
    5,
    ["L0", "L1", "L2", "L3"].includes(t.autonomy),
    `Autonomy ${t.autonomy || "?"} — ${AUTONOMY_NOTE[t.autonomy] || ""}`
  );
  add(
    "example",
    5,
    typeof t.example_first_run === "string" && t.example_first_run.length >= 80,
    "Example first-run artifact"
  );
  const routineOk =
    t.autonomy !== "L3" ||
    (t.routine && t.routine.cadence && t.routine.skill);
  add(
    "routine_discipline",
    5,
    routineOk,
    "Routine only when cadence + skill exist (L3) or omitted (L0–L2)"
  );
  add(
    "share_safe",
    10,
    t.share_safe === true,
    "Share-safe: no secrets, customer data, or internal URLs"
  );
  add(
    "style",
    5,
    Array.isArray(t.working_style) && t.working_style.length >= 4,
    "Working-style bullets (how, not vibes)"
  );

  const earned = checks.reduce((s, c) => s + c.earned, 0);
  const max = checks.reduce((s, c) => s + c.points, 0);
  let grade = "F";
  if (earned >= 90) grade = "A";
  else if (earned >= 80) grade = "B";
  else if (earned >= 70) grade = "C";
  else if (earned >= 60) grade = "D";

  return {
    id: t.id,
    name: t.name,
    autonomy: t.autonomy,
    earned,
    max,
    grade,
    ready: earned >= 80 && ["L0", "L1", "L2", "L3"].includes(t.autonomy),
    checks,
  };
}

export function scoreAll(templates) {
  return templates.map(scoreTemplate);
}
