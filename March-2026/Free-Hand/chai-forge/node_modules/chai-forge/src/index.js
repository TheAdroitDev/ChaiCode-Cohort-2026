document.addEventListener("DOMContentLoaded", () => {
  processChai();
  initObserver();
});



function processChai() {
  const elements = document.querySelectorAll('[class*="chai-"]');

  elements.forEach((el) => {
    const classes = Array.from(el.classList);

    classes.forEach((cls) => {
      if (!cls.startsWith("chai-")) return;

      applyStyle(el, cls);
      el.classList.remove(cls);
    });
  });
}



// Style Parser


function applyStyle(el, cls) {
  const [, type, value] = cls.split("-");

  switch (type) {
    // Spacing
    case "p":
      el.style.padding = px(value);
      break;

    case "m":
      el.style.margin = px(value);
      break;

    // Colors
    case "bg":
      el.style.backgroundColor = resolveColor(value);
      break;

    // Typography
    case "text":
      handleText(el, value);
      break;

    // Borders
    case "rounded":
      el.style.borderRadius = px(value);
      break;

    case "border":
      el.style.border = `${value}px solid rgba(0,0,0,0.2)`;
      break;

    // Layout
    case "flex":
      el.style.display = "flex";
      break;

    case "justify":
      el.style.justifyContent = value;
      break;

    case "items":
      el.style.alignItems = value;
      break;

    // Size
    case "w":
      el.style.width = px(value);
      break;

    case "h":
      el.style.height = px(value);
      break;

    // Loid Mode (Elite preset)
    case "agent":
      applyAgent(el);
      break;

    case "glass":
      applyGlass(el);
      break;
  }
}



// Utilities


function px(value) {
  return isNaN(value) ? value : value + "px";
}

function resolveColor(value) {
  return palette[value] || value;
}



// Text Utilities


function handleText(el, value) {
  if (["center", "left", "right"].includes(value)) {
    el.style.textAlign = value;
    return;
  }

  if (palette[value]) {
    el.style.color = palette[value];
    return;
  }

  if (!isNaN(value)) {
    el.style.fontSize = value + "px";
  }
}


// Loid Theme Layer :)

function applyAgent(el) {
  el.style.backgroundColor = "#0f172a"; 
  el.style.color = "#f8fafc";
  el.style.borderRadius = "12px";
  el.style.padding = "16px";
  el.style.fontFamily = "system-ui, sans-serif";
  el.style.letterSpacing = "0.3px";
  el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)";
}

function applyGlass(el) {
  el.style.background = "rgba(255,255,255,0.05)";
  el.style.backdropFilter = "blur(10px)";
  el.style.border = "1px solid rgba(255,255,255,0.1)";
  el.style.borderRadius = "12px";
}


// Color System


const palette = {
  red: "#ef4444",
  blue: "#3b82f6",
  green: "#22c55e",
  black: "#0f172a",
  white: "#f8fafc",
};




function initObserver() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType !== 1) return;

        if (node.classList?.length) {
          processElement(node);
        }

        node.querySelectorAll?.('[class*="chai-"]').forEach(processElement);
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}



function processElement(el) {
  const classes = Array.from(el.classList);

  classes.forEach((cls) => {
    if (!cls.startsWith("chai-")) return;

    applyStyle(el, cls);
    el.classList.remove(cls);
  });
}