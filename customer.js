const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
name: String,
email: String,
totalSpend: Number,
visits: Number,
lastVisit: Date,
});
module.exports = mongoose.model('Customer', customerSchema);


// /backend/models/Campaign.js
const mongoose = require('mongoose');
const campaignSchema = new mongoose.Schema({
message: String,
audienceSize: Number,
stats: {
    sent: Number,
    failed: Number
},
createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Campaign', campaignSchema);