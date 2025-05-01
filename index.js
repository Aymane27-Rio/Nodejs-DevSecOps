const express = require('express');
const app = express();

// Welcome Page (SPQR Style)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SPQR Portal</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@700&display=swap');
        body {
          margin: 0;
          padding: 0;
          height: 100vh;
          background: url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center fixed;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Noto Serif', serif;
          color: #FFF;
        }
        .overlay {
          background: rgba(0, 0, 0, 0.7);
          padding: 3rem;
          border-radius: 10px;
          text-align: center;
          max-width: 800px;
        }
        h1 {
          font-size: 5rem;
          margin: 0;
          color: #E8C070;
          text-shadow: 3px 3px 6px #000;
          letter-spacing: 2px;
        }
        .subtitle {
          font-style: italic;
          margin: 1rem 0 2rem 0;
          font-size: 1.2rem;
        }
        .buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .btn {
          padding: 1rem 2rem;
          background: #8B0000;
          color: white;
          border: 2px solid #E8C070;
          border-radius: 5px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
        }
        .btn:hover {
          background: #A52A2A;
          transform: translateY(-3px);
        }
      </style>
    </head>
    <body>
      <div class="overlay">
        <h1>SPQR</h1>
        <p class="subtitle">Senatus Populusque Romanus</p>
        <div class="buttons">
          <a href="/history" class="btn">Imperial History</a>
          <a href="/figures" class="btn">Legends of Rome</a>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Placeholder Routes
app.get('/history', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Roman History</title>
      <style>
        body { font-family: 'Times New Roman', serif; padding: 2rem; }
        a { color: #8B0000; }
      </style>
    </head>
    <body>
      <h1>📜 Roman History (Coming Soon)</h1>
      <a href="/">← Back to SPQR</a>
    </body>
    </html>
  `);
});

app.get('/figures', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Roman Figures</title>
      <style>
        body { font-family: 'Times New Roman', serif; padding: 2rem; }
        a { color: #8B0000; }
      </style>
    </head>
    <body>
      <h1>🏛️ Notable Figures (Coming Soon)</h1>
      <a href="/">← Back to SPQR</a>
    </body>
    </html>
  `);
});

app.listen(80, () => console.log('Server running on port 80'));
