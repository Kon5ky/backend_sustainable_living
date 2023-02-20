// const mongoose = require('mongoose');

// const NewsletterSchema = new mongoose.Schema({

//     newmail: {
//         type: String,
//         required: [true, 'Bitte hier Deine E-Mail Adresse eingeben'],
//         unique: [true, 'E-Mail existiert'],
//     },


// });

// module.exports = mongoose.model.Newsletters || mongoose.model('Newsletters', NewsletterSchema);

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