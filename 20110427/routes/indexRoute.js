// routes/indexRoute.js
const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.getAllMembers);
router.post("/", indexController.addMember);
router.get("/:id", indexController.getMemberById);
router.get("/message/:id?", indexController.getMessage);

module.exports = router;
