const express = require('express');
const router = express.Router();
const Customer = require('../models/Customers');
const Campaign = require('../models/Campaigns');
const DeliveryLog = require('../models/DeliveryLogs');

router.post('/', async (req, res) => {
const { message, condition } = req.body;
const customers = await Customer.find(condition);

const campaign = new Campaign({ message, audienceSize: customers.length });
await campaign.save();

let sent = 0, failed = 0;
for (const cust of customers) {
    const success = Math.random() > 0.1;
    await new DeliveryLog({
    customerId: cust._id,
    campaignId: campaign._id,
    status: success ? 'SENT' : 'FAILED'
    }).save();
    success ? sent++ : failed++;
}

campaign.stats = { sent, failed };
await campaign.save();

res.json({ campaign, sent, failed });
});

router.get('/', async (req, res) => {
const campaigns = await Campaign.find().sort({ createdAt: -1 });
res.json(campaigns);
});

module.exports = router;
