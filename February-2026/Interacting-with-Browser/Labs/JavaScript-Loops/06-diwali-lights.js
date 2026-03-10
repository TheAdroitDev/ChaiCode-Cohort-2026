/**
 * 🪔 Sharma ji ki Diwali Decoration
 *
 * Sharma ji apne ghar ko Diwali pe sajana chahte hain light strings se.
 * Unke paas ek budget hai aur market mein alag alag colors ki light strings
 * hain different lengths mein. Sharma ji sab kuch lena chahte hain, lekin
 * budget se zyada nahi!
 *
 * Color rates (per meter):
 *   - "golden" = Rs 50/meter
 *   - "multicolor" = Rs 40/meter
 *   - "white" = Rs 30/meter
 *   - Any other color = Rs 35/meter
 *
 * Rules:
 *   Step 1 - Use for...of to loop through lightStrings and add ALL of them
 *     to selected list with their cost calculated
 *   Step 2 - Use a while loop to check: agar totalCost > budget, toh remove
 *     the LAST item from selected, subtract its cost, and keep removing until
 *     totalCost <= budget
 *
 * @param {Array<{color: string, length: number}>} lightStrings - Available light strings
 * @param {number} budget - Sharma ji ka budget in rupees
 * @returns {{ selected: Array<{color: string, length: number, cost: number}>, totalLength: number, totalCost: number }}
 *
 * Validation:
 *   - Agar lightStrings array nahi hai ya budget positive number nahi hai,
 *     return: { selected: [], totalLength: 0, totalCost: 0 }
 *
 * @example
 *   diwaliLightsPlan(
 *     [{ color: "golden", length: 5 }, { color: "white", length: 10 }, { color: "multicolor", length: 3 }],
 *     400
 *   )
 *   // golden: 5*50=250, white: 10*30=300, multicolor: 3*40=120
 *   // Total = 670 > 400, remove multicolor (670-120=550), still > 400,
 *   // remove white (550-300=250), 250 <= 400
 *   // => { selected: [{ color: "golden", length: 5, cost: 250 }], totalLength: 5, totalCost: 250 }
 */
export function diwaliLightsPlan(lightStrings, budget) {
  // Validation
  if (!Array.isArray(lightStrings) || typeof budget !== 'number' || budget <= 0) {
    return { selected: [], totalLength: 0, totalCost: 0 };
  }

  const selected = [];
  let totalCost = 0;
  let totalLength = 0;

  // Step 1: Use for...of to add all light strings with costs
  for (const lightString of lightStrings) {
    const { color, length } = lightString;

    // Calculate cost per meter based on color
    let costPerMeter;
    switch (color) {
      case 'golden':
        costPerMeter = 50;
        break;
      case 'multicolor':
        costPerMeter = 40;
        break;
      case 'white':
        costPerMeter = 30;
        break;
      default:
        costPerMeter = 35;
    }

    const cost = length * costPerMeter;
    selected.push({ color, length, cost });
    totalCost += cost;
    totalLength += length;
  }

  // Step 2: Use while loop to remove items if over budget
  while (totalCost > budget && selected.length > 0) {
    // Remove the last item
    const removedItem = selected.pop();
    totalCost -= removedItem.cost;
    totalLength -= removedItem.length;
  }

  return { selected, totalLength, totalCost };
}
