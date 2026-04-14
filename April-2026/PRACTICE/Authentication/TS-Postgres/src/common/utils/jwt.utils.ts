import crypto from "crypto";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken"
import { env } from "../../app/env.js";
import type { SignOptions } from "jsonwebtoken";

// Define payload type
export type TokenPayload = {
  userId: string;
};

type ResetToken = {
  rawToken: string;
  hashedToken: string;
};


// for lower verbose code: define a small helper type
type Expiry = Exclude<SignOptions["expiresIn"], undefined>;

export const generateAccessToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, env.JWT_ACCESS_SECRET, {

    // exclude undefined optional if exactOptionalPropertyTypes: true in tsconfig.json

    expiresIn: env.JWT_ACCESS_EXPIRY as Expiry
  });
};

export const verifyAccessToken = (
  token: string
): JwtPayload | TokenPayload | null => {
  try {
    return jwt.verify(token, env.JWT_ACCESS_SECRET) as JwtPayload | TokenPayload;
  } catch {
    return null;
  }
};


export const generateRefreshToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRY as Expiry
  });
};

export const verifyRefreshToken = (
  token: string
): JwtPayload | TokenPayload | null => {
  try {
    return jwt.verify(token, env.JWT_REFRESH_SECRET) as JwtPayload | TokenPayload;
  } catch {
    return null;
  }
};


export const generateResetToken = (): ResetToken => {
  const rawToken = crypto.randomBytes(32).toString("hex");

  const hashedToken = crypto
    .createHash("sha256")
    .update(rawToken)
    .digest("hex");

  return { rawToken, hashedToken };
};