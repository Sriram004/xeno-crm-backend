const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const customerRoutes = require('./routes/customers');
const campaignRoutes = require('./routes/campaigns');
const aiRoutes = require('./routes/ai');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
() => console.log('MongoDB connected'));

app.use('/api/customers', customerRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/ai', aiRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));