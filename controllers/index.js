const router = require("express").Router();

const apiRoutes = require("./api");

const homeRoutes = require("./homeRoutes")

const dashbroadRoutes = require("./dashbroadRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashbroad", dashbroadRoutes);

module.exports = router;