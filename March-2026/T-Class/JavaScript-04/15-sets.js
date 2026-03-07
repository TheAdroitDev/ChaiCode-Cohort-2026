// similar array -> contains only unique value

/*
  - Methods
    - `new Set([iterable])` – creates the set, and if an `iterable` object is provided (usually an array), copies values from it into the set.
    - `set.add(value)` – adds a value, returns the set itself.
    - `set.delete(value)` – removes the value, returns `true` if `value` existed at the moment of the call, otherwise `false`.
    - `set.has(value)` – returns `true` if the value exists in the set, otherwise `false`.
    - `set.clear()` – removes everything from the set.
    - `set.size` – is the elements count.
*/

let mm =
  "Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare";

let uniqueChars = new Set(mm);
let uniqueWords = new Set(mm.split(" "))

console.log(uniqueWords);