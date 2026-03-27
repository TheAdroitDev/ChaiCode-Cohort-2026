/**
 * 🖌️ Mehndi Canvas - style Property Manipulation
 *
 * Digital mehndi design tool bana rahe hain! Haath pe patterns draw
 * karenge using CSS styles. element.style se inline styles lagao -
 * background color, size, border, opacity, transform sab kuch.
 * Jaise mehndi artist ek ek line khenchta hai, waise hi tum ek ek
 * style property set karoge.
 *
 * Functions:
 *
 *   1. applyBaseStyle(element, color, size)
 *      - Sets element.style properties:
 *        backgroundColor = color
 *        width = size + "px"
 *        height = size + "px"
 *        borderRadius = "50%"
 *      - Returns the element
 *      - Agar element null/undefined, return null
 *
 *   2. setPatternStyle(element, styles)
 *      - Takes an object of CSS style properties
 *        e.g., { border: "2px solid brown", opacity: "0.8", transform: "rotate(45deg)" }
 *      - Applies each property to element.style
 *      - Returns count of properties applied
 *      - Agar element null/undefined, return -1
 *      - Agar styles not object or null, return 0
 *
 *   3. getComputedStyles(element, properties)
 *      - Takes an array of style property names
 *        e.g., ["backgroundColor", "width", "opacity"]
 *      - Returns object with those properties and their current values
 *        from element.style
 *        e.g., { backgroundColor: "brown", width: "100px", opacity: "0.8" }
 *      - Agar element null/undefined, return null
 *      - Agar properties not array, return null
 *
 *   4. toggleVisibility(element)
 *      - If element.style.display is "none", set it to ""
 *      - Else set element.style.display to "none"
 *      - Returns the new display value ("none" or "")
 *      - Agar element null/undefined, return null
 *
 *   5. animateElement(element, frames)
 *      - Takes array of style objects (animation frames)
 *        e.g., [{ opacity: "0" }, { opacity: "0.5" }, { opacity: "1" }]
 *      - Simplified version: just applies the LAST frame's styles to element
 *      - Returns total number of frames
 *      - Agar element null/undefined, return -1
 *      - Agar frames not array or empty, return -1
 *
 * Hint: element.style.propertyName = "value" se inline style lagao.
 *   Camel case use karo (backgroundColor, not background-color).
 *
 * @example
 *   const el = document.createElement("div");
 *
 *   applyBaseStyle(el, "brown", 100);
 *   // => el (with backgroundColor: "brown", width: "100px",
 *   //    height: "100px", borderRadius: "50%")
 *
 *   setPatternStyle(el, { border: "2px solid gold", opacity: "0.9" });
 *   // => 2 (two properties applied)
 *
 *   getComputedStyles(el, ["backgroundColor", "opacity"]);
 *   // => { backgroundColor: "brown", opacity: "0.9" }
 *
 *   toggleVisibility(el);
 *   // => "none" (element hidden)
 *
 *   animateElement(el, [{ opacity: "0" }, { opacity: "1" }]);
 *   // => 2 (last frame applied: opacity is now "1")
 */
export function applyBaseStyle(element, color, size) {
  if (!element) return null;

  element.style.backgroundColor = color;
  element.style.width = size + "px";
  element.style.height = size + "px";
  element.style.borderRadius = "50%";

  return element;
}

export function setPatternStyle(element, styles) {
  if (!element) return -1;
  if (!styles || typeof styles !== "object") return 0;

  let count = 0;

  for (let key in styles) {
    element.style[key] = styles[key];
    count++;
  }

  return count;
}

export function getComputedStyles(element, properties) {
  if (!element) return null;
  if (!Array.isArray(properties)) return null;

  const result = {};

  for (let i = 0; i < properties.length; i++) {
    const prop = properties[i];
    result[prop] = element.style[prop];
  }

  return result;
}

export function toggleVisibility(element) {
  if (!element) return null;

  if (element.style.display === "none") {
    element.style.display = "";
  } else {
    element.style.display = "none";
  }

  return element.style.display;
}

export function animateElement(element, frames) {
  if (!element) return -1;
  if (!Array.isArray(frames) || frames.length === 0) return -1;

  const lastFrame = frames[frames.length - 1];

  for (let key in lastFrame) {
    element.style[key] = lastFrame[key];
  }

  return frames.length;
}