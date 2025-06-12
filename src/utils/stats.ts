import type { IStats, ISubject } from "./types";

type Category = {
  score: number;
  time: number;
  questionCount: number;
};
// Mastery Score by Category
export function getMasteryScoresByCategory({
  score,
  time,
  questionCount,
}: Category) {
  const accuracy = score / questionCount;
  const avgTime = time / questionCount;
  const timePenalty = Math.min(avgTime / 60, 1);
  const mastery = accuracy * (1 - timePenalty);

  return Math.round(mastery * 100);
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

// Best and Worst of a stats category
export function getBestAndWorst(stats: IStats, subject: ISubject) {
  const categoryEntries = Object.entries(stats[subject].categoryStats);

  if (categoryEntries.length === 0)
    return { categoryResult: { best: "No data", worst: "No Data" } };

  const sortedCategory = categoryEntries.sort(
    (a, b) => b[1].score - a[1].score
  );

  return {
    categoryResult: {
      best: sortedCategory[0][0],
      worst: sortedCategory[sortedCategory.length - 1][0],
    },
  };
}

export function getTotalQuestionCount(stats: IStats, subject: ISubject) {
  let totalQuestionCount = 0;
  const categoryStats = stats?.[subject]?.categoryStats;

  if (!categoryStats) return 0;

  for (const category in categoryStats) {
    const { questionCount = 0 } = categoryStats[category];
    totalQuestionCount += questionCount;
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
