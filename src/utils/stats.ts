import type { IStats, ISubject } from "./types";

// Accuracy by Category
export function getAccuracyByCategory(stats: IStats, subject: ISubject) {
  const categoryStats = stats?.[subject]?.categoryStats;
  if (!categoryStats) return {};

  const result: { [key: string]: number } = {};

  for (const category in categoryStats) {
    const { score = 0, questionCount = 0 } = categoryStats[category] || {};
    result[category] = questionCount > 0 ? (score / questionCount) * 100 : 0;
  }

  return result;
}

// Accuracy by Difficulty
export function getAccuracyByDifficulty(stats: IStats, subject: ISubject) {
  const difficultyStats = stats?.[subject]?.difficultyStats;
  if (!difficultyStats) return {};

  const result: { [key: string]: number } = {};

  for (const difficulty in difficultyStats) {
    const { score = 0, questionCount = 0 } = difficultyStats[difficulty] || {};
    result[difficulty] = questionCount > 0 ? (score / questionCount) * 100 : 0;
  }

  return result;
}

// Mastery Score by Category
export function getMasteryScoresByCategory(stats: IStats, subject: ISubject) {
  const categoryStats = stats?.[subject]?.categoryStats;
  if (!categoryStats) return {};

  const result: { [key: string]: number } = {};

  for (const category in categoryStats) {
    const {
      score = 0,
      questionCount = 0,
      time = 0,
    } = categoryStats[category] || {};
    if (questionCount === 0) {
      result[category] = 0;
      continue;
    }

    const accuracy = score / questionCount;
    const avgTime = time / questionCount;
    const timePenalty = Math.min(avgTime / 60, 1);
    const mastery = accuracy * (1 - timePenalty);

    result[category] = mastery * 100;
  }

  return result;
}

// Mastery Score by Difficulty
export function getMasteryScoresByDifficulty(stats: IStats, subject: ISubject) {
  const difficultyStats = stats?.[subject]?.difficultyStats;
  if (!difficultyStats) return {};

  const result: { [key: string]: number } = {};

  for (const difficulty in difficultyStats) {
    const {
      score = 0,
      questionCount = 0,
      time = 0,
    } = difficultyStats[difficulty] || {};
    if (questionCount === 0) {
      result[difficulty] = 0;
      continue;
    }

    const accuracy = score / questionCount;
    const avgTime = time / questionCount;
    const timePenalty = Math.min(avgTime / 60, 1);
    const mastery = accuracy * (1 - timePenalty);

    result[difficulty] = mastery * 100;
  }

  return result;
}

// Overall Accuracy Per Subject
export function getOverallAccuracy(stats: IStats, subject: ISubject): number {
  const categoryStats = stats?.[subject]?.categoryStats;
  if (!categoryStats) return 0;

  let totalScore = 0;
  let totalQuestions = 0;

  for (const category in categoryStats) {
    const { score = 0, questionCount = 0 } = categoryStats[category];
    totalScore += score;
    totalQuestions += questionCount;
  }

  return totalQuestions > 0 ? (totalScore / totalQuestions) * 100 : 0;
}

// Best and Worst of a stat object (e.g., category accuracy or difficulty mastery)
export function getBestAndWorst(statMap: { [key: string]: number }) {
  const entries = Object.entries(statMap);
  if (entries.length === 0) return { best: null, worst: null };

  const sorted = entries.sort((a, b) => b[1] - a[1]);

  return {
    best: sorted[0][0],
    worst: sorted[sorted.length - 1][0],
  };
}

export function getTotalQuestionCount(stats: IStats) {
  let totalQuestionCount = 0;
  for (const subject in stats) {
    const categoryStats = stats?.[subject]?.categoryStats;
    if (!categoryStats) return 0;

    for (const category in categoryStats) {
      const { questionCount = 0 } = categoryStats[category];
      totalQuestionCount += questionCount;
    }
  }
  return totalQuestionCount;
}

export function getOverAllMaxStreak(stats: IStats) {
  let maxStreakCount = 0;
  for (const subject in stats) {
    maxStreakCount = Math.max(stats?.[subject]?.maxStreakCount, maxStreakCount);
  }
  return maxStreakCount;
}
