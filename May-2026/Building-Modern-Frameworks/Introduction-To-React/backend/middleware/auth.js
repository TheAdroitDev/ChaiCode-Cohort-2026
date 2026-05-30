import { verifyAccessToken } from "../utils/jwt.js";

export function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing access token" });
  }
  const token = header.split(" ")[1];
  try {
    const decoded = verifyAccessToken(token);
    req.user = { id: decoded.id, email: decoded.email };
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired access token" });
  }
}
