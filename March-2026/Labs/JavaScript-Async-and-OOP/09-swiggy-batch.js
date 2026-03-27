export function prepareOrder(item, prepTime) {
  return new Promise((resolve, reject) => {
    if (!item) {
      reject(new Error("Item name required!"));
      return;
    }

    if (typeof prepTime !== "number" || prepTime <= 0) {
      reject(new Error("Invalid prep time!"));
      return;
    }

    setTimeout(() => {
      resolve({
        item,
        ready: true,
        prepTime
      });
    }, prepTime);
  });
}

export function prepareBatch(items) {
  if (!items || items.length === 0) {
    return Promise.resolve([]);
  }

  const promises = [];

  for (let i = 0; i < items.length; i++) {
    const { name, prepTime } = items[i];
    promises.push(prepareOrder(name, prepTime));
  }

  return Promise.all(promises);
}

export function getFirstReady(items) {
  if (!items || items.length === 0) {
    return Promise.reject(new Error("No items to prepare!"));
  }

  const promises = [];

  for (let i = 0; i < items.length; i++) {
    const { name, prepTime } = items[i];
    promises.push(prepareOrder(name, prepTime));
  }

  return Promise.race(promises);
}

export function prepareSafeBatch(items) {
  if (!items || items.length === 0) {
    return Promise.resolve([]);
  }

  const promises = [];

  for (let i = 0; i < items.length; i++) {
    const { name, prepTime } = items[i];

    const p = prepareOrder(name, prepTime)
      .then(res => ({
        status: "fulfilled",
        value: res
      }))
      .catch(err => ({
        status: "rejected",
        reason: err.message
      }));

    promises.push(p);
  }

  return Promise.all(promises);
}

export function deliverWithTimeout(orderPromise, timeoutMs) {
  if (typeof timeoutMs !== "number" || timeoutMs <= 0) {
    return Promise.reject(new Error("Invalid timeout!"));
  }

  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Delivery timeout!"));
    }, timeoutMs);
  });

  return Promise.race([orderPromise, timeout]);
}

export async function batchWithRetry(items, maxRetries) {
  let attempts = 0;

  while (attempts <= maxRetries) {
    try {
      return await prepareBatch(items);
    } catch (err) {
      if (attempts === maxRetries) {
        throw err;
      }
      attempts++;
    }
  }
}