import { Router } from "express";
import db from "../db.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

router.get("/profile", authMiddleware, (req, res) => {
  const user = db
    .prepare("SELECT id, name, email, created_at FROM users WHERE id = ?")
    .get(req.user.id);

  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ user });
});

export default router;
