export async function checkSeatAvailability(trainNumber, date, classType) {
  await new Promise(res => setTimeout(res, 100));

  if (!/^\d{5}$/.test(trainNumber)) {
    throw new Error("Invalid train number! 5 digit hona chahiye.");
  }

  const validClasses = ["SL", "3A", "2A", "1A"];
  if (!validClasses.includes(classType)) {
    throw new Error("Invalid class type!");
  }

  if (!date) {
    throw new Error("Date required hai!");
  }

  const seats = Math.floor(Math.random() * 51);
  const waitlist = Math.floor(Math.random() * 21);

  return {
    trainNumber,
    date,
    classType,
    available: seats > 0,
    seats,
    waitlist
  };
}

export async function bookTicket(passenger, trainNumber, date, classType) {
  if (!passenger || !passenger.name || !passenger.age || !passenger.gender) {
    throw new Error("Invalid passenger details!");
  }

  const availability = await checkSeatAvailability(trainNumber, date, classType);

  const fares = {
    SL: 250,
    "3A": 800,
    "2A": 1200,
    "1A": 2000
  };

  if (availability.available) {
    return {
      pnr: "PNR" + Math.floor(Math.random() * 1000000),
      passenger,
      trainNumber,
      date,
      class: classType,
      status: "confirmed",
      fare: fares[classType]
    };
  }

  return {
    passenger,
    trainNumber,
    date,
    class: classType,
    status: "waitlisted",
    waitlistNumber: Math.floor(Math.random() * 20) + 1
  };
}

export async function cancelTicket(pnr) {
  await new Promise(res => setTimeout(res, 100));

  if (typeof pnr !== "string" || !pnr.startsWith("PNR")) {
    throw new Error("Invalid PNR number!");
  }

  return {
    pnr,
    status: "cancelled",
    refund: Math.floor(Math.random() * 901) + 100
  };
}

export async function getBookingStatus(pnr) {
  await new Promise(res => setTimeout(res, 100));

  if (typeof pnr !== "string" || !pnr.startsWith("PNR")) {
    throw new Error("Invalid PNR number!");
  }

  const statuses = ["confirmed", "waitlisted", "cancelled"];

  return {
    pnr,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    lastUpdated: new Date().toISOString()
  };
}

export async function bookMultipleTickets(passengers, trainNumber, date, classType) {
  if (!passengers || passengers.length === 0) return [];

  const results = [];

  for (let i = 0; i < passengers.length; i++) {
    const p = passengers[i];

    try {
      const res = await bookTicket(p, trainNumber, date, classType);
      results.push(res);
    } catch (err) {
      results.push({
        passenger: p,
        error: err.message
      });
    }
  }

  return results;
}

export async function raceBooking(trainNumbers, passenger, date, classType) {
  const promises = trainNumbers.map(tn =>
    bookTicket(passenger, tn, date, classType)
  );

  try {
    return await Promise.any(promises);
  } catch (e) {
    throw new Error("Koi bhi train mein seat nahi mili!");
  }
}