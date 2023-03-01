const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    newmail: {
        type: String,
        required: true,
        unique: true,
    }
})

const Newsletter = mongoose.model('Newsletter', NewsletterSchema);

module.exports = Newsletter;
