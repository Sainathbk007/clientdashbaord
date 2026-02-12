// routes/clientAuthRoutes.js
const express = require("express");
const router = express.Router();
const clientAuthController = require("../controllers/clientAuthController");
const verifyClientToken = require("../middleware/authMiddleware");

// POST /api/client-auth/login   — public
router.post("/login", clientAuthController.login);

// GET  /api/client-auth/profile — protected
router.get("/profile", verifyClientToken, clientAuthController.getProfile);

module.exports = router;
