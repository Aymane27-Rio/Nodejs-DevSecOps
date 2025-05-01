const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock "knowledge base" for the mentor bot (or use OpenAI API)
const knowledgeBase = {
  "learn javascript": "Step 1: Learn basics on MDN. Step 2: Build a small project. Step 3: Learn frameworks like React.",
  "learn devsecops": "Step 1: Master Linux. Step 2: Learn CI/CD with Jenkins. Step 3: Study AWS security.",
  // Add more topics
};

// Chatbot API endpoint
const OpenAI = require('openai');
const openai = new OpenAI(process.env.OPENAI_KEY);

app.post('/api/chat', async (req, res) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: req.body.prompt }],
  });
  res.json({ response: response.choices[0].message.content });
});

// User tips API (store in Firebase or a JSON file)
let userTips = [];
app.post('/api/tips', (req, res) => {
  const { topic, tip } = req.body;
  userTips.push({ topic, tip });
  res.json({ success: true });
});

app.get('/api/tips', (req, res) => {
  res.json({ tips: userTips });
});

// Serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(80, () => console.log('Server running on port 80'));
