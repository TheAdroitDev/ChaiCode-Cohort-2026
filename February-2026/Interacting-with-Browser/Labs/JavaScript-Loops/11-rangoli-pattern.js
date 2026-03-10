/**
 * 🎨 Priya ki Diwali Rangoli
 *
 * Priya Diwali pe rangoli banati hai. Uska pattern ek diamond shape mein
 * hota hai stars (*) ka. Tu usse help kar pattern generate karne mein!
 *
 * Rules (use nested for loops):
 *   - Input n determines the size of the diamond
 *   - The diamond has 2n - 1 rows total
 *   - Row i (1-indexed) of the top half has i stars
 *   - Row i of the bottom half mirrors the top
 *   - Stars are separated by a single space
 *   - Each row has leading spaces for center alignment
 *   - The widest row has n stars: "* * * ... *" (2n-1 chars wide)
 *   - No trailing spaces on any row
 *
 * Pattern for n=3:
 *     *
 *   * *
 *   * * *
 *   * *
 *     *
 *
 * (Each row is a string in the returned array)
 *
 * Validation:
 *   - Agar n positive integer nahi hai (0, negative, decimal, non-number),
 *     return empty array []
 *
 * @param {number} n - Size of the diamond (number of stars in the widest row)
 * @returns {string[]} Array of strings forming the diamond pattern
 *
 * @example
 *   rangoli(1) // => ["*"]
 *   rangoli(2) // => [" *", "* *", " *"]
 *   rangoli(3) // => ["  *", " * *", "* * *", " * *", "  *"]
 */
export function rangoli(n) {
  // Validation: n must be a positive integer
  if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
    return [];
  }

  const result = [];
  const totalRows = 2 * n - 1;

  // Generate all rows
  for (let row = 1; row <= totalRows; row++) {
    // Determine number of stars for this row
    let starsInRow;
    if (row <= n) {
      starsInRow = row;
    } else {
      // Mirror the top half
      starsInRow = totalRows - row + 1;
    }

    // Build the row string
    let rowString = '';

    // Generate stars separated by spaces
    for (let star = 0; star < starsInRow; star++) {
      if (star > 0) {
        rowString += ' ';
      }
      rowString += '*';
    }

    // Add leading spaces for center alignment
    // The widest row has n stars: "* * * ... *" 
    // which has 2*n-1 characters (n stars + (n-1) spaces)
    const widthOfWidestRow = 2 * n - 1;
    const widthOfCurrentRow = 2 * starsInRow - 1;
    const leadingSpaces = (widthOfWidestRow - widthOfCurrentRow) / 2;

    rowString = ' '.repeat(leadingSpaces) + rowString;

    result.push(rowString);
  }

  return result;
}
