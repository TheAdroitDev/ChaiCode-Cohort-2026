import { Router } from "express";
import bcrypt from "bcryptjs";
import db from "../db.js";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body || {};
  if (!name || !email || !password) {
    return res.status(400).json({ message: "name, email, password required" });
  }

  const existing = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
  if (existing) return res.status(409).json({ message: "Email already registered" });

  const hashed = await bcrypt.hash(password, 10);
  const result = db
    .prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)")
    .run(name, email, hashed);

  const user = { id: result.lastInsertRowid, email };
  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);

  db.prepare("INSERT INTO refresh_tokens (user_id, token) VALUES (?, ?)").run(
    user.id,
    refreshToken
  );

  res.status(201).json({
    user: { id: user.id, name, email },
    accessToken,
    refreshToken,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ message: "email and password required" });
  }

  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const payload = { id: user.id, email: user.email };
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  db.prepare("INSERT INTO refresh_tokens (user_id, token) VALUES (?, ?)").run(
    user.id,
    refreshToken
  );

  res.json({
    user: { id: user.id, name: user.name, email: user.email },
    accessToken,
    refreshToken,
  });
});

router.post("/refresh", (req, res) => {
  const { refreshToken } = req.body || {};
  if (!refreshToken) return res.status(400).json({ message: "refreshToken required" });

  const stored = db
    .prepare("SELECT * FROM refresh_tokens WHERE token = ?")
    .get(refreshToken);
  if (!stored) return res.status(401).json({ message: "Refresh token revoked" });

  try {
    const decoded = verifyRefreshToken(refreshToken);
    const payload = { id: decoded.id, email: decoded.email };
    const accessToken = signAccessToken(payload);
    const newRefreshToken = signRefreshToken(payload);

    db.prepare("DELETE FROM refresh_tokens WHERE token = ?").run(refreshToken);
    db.prepare("INSERT INTO refresh_tokens (user_id, token) VALUES (?, ?)").run(
      payload.id,
      newRefreshToken
    );

    res.json({ accessToken, refreshToken: newRefreshToken });
  } catch (err) {
    return res.status(401).json({ message: "Invalid refresh token" });
  }
});

router.post("/logout", (req, res) => {
  const { refreshToken } = req.body || {};
  if (refreshToken) {
    db.prepare("DELETE FROM refresh_tokens WHERE token = ?").run(refreshToken);
  }
  res.json({ message: "Logged out" });
});

export default router;
