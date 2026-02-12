// routes/projectRoutes.js
const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const verifyClientToken = require("../middleware/authMiddleware");

// All project routes are protected
router.use(verifyClientToken);

// GET /api/projects        — list all projects for logged-in client
router.get("/", projectController.getClientProjects);

// GET /api/projects/:id    — get single project by id (scoped to client)
router.get("/:id", projectController.getProjectById);

module.exports = router;
