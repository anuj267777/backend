const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [".glb", ".usdz", ".jpeg", ".jpg", ".png"];
  const fileExt = path.extname(file.originalname).toLowerCase(); // Get file extension

  console.log("Received file:", file.originalname, "MIME type:", file.mimetype);

  if (allowedTypes.includes(fileExt)) {
    cb(null, true); // File is allowed
  } else {
    cb(
      new Error(
        `Invalid file type! Only ${allowedTypes.join(", ")} files are allowed.`
      )
    );
  }
};



const upload = multer({
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 }, 
  fileFilter: fileFilter,
});

module.exports = upload;