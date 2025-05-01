const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS/Images) from a 'public' folder (optional but recommended)
app.use(express.static(path.join(__dirname, 'public')));

// Welcome Page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Roman Empire Portal</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Times New Roman', serif;
          background: url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center fixed;
          background-size: cover;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #FFF;
          text-align: center;
        }
        .overlay {
          background: rgba(0, 0, 0, 0.7);
          padding: 2rem;
          border-radius: 10px;
          max-width: 800px;
        }
        h1 {
          font-family: 'Trajan Pro', 'Times New Roman', serif;
          font-size: 4rem;
          margin: 0;
          color: #E8C070;
          text-shadow: 2px 2px 4px #000;
        }
        .subtitle {
          font-style: italic;
          margin-bottom: 2rem;
        }
        .buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .btn {
          padding: 0.8rem 1.5rem;
          background: #8B0000;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.3s;
          text-decoration: none;
        }
        .btn:hover {
          background: #A52A2A;
        }
      </style>
    </head>
    <body>
      <div class="overlay">
        <h1>SPQR</h1>
        <p class="subtitle">Senatus Populusque Romanus</p>
        <div class="buttons">
          <a href="/history" class="btn">Explore the History</a>
          <a href="/figures" class="btn">Meet the Figures</a>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Placeholder routes for other pages (to be filled later)
app.get('/history', (req, res) => {
  res.send('<h1>Roman Empire History (Under Construction)</h1><a href="/">Go Back</a>');
});

app.get('/figures', (req, res) => {
  res.send('<h1>Notable Figures (Under Construction)</h1><a href="/">Go Back</a>');
});

app.listen(80, () => console.log('Server running on port 80'));
