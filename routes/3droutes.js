const express = require("express");
const router = express.Router();
const upload = require("../utilis/fileUploader");
const uploadFiles = upload.fields([
  { name: "file", maxCount: 1 },
  { name: "usdz", maxCount: 1 },
  { name: "jpeg", maxCount: 1 },
  { name: "png", maxCount: 1 },
]);

const {
  handleCreateModel,
  handleGetObjects,
  handleGetObjectById,
  handleDeleteObject,
  handleUpdateObject,
} = require("../controllers/3dControl");

router.post("/add", uploadFiles, handleCreateModel); 
router.get("/get-objects", handleGetObjects);
router.get("/get-by-id/:id", handleGetObjectById);
router.delete("/delete/:id", handleDeleteObject);
router.post("/update/:id", uploadFiles, handleUpdateObject);

module.exports = router;