// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// ─── Middleware ──────────────────────────────────────────────
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// ─── Routes ─────────────────────────────────────────────────
const clientAuthRoutes = require("./routes/clientAuthRoutes");
const projectRoutes = require("./routes/projectRoutes");
app.use("/api/client-auth", clientAuthRoutes);
app.use("/api/projects", projectRoutes);

// ─── Health check ───────────────────────────────────────────
app.get("/", (_req, res) => res.json({ message: "Client Dashboard API running" }));

// ─── Start Server ───────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
