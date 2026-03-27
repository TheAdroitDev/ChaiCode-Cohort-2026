/**
 * 🪷 Durga Puja Pandal - data-* Attributes & dataset
 *
 * Durga Puja pandal decoration tracker bana rahe hain! Har pandal ka data
 * attributes mein info store hai - naam, zone, theme, budget, rating.
 * HTML5 data-* attributes aur JavaScript dataset API use karke pandal
 * elements create karo, read karo, update karo, filter karo. Jaise Kolkata
 * mein har gali mein alag pandal hota hai, waise hi DOM mein har element
 * apna data rakhta hai.
 *
 * Functions:
 *
 *   1. createPandalElement(pandal)
 *      - Takes { name, zone, theme, budget, rating } object
 *      - Creates div with class "pandal"
 *      - Sets data attributes using dataset:
 *        data-name, data-zone, data-theme, data-budget, data-rating
 *      - Sets textContent to pandal name
 *      - Returns the element
 *      - Agar pandal null/undefined or missing required fields, return null
 *      - All fields are required: name(string), zone(string), theme(string),
 *        budget(number), rating(number)
 *
 *   2. getPandalInfo(element)
 *      - Reads dataset from element
 *      - Returns {
 *          name: dataset.name,
 *          zone: dataset.zone,
 *          theme: dataset.theme,
 *          budget: Number(dataset.budget),
 *          rating: Number(dataset.rating)
 *        }
 *      - Agar element null/undefined, return null
 *
 *   3. updatePandalRating(element, newRating)
 *      - Updates element's data-rating attribute
 *      - Returns old rating as number
 *      - Validation: newRating must be number between 0 and 5 (inclusive)
 *      - Agar invalid rating, return null (don't update)
 *      - Agar element null/undefined, return null
 *
 *   4. filterPandalsByZone(container, zone)
 *      - Finds all .pandal children of container
 *      - Returns array of elements where data-zone matches zone string
 *      - Agar container null/undefined, return []
 *      - Agar zone not string, return []
 *
 *   5. getPandalsByBudgetRange(container, min, max)
 *      - Returns array of .pandal elements where data-budget value
 *        is between min and max (inclusive)
 *      - Budget values are compared as numbers
 *      - Agar container null/undefined, return []
 *      - Agar min or max not numbers, return []
 *
 *   6. sortPandalsByRating(container)
 *      - Gets all .pandal children of container
 *      - Sorts them by data-rating in DESCENDING order (highest first)
 *      - Re-appends them to container in sorted order
 *        (moving existing elements re-orders them in DOM)
 *      - Returns array of the sorted elements
 *      - Agar container null/undefined, return []
 *
 * Hint: element.dataset.name se data-name access hota hai.
 *   element.dataset.name = "value" se set hota hai.
 *   querySelectorAll(".pandal") se saare pandals milte hain.
 *   dataset values are always strings, number conversion zaroori hai.
 *
 * @example
 *   const pandal = createPandalElement({
 *     name: "Baghbazar Sarbojonin",
 *     zone: "North",
 *     theme: "Traditional",
 *     budget: 5000000,
 *     rating: 4.5
 *   });
 *   // => <div class="pandal" data-name="Baghbazar Sarbojonin"
 *   //      data-zone="North" data-theme="Traditional"
 *   //      data-budget="5000000" data-rating="4.5">
 *   //      Baghbazar Sarbojonin
 *   //    </div>
 *
 *   getPandalInfo(pandal);
 *   // => { name: "Baghbazar Sarbojonin", zone: "North",
 *   //      theme: "Traditional", budget: 5000000, rating: 4.5 }
 *
 *   updatePandalRating(pandal, 4.8);
 *   // => 4.5 (old rating returned)
 *
 *   filterPandalsByZone(container, "North");
 *   // => [pandal1, pandal3] (elements with data-zone="North")
 */
export function createPandalElement(pandal) {
  if (
    !pandal ||
    typeof pandal.name !== "string" ||
    typeof pandal.zone !== "string" ||
    typeof pandal.theme !== "string" ||
    typeof pandal.budget !== "number" ||
    typeof pandal.rating !== "number"
  ) {
    return null;
  }

  const div = document.createElement("div");
  div.classList.add("pandal");

  div.dataset.name = pandal.name;
  div.dataset.zone = pandal.zone;
  div.dataset.theme = pandal.theme;
  div.dataset.budget = String(pandal.budget);
  div.dataset.rating = String(pandal.rating);

  div.textContent = pandal.name;

  return div;
}

export function getPandalInfo(element) {
  if (!element) return null;

  return {
    name: element.dataset.name,
    zone: element.dataset.zone,
    theme: element.dataset.theme,
    budget: Number(element.dataset.budget),
    rating: Number(element.dataset.rating)
  };
}

export function updatePandalRating(element, newRating) {
  if (!element) return null;
  if (typeof newRating !== "number" || newRating < 0 || newRating > 5) {
    return null;
  }

  const old = Number(element.dataset.rating);
  element.dataset.rating = String(newRating);

  return old;
}

export function filterPandalsByZone(container, zone) {
  if (!container || typeof zone !== "string") return [];

  const list = container.querySelectorAll(".pandal");
  const result = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].dataset.zone === zone) {
      result.push(list[i]);
    }
  }

  return result;
}

export function getPandalsByBudgetRange(container, min, max) {
  if (!container) return [];
  if (typeof min !== "number" || typeof max !== "number") return [];

  const list = container.querySelectorAll(".pandal");
  const result = [];

  for (let i = 0; i < list.length; i++) {
    const budget = Number(list[i].dataset.budget);

    if (budget >= min && budget <= max) {
      result.push(list[i]);
    }
  }

  return result;
}

export function sortPandalsByRating(container) {
  if (!container) return [];

  const list = Array.from(container.querySelectorAll(".pandal"));

  list.sort((a, b) => {
    return Number(b.dataset.rating) - Number(a.dataset.rating);
  });

  for (let i = 0; i < list.length; i++) {
    container.appendChild(list[i]);
  }

  return list;
}