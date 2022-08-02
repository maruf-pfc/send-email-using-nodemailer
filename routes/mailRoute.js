const express = require("express");
const router = express.Router();

const {
  getAllMails,
  getSingleMail,
  sendMail,
  deleteMail,
} = require("../controllers/mailController");

router.get("/", getAllMails);
router.get("/:id", getSingleMail);
router.post("/", sendMail);
router.delete("/:id", deleteMail);

module.exports = router;