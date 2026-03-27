export class PaymentError extends Error {
  constructor(message, code, amount) {
    super(message);
    this.name = "PaymentError";
    this.code = code;
    this.amount = amount;
  }
}

export class InsufficientFundsError extends PaymentError {
  constructor(amount, balance) {
    super(`Insufficient funds: need ${amount}, have ${balance}`, "INSUFFICIENT_FUNDS", amount);
    this.name = "InsufficientFundsError";
    this.balance = balance;
  }
}

export class NetworkError extends PaymentError {
  constructor(amount) {
    super("Network error during transaction", "NETWORK_ERROR", amount);
    this.name = "NetworkError";
    this.retryable = true;
  }
}

export class FraudDetectedError extends PaymentError {
  constructor(amount) {
    super("Suspicious transaction detected", "FRAUD_DETECTED", amount);
    this.name = "FraudDetectedError";
    this.retryable = false;
  }
}

export async function processPayment(amount, balance, networkStatus) {
  await new Promise(res => setTimeout(res, 50));

  if (typeof amount !== "number" || amount <= 0) {
    throw new PaymentError("Invalid amount", "INVALID_AMOUNT", amount);
  }

  if (amount > balance) {
    throw new InsufficientFundsError(amount, balance);
  }

  if (networkStatus === "offline") {
    throw new NetworkError(amount);
  }

  if (amount > 100000) {
    throw new FraudDetectedError(amount);
  }

  return {
    transactionId: "TXN" + Math.floor(Math.random() * 1000000),
    amount,
    status: "success",
    timestamp: new Date().toISOString()
  };
}

export async function retryPayment(paymentFn, maxRetries, delayMs) {
  let attempts = 0;

  while (attempts <= maxRetries) {
    try {
      return await paymentFn();
    } catch (err) {
      if (!(err instanceof NetworkError)) {
        throw err;
      }

      if (attempts === maxRetries) {
        throw err;
      }

      await new Promise(res => setTimeout(res, delayMs));
      attempts++;
    }
  }
}

export async function processWithFallback(primaryFn, fallbackFn) {
  try {
    return await primaryFn();
  } catch (primaryError) {
    try {
      return await fallbackFn();
    } catch (fallbackError) {
      throw new PaymentError(
        `Primary: ${primaryError.message}, Fallback: ${fallbackError.message}`,
        "BOTH_FAILED",
        0
      );
    }
  }
}

export function categorizeError(error) {
  if (error instanceof InsufficientFundsError) {
    return {
      type: "insufficient_funds",
      retryable: false,
      message: error.message
    };
  }

  if (error instanceof NetworkError) {
    return {
      type: "network",
      retryable: true,
      message: error.message
    };
  }

  if (error instanceof FraudDetectedError) {
    return {
      type: "fraud",
      retryable: false,
      message: error.message
    };
  }

  return {
    type: "unknown",
    retryable: false,
    message: error.message || "Unknown error"
  };
}