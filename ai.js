const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({ apiKey: process.env.OPENAI_KEY });
const openai = new OpenAIApi(config);

router.post('/message', async (req, res) => {
const { goal } = req.body;
const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Suggest 3 promotional messages to '${goal}' customers`,
    max_tokens: 100
});
res.json({ suggestions: response.data.choices[0].text.trim().split('\n') });
});

module.exports = router;
