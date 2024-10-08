const express = require("express");
const router = express.Router();
const portfolioData = require("../controller/portfolio");
const Middleware = require("../middleware/FileHandler");

router.route("/getportfolio").get(portfolioData.getPortfolio);
router.route("/getIndustries").get(portfolioData.getIndustries);
router.route("/getTechnologies").get(portfolioData.getTechnologies);
router.get("/getPerPortfolio/:id", portfolioData.getPerPortfolio);

router
  .route("/addPortfolio")
  .post(
    Middleware.uploads.fields([{ name: "Thumbnail", maxCount: 1 }]),
    portfolioData.addPortfolio
  );

router
  .route("/updateportfolio/:id")
  .put(
    Middleware.uploads.fields([{ name: "Thumbnail", maxCount: 1 }]),
    portfolioData.updatePortfolio
  );

router.route("/deleteportfolio/:id").delete(portfolioData.deletePortfolio);

module.exports = router;
