function startCompany() {
  function ca(name) {
    return `Name of your company is ${name}`;
  }
  return ca;
}

const getMeAcompany = startCompany();
const myCompanyName = getMeAcompany("Zomato");

function eternal(guest) {
  const guestName = guest;
  let count = 0;

  function zomato() {
    console.log(`Hi ${guestName}, from zomato`);
  }

  function blinkit() {
    if (count == 1) return;
    console.log(`Hi ${guestName}, from blinkit`);
    count++;
  }
  // zomato();
  // blinkit();
  return {
    zomato,
    blinkit,
  };
}

const hitesh = eternal("hitesh");
const piyush = eternal("Piyush");

hitesh.blinkit();
hitesh.blinkit();
hitesh.blinkit();

useMemo();

const cups = ["green", "blue", "red"];

cups.map;
