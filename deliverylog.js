const mongoose = require('mongoose');
const logSchema = new mongoose.Schema({
customerId: mongoose.Schema.Types.ObjectId,
campaignId: mongoose.Schema.Types.ObjectId,
status: String,
});
module.exports = mongoose.model('DeliveryLog', logSchema);
