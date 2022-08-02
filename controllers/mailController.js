// mail controller
const Mail = require("../models/mail");
const nodemailer = require("nodemailer");

const getAllMails = async (req, res) => {
  const mails = await Mail.find({}).sort({ createdAt: -1 });

  res.status(200).json(mails);
};
const getSingleMail = async (req, res) => {
  try {
    const mail = await Mail.findById(req.params.id);
    res.status(200).json(mail);
  } catch (err) {
    res.status(404).json({ message: "Mail not found" });
  }
};
const sendMail = async (req, res) => {
  const { to, from, subject, body } = req.body;

  // save to db
  const mail = new Mail({
    to,
    from,
    subject,
    body,
  });

  await mail.save();

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: from,
      pass: process.env.pass,
    },
  });

  var mailOptions = {
    from,
    to,
    subject,
    body,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully");
      res.end();
    }
  });
};

const deleteMail = async (req, res) => {
  try {
    const mail = await Mail.findByIdAndDelete(req.params.id);
    res.status(200).json(mail);
  } catch (err) {
    res.status(404).json({ message: "Mail not found" });
  }
};

module.exports = {
  getAllMails,
  getSingleMail,
  sendMail,
  deleteMail,
};
