// In js Date always has two things --> "date" and "time" 

// Create 
const now = new Date();
// console.log(now);

// const piyushBDay = new Date(2000, 0, 1, 8, 32);
const piyushBDay = new Date("2000-01-01");
piyushBDay.setHours(8, 32)
// console.log(piyushBDay);


// getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getMilliseconds(), getDay()

/* Setting Date Components
    - `setFullYear(year, [month], [date])`
    - `setMonth(month, [date])`
    - `setDate(date)`
    - `setHours(hour, [min], [sec], [ms])`
    - `setMinutes(min, [sec], [ms])`
    - `setSeconds(sec, [ms])`
    - `setMilliseconds(ms)`
    - `setTime(milliseconds)` 
*/

// auto-corrections 
let d = new Date(2026, 1, 28, 5, 30);

// console.log(d.setDate(d.getDate() + 2));

// Fact --> Date starts from. 1 Jan 1970... 
// milliseconds from epoch
// console.log(Date.now());

// console.log(Date.parse("2014-4-22"));

// Intl API 
// it's good replacements movement.js, date-fns


