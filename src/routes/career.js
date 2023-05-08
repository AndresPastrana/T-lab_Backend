const { Router } = require("express");
const { body, param } = require("express-validator");
const {
  getAllCareers,
  deleteCareer,
  insertCareer,
  updateCareer,
} = require("../controllers/carrer");
const { checkForErrors } = require("../middlewares/checkForErrors");
const router = new Router();
router.get("/", getAllCareers);
router.post(
  "/",
  [
    body("name", "name is required").notEmpty(),
    body("name", "name should be a string").isString(),
    checkForErrors,
  ],
  insertCareer
);
router.put(
  "/:id",
  [param("id", "Not a valid MongoId").isMongoId(), checkForErrors],
  updateCareer
);
router.delete(
  "/:id",
  [param("id", "Invalid Mongo id").isMongoId(), checkForErrors],
  deleteCareer
);
module.exports = router;
