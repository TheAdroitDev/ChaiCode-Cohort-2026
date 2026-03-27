export function updateChaiPrice(document, chaiType, newPrice) {
  if (typeof chaiType !== "string" || chaiType.length === 0) return false;
  if (typeof newPrice !== "number" || newPrice <= 0) return false;

  const el = document.getElementById(`price-${chaiType}`);
  if (!el) return false;

  el.textContent = `₹${newPrice}`;
  return true;
}

export function getChaiPrice(document, chaiType) {
  const el = document.getElementById(`price-${chaiType}`);
  if (!el) return null;

  const value = el.textContent.replace("₹", "");
  return Number(value);
}

export function updateStallName(document, newName) {
  if (typeof newName !== "string" || newName.length === 0) return null;

  const el = document.querySelector(".stall-name");
  if (!el) return null;

  const old = el.textContent;
  el.textContent = newName;

  return old;
}

export function highlightCheapestChai(document) {
  const list = document.querySelectorAll(".chai-price");
  if (!list || list.length === 0) return null;

  let min = Infinity;
  let cheapestEl = null;

  for (let i = 0; i < list.length; i++) {
    const price = Number(list[i].textContent.replace("₹", ""));
    if (price < min) {
      min = price;
      cheapestEl = list[i];
    }
  }

  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("cheapest");
  }

  if (cheapestEl) {
    cheapestEl.classList.add("cheapest");
    return cheapestEl.getAttribute("data-chai");
  }

  return null;
}