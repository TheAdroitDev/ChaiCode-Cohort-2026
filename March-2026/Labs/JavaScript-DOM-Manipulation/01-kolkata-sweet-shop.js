export function createSweetItem(name, price, category) {
  if (
    typeof name !== "string" ||
    typeof price !== "number" ||
    typeof category !== "string"
  ) {
    return null;
  }

  const div = document.createElement("div");
  div.classList.add("sweet-item");

  const title = document.createElement("h3");
  title.textContent = name;

  const priceEl = document.createElement("p");
  priceEl.classList.add("price");
  priceEl.textContent = `₹${price}`;

  const cat = document.createElement("span");
  cat.classList.add("category");
  cat.textContent = category;

  div.appendChild(title);
  div.appendChild(priceEl);
  div.appendChild(cat);

  return div;
}

export function buildMenuBoard(sweets) {
  if (!Array.isArray(sweets)) return null;

  const board = document.createElement("div");
  board.id = "menu-board";

  for (let i = 0; i < sweets.length; i++) {
    const item = createSweetItem(
      sweets[i].name,
      sweets[i].price,
      sweets[i].category
    );

    if (item) {
      board.appendChild(item);
    }
  }

  return board;
}

export function addSpecialBadge(sweetElement, badgeText) {
  if (!sweetElement || typeof badgeText !== "string" || badgeText.length === 0) {
    return null;
  }

  const badge = document.createElement("span");
  badge.classList.add("special-badge");
  badge.textContent = badgeText;

  sweetElement.appendChild(badge);

  return sweetElement;
}