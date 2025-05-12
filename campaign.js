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