// That’s a concept that allows us to make any object useable in a for..of loop.
// String, Array..

// [Symbol.iterator] helps to decided where it's iterable

// Syntax [Symbol.iterator]
// this is a method
// it returns an object
// that object has next() method
// next () return {done: Boolean, value: any}

// Let's make obj iterable

let playlist = {
  songs: ["My Sweet Lord", "Pyaro Vrindavan", "Surrender", "Like a River"],
  from: 0,
};

playlist[Symbol.iterator] = function () {
  let curr = this.from;
  const songs = this.songs;

  return {
    next() {
      if (curr < songs.length) {
        return {done: false, value: songs[curr++]};
        //  songs[curr++];  songs[curr] --> curr++
      }
      return {done: true};
    },
  };
};

for (const song of playlist) {
  // console.log("Now Playing:", song);
}

// Iterable --> Array
const array = Array.from(playlist);
console.log(array);