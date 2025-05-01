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
app.post('/api/chat', (req, res) => {
  const userPrompt = req.body.prompt.toLowerCase();
  let response = knowledgeBase[userPrompt] || 
    "I don’t have a guide for that yet. Try 'learn javascript' or 'learn devsecops'!";
  
  res.json({ response });
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
