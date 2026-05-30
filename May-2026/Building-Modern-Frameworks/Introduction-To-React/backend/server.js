import "dotenv/config";
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
