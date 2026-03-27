/**
 * 💒 Wedding Card Maker - Event Delegation
 *
 * Sharma ji ki beti ki shaadi ka digital card banana hai! Event delegation
 * use karke dynamic elements handle karo. Ek parent pe listener lagao,
 * aur child elements ke events handle karo. Jaise shaadi mein ek event
 * manager saare kaam coordinate karta hai, waise hi ek parent listener
 * saare child events manage karta hai.
 *
 * Functions:
 *
 *   1. setupGuestList(containerElement)
 *      - Sets up event delegation on containerElement for click events
 *      - Clicking any .remove-btn inside container removes its parent .guest-item
 *      - Returns object with:
 *        addGuest(name, side): creates div.guest-item with:
 *          - data-name attribute = name
 *          - data-side attribute = side ("bride" or "groom")
 *          - span with textContent = name
 *          - button.remove-btn with textContent "Remove"
 *          Appends to container. Returns the created element.
 *        removeGuest(name): finds .guest-item with data-name matching name,
 *          removes it. Returns true if found and removed, false otherwise.
 *        getGuests(): returns array of {name, side} objects from current
 *          .guest-item children in the container
 *      - Agar containerElement null/undefined, return null
 *
 *   2. setupThemeSelector(containerElement, previewElement)
 *      - Creates 3 button.theme-btn elements inside containerElement:
 *        "traditional", "modern", "royal" (textContent and data-theme)
 *      - Event delegation on containerElement: clicking any .theme-btn:
 *        - Sets previewElement.className to the clicked theme name
 *        - Sets previewElement's data-theme attribute to the theme name
 *      - Returns object with:
 *        getTheme(): returns previewElement's current data-theme value or null
 *      - Agar containerElement or previewElement null/undefined, return null
 *
 *   3. setupCardEditor(cardElement)
 *      - Event delegation on cardElement for click events
 *      - Clicking any element with [data-editable] attribute:
 *        - Removes "editing" class and contentEditable from any currently
 *          editing element inside cardElement
 *        - Sets clicked element's contentEditable = "true"
 *        - Adds class "editing" to clicked element
 *      - Clicking on cardElement itself (not on a [data-editable] child):
 *        - Removes "editing" class and contentEditable from any editing element
 *      - Returns object with:
 *        getContent(field): finds element with data-editable=field,
 *          returns its textContent. Returns null if not found.
 *      - Agar cardElement null/undefined, return null
 *
 * Hint: Event delegation means: ek parent pe listener lagao, then
 *   event.target se check karo ki actual click kahan hua. event.target.closest()
 *   use karo parent elements check karne ke liye.
 *
 * @example
 *   const container = document.createElement("div");
 *   const guestList = setupGuestList(container);
 *
 *   guestList.addGuest("Rahul", "groom");
 *   guestList.addGuest("Priya", "bride");
 *   guestList.getGuests();
 *   // => [{ name: "Rahul", side: "groom" }, { name: "Priya", side: "bride" }]
 *
 *   guestList.removeGuest("Rahul"); // => true
 *   guestList.getGuests();
 *   // => [{ name: "Priya", side: "bride" }]
 */
export function setupGuestList(containerElement) {
  if (!containerElement) return null;

  function handler(e) {
    const btn = e.target.closest(".remove-btn");
    if (btn) {
      const item = btn.closest(".guest-item");
      if (item) {
        containerElement.removeChild(item);
      }
    }
  }

  containerElement.addEventListener("click", handler);

  return {
    addGuest(name, side) {
      const div = document.createElement("div");
      div.classList.add("guest-item");
      div.setAttribute("data-name", name);
      div.setAttribute("data-side", side);

      const span = document.createElement("span");
      span.textContent = name;

      const btn = document.createElement("button");
      btn.classList.add("remove-btn");
      btn.textContent = "Remove";

      div.appendChild(span);
      div.appendChild(btn);

      containerElement.appendChild(div);

      return div;
    },

    removeGuest(name) {
      const items = containerElement.querySelectorAll(".guest-item");

      for (let i = 0; i < items.length; i++) {
        if (items[i].getAttribute("data-name") === name) {
          containerElement.removeChild(items[i]);
          return true;
        }
      }

      return false;
    },

    getGuests() {
      const items = containerElement.querySelectorAll(".guest-item");
      const result = [];

      for (let i = 0; i < items.length; i++) {
        result.push({
          name: items[i].getAttribute("data-name"),
          side: items[i].getAttribute("data-side")
        });
      }

      return result;
    }
  };
}

export function setupThemeSelector(containerElement, previewElement) {
  if (!containerElement || !previewElement) return null;

  const themes = ["traditional", "modern", "royal"];

  for (let i = 0; i < themes.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("theme-btn");
    btn.textContent = themes[i];
    btn.setAttribute("data-theme", themes[i]);
    containerElement.appendChild(btn);
  }

  function handler(e) {
    const btn = e.target.closest(".theme-btn");
    if (btn) {
      const theme = btn.getAttribute("data-theme");
      previewElement.className = theme;
      previewElement.setAttribute("data-theme", theme);
    }
  }

  containerElement.addEventListener("click", handler);

  return {
    getTheme() {
      return previewElement.getAttribute("data-theme");
    }
  };
}

export function setupCardEditor(cardElement) {
  if (!cardElement) return null;

  function clearEditing() {
    const current = cardElement.querySelector(".editing");
    if (current) {
      current.classList.remove("editing");
      current.removeAttribute("contentEditable");
    }
  }

  function handler(e) {
    const editable = e.target.closest("[data-editable]");

    if (editable && cardElement.contains(editable)) {
      clearEditing();
      editable.setAttribute("contentEditable", "true");
      editable.classList.add("editing");
    } else if (e.target === cardElement) {
      clearEditing();
    }
  }

  cardElement.addEventListener("click", handler);

  return {
    getContent(field) {
      const el = cardElement.querySelector(`[data-editable="${field}"]`);
      if (!el) return null;
      return el.textContent;
    }
  };
}