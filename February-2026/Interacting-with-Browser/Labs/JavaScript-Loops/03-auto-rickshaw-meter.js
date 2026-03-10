/**
 * 🛺 Pappu ka Auto Rickshaw Meter (Mumbai Style)
 *
 * Pappu auto chalata hai Mumbai mein. Uska meter thoda unique hai - distance
 * ke hisaab se rate change hota hai. Aur agar passenger ne waiting karaya,
 * toh uska bhi charge lagta hai.
 *
 * Fare calculation (use while loop, process km by km):
 *   - First 1 km (minimum fare): Rs 30
 *   - Km 2 to 5 (i.e., next 4 km): Rs 15 per km
 *   - Beyond 5 km: Rs 10 per km
 *   - Distance ko Math.ceil() karo (e.g., 3.2 km = 4 km charge)
 *
 * Waiting charges:
 *   - Rs 5 per 2 minutes of waiting
 *   - Waiting minutes ko bhi Math.ceil() karo for pairs
 *     (e.g., 3 min = 2 pairs = Rs 10, 5 min = 3 pairs = Rs 15)
 *   - If waitingMinutes is not provided, default is 0
 *
 * Validation:
 *   - Agar distance ek positive number nahi hai, return -1
 *   - Agar waitingMinutes negative hai, return -1
 *
 * @param {number} distance - Distance in kilometers
 * @param {number} [waitingMinutes=0] - Waiting time in minutes
 * @returns {number} Total fare in rupees, or -1 for invalid input
 *
 * @example
 *   calculateAutoFare(3)    // => 60  (30 + 15 + 15)
 *   calculateAutoFare(7, 4) // => 120 (30 + 60 + 20 + 10)
 *   calculateAutoFare(0.5)  // => 30  (ceil to 1 km = minimum fare)
 *   calculateAutoFare(-2)   // => -1
 */
export function calculateAutoFare(distance, waitingMinutes = 0) {
  // Validation
  if (typeof distance !== 'number' || distance <= 0 || !Number.isFinite(distance)) {
    return -1;
  }
  if (waitingMinutes < 0 || typeof waitingMinutes !== 'number') {
    return -1;
  }

  // Ceil the distance to nearest km
  const ceiledDistance = Math.ceil(distance);

  let fare = 0;
  let kmProcessed = 0;

  // First 1 km: Rs 30
  if (ceiledDistance >= 1) {
    fare += 30;
    kmProcessed = 1;
  }

  // Km 2 to 5: Rs 15 per km
  if (ceiledDistance > 1) {
    const km2to5 = Math.min(ceiledDistance, 5) - 1;
    fare += km2to5 * 15;
    kmProcessed = Math.min(ceiledDistance, 5);
  }

  // Beyond 5 km: Rs 10 per km
  if (ceiledDistance > 5) {
    const beyondKm5 = ceiledDistance - 5;
    fare += beyondKm5 * 10;
  }

  // Waiting charges: Rs 5 per 2 minutes
  const waitingPairs = Math.ceil(waitingMinutes / 2);
  const waitingCharge = waitingPairs * 5;

  return fare + waitingCharge;
}
