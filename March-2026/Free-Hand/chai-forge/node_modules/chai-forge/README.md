
# Chai Forge

Utility-first styling. Forged at runtime.

Chai Forge is a lightweight JavaScript engine that lets you write utility classes directly in HTML — without writing CSS or setting up build tools.

It scans the DOM, parses `chai-*` class names, and applies styles dynamically.

---

## Why Chai Forge?

Writing CSS for small UI tweaks can slow things down.

Chai Forge is built for:

* rapid prototyping
* small projects
* learning how styling systems work

It’s intentionally simple — no config, no build step, just direct control.

---

## Features

* No CSS files required
* Works via CDN or npm
* Auto-initialized (no function calls needed)
* Handles dynamic DOM updates
* Lightweight and fast
* Includes minimal design presets

---

## Installation

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@theadroitdev/chai-forge/index.js"></script>
```

---

### npm

```bash
npm install @theadroitdev/chai-forge
```

---

## Usage

```html
<div class="chai-p-20 chai-bg-red chai-text-white">
  Hello Chai Forge
</div>
```

---

## Utilities

### Spacing

```html
chai-p-20     → padding: 20px
chai-m-10     → margin: 10px
```

---

### Colors

```html
chai-bg-red     → background-color: red
chai-text-white → color: white
```

---

### Typography

```html
chai-text-center → text-align: center
chai-text-24     → font-size: 24px
```

---

### Layout

```html
chai-flex
chai-justify-center
chai-items-center
```

---

### Size

```html
chai-w-200 → width: 200px
chai-h-100 → height: 100px
```

---

### Borders

```html
chai-rounded-10 → border-radius: 10px
chai-border-2   → 2px solid border
```

---

## Presets

Chai Forge includes minimal presets for faster UI building.

### chai-agent

A clean, professional dark UI style.

```html
<div class="chai-agent">
  Agent Panel
</div>
```

---

### chai-glass

Glass-style UI with blur and transparency.

```html
<div class="chai-glass">
  Glass UI
</div>
```

---

## How It Works

1. Scans the DOM for `chai-*` classes
2. Parses class names into type and value
3. Applies inline styles dynamically

Example:

```js
const [, type, value] = cls.split("-");
```

---

## Example

```html
<div class="chai-agent chai-text-center chai-p-20">
  Dashboard
</div>
```

---

## Use Cases

* Rapid UI prototyping
* Learning CSS concepts
* Developer tools and experiments
* Small projects without setup

---

## License

MIT

---

## Author

Shivam Verma
https://theadroitdev.com
