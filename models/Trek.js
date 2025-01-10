const mongoose = require('mongoose');

const trekSchema = new mongoose.Schema({
    name: String,
    image: String,
    duration: String,
    price: Number,
    itinerary: [{ day: String, activity: String }],
    isTopTrek: { type: Boolean, default: false },
    itineraryUrl: {
        type: String,
      },
    });

module.exports = mongoose.model('Trek', trekSchema);
