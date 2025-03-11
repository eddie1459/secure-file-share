const AWS = require("aws-sdk");

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1"
});

// Upload File to S3
const uploadToS3 = async (file) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${Date.now()}-${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "private"
    };

    const upload = await s3.upload(params).promise();
    return upload.Location;
};

// Generate Temporary Signed URL
const generateSignedUrl = async (fileUrl, expirationMinutes) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileUrl.split(".com/")[1], 
        Expires: expirationMinutes * 60
    };

    return s3.getSignedUrlPromise("getObject", params);
};

module.exports = { uploadToS3, generateSignedUrl };
