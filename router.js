const router = require("express").Router();
const dateController = require("./controllers/dateController");
const whoamiController = require("./controllers/whoamiController");
const urlController = require("./controllers/urlController");

router.post("/shorturl", urlController.createShortUrl);
router.get("/shorturl/:id", urlController.findShortUrlById);
router.get("/whoami", whoamiController.response);
router.get("/:date", dateController.response);

module.exports = router;
