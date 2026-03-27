export function placeOrder(restaurant, items) {
  return new Promise((resolve, reject) => {
    if (
      typeof restaurant !== "string" ||
      restaurant.length === 0 ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      reject(new Error("Invalid order details!"));
      return;
    }

    setTimeout(() => {
      resolve({
        orderId: Math.floor(Math.random() * 10000),
        restaurant: restaurant,
        items: items,
        status: "placed",
        timestamp: new Date().toISOString()
      });
    }, 50);
  });
}

export function confirmOrder(order) {
  return new Promise((resolve, reject) => {
    if (!order || !order.orderId || order.status !== "placed") {
      reject(new Error("Order cannot be confirmed!"));
      return;
    }

    resolve({
      ...order,
      status: "confirmed",
      estimatedTime: 30
    });
  });
}

export function assignRider(order) {
  const riders = ["Rahul", "Priya", "Amit", "Neha", "Vikram"];

  return new Promise((resolve, reject) => {
    if (!order || order.status !== "confirmed") {
      reject(new Error("Order not confirmed yet!"));
      return;
    }

    const rider = riders[Math.floor(Math.random() * riders.length)];

    resolve({
      ...order,
      rider: rider,
      status: "assigned"
    });
  });
}

export function deliverOrder(order) {
  return new Promise((resolve, reject) => {
    if (!order || order.status !== "assigned" || !order.rider) {
      reject(new Error("No rider assigned!"));
      return;
    }

    resolve({
      ...order,
      status: "delivered",
      deliveredAt: new Date().toISOString()
    });
  });
}

export function processDelivery(restaurant, items) {
  return placeOrder(restaurant, items)
    .then(order => confirmOrder(order))
    .then(order => assignRider(order))
    .then(order => deliverOrder(order))
    .catch(err => ({
      error: err.message,
      status: "failed"
    }));
}

export function processMultipleOrders(orderList) {
  const tasks = [];

  for (let i = 0; i < orderList.length; i++) {
    const { restaurant, items } = orderList[i];
    tasks.push(processDelivery(restaurant, items));
  }

  return Promise.allSettled(tasks);
}