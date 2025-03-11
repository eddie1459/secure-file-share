const express = require("express");
const multer = require("multer");
const { uploadToS3, generateSignedUrl } = require("../utils/aws");
const { sendSms } = require("../utils/twilio");
const File = require("../models/File");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Upload File
router.post("/", upload.single("file"), async (req, res) => {
    const { message, phoneNumber } = req.body;
    const file = req.file;

    if (!file || !["application/pdf", "image/jpeg"].includes(file.mimetype)) {
        return res.status(400).json({ error: "Only PDF and JPG files are allowed" });
    }

    // Upload to S3
    const fileUrl = await uploadToS3(file);
    const newFile = new File({ fileUrl, message, phoneNumber });
    await newFile.save();

    // Generate signed URL (expires in 20 min)
    const signedUrl = await generateSignedUrl(fileUrl, 20);

    // Send SMS with Twilio
    await sendSms(phoneNumber, `Download your file: ${signedUrl}`);

    res.json({ message: `File uploaded successfully, link sent via SMS Download your file ${signedUrl}` });
});

module.exports = router;
