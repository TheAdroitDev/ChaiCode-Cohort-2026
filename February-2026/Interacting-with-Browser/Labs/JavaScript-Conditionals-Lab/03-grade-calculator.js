/**
 * 📝 Ms. Parker's Report Cards
 *
 * Ms. Parker teaches 8th-grade science and needs help converting
 * percentage scores into letter grades for report cards. She also
 * rewards students who earned extra credit by adding 5 bonus points
 * to their score — but the final score can never go above 100.
 *
 * Grading Scale:
 *   - 90–100 → "A"
 *   - 80–89  → "B"
 *   - 70–79  → "C"
 *   - 60–69  → "D"
 *   - 0–59   → "F"
 *
 * Rules:
 *   - Check validity FIRST: if the original score is less than 0
 *     or greater than 100, return "INVALID"
 *   - If hasExtraCredit is true, add 5 points AFTER validation
 *     (cap the result at 100)
 *   - Then determine the letter grade from the adjusted score
 *
 * @param {number} score - The student's percentage score (0-100)
 * @param {boolean} hasExtraCredit - Whether the student has extra credit
 * @returns {string} The letter grade or "INVALID"
 */
export function calculateGrade(score, hasExtraCredit) {
  // Your code here
  if (score < 0 || score > 100) {
    return "INVALID"
  }

  let finalScore = score;
  if (hasExtraCredit === true) {
    finalScore += 5
  }

  // cap at 100
  if (finalScore > 100) {
    finalScore = 100
  }

  if (finalScore >= 90 && finalScore <= 100) {
    return "A"
  }
  else if (finalScore >= 80 && finalScore <= 89) {
    return "B"
  }
  else if (finalScore >= 70 && finalScore <= 79) {
    return "C"
  }
  else if (finalScore >= 60 && finalScore <= 69) {
    return "D"
  }
  else if (finalScore >= 0 && finalScore <= 59){
    return "F"
  }
}
