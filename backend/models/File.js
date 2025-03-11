const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    fileUrl: { type: String, required: true },
    message: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 1200 } // Auto-delete after 20 min
});

module.exports = mongoose.model("File", fileSchema);
