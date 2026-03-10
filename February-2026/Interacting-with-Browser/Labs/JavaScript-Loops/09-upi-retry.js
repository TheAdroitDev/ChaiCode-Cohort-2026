/**
 * 💸 Bunty ka UPI Payment Retry
 *
 * Bunty apne dost ko paise bhej raha hai UPI se, lekin network thoda
 * flaky hai. Payment kabhi success hota hai, kabhi fail. Bunty ka app
 * automatically retry karta hai with exponential backoff.
 *
 * Rules (use do...while loop):
 *   - outcomes is an array of strings: "success" or "fail"
 *   - ALWAYS attempt at least once (that's why do...while!)
 *   - outcomes[0] is the result of attempt 1, outcomes[1] is attempt 2, etc.
 *   - If the attempt is "success", stop immediately
 *   - If the attempt is "fail", add wait time and try again
 *   - Wait times follow exponential backoff: 1s, 2s, 4s, 8s
 *     (wait time is added AFTER a failed attempt, before next retry)
 *   - Maximum 5 attempts total (if all fail, stop after 5th)
 *   - totalWaitTime = sum of all wait times between attempts
 *
 * Validation:
 *   - Agar outcomes array nahi hai ya empty hai,
 *     return: { attempts: 0, success: false, totalWaitTime: 0 }
 *
 * @param {string[]} outcomes - Array of "success" or "fail" for each attempt
 * @returns {{ attempts: number, success: boolean, totalWaitTime: number }}
 *
 * @example
 *   upiRetry(["fail", "fail", "success"])
 *   // Attempt 1: fail, wait 1s
 *   // Attempt 2: fail, wait 2s
 *   // Attempt 3: success!
 *   // => { attempts: 3, success: true, totalWaitTime: 3 }
 *
 *   upiRetry(["fail", "fail", "fail", "fail", "fail", "fail"])
 *   // 5 attempts all fail, wait: 1+2+4+8 = 15s (no wait after last)
 *   // => { attempts: 5, success: false, totalWaitTime: 15 }
 */
export function upiRetry(outcomes) {
  // Validation
  if (!Array.isArray(outcomes) || outcomes.length === 0) {
    return { attempts: 0, success: false, totalWaitTime: 0 };
  }

  let attempts = 0;
  let success = false;
  let totalWaitTime = 0;
  const maxAttempts = 5;
  const waitTimes = [1, 2, 4, 8]; // Exponential backoff in seconds

  let i = 0;

  // Use do...while loop to ensure at least one attempt
  do {
    // Make an attempt
    if (i < outcomes.length && outcomes[i] === 'success') {
      success = true;
      attempts++;
      break;
    } else if (i < outcomes.length && outcomes[i] === 'fail') {
      attempts++;
      // Add wait time only if not the last attempt
      if (attempts < maxAttempts && i < waitTimes.length) {
        totalWaitTime += waitTimes[i];
      }
    } else if (i >= outcomes.length) {
      // No more outcomes to check, but we still tried
      attempts++;
      break;
    }

    i++;
  } while (attempts < maxAttempts && i < outcomes.length && !success);

  return { attempts, success, totalWaitTime };
}
