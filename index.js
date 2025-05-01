const express = require('express');
const app = express();

// Welcome Page (unchanged from previous SPQR example)
app.get('/', (req, res) => { /* ... */ });

// Roman History Page (New!)
app.get('/history', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Roman History</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');
        body {
          margin: 0;
          padding: 0;
          font-family: 'Noto Serif', serif;
          background: 
            linear-gradient(rgba(0, 0, 0, 0.7), 
            url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center fixed;
          background-size: cover;
          color: #FFF;
          line-height: 1.6;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.7);
        }
        h1 {
          color: #E8C070;
          text-align: center;
          border-bottom: 2px solid #8B0000;
          padding-bottom: 1rem;
        }
        .timeline-event {
          margin: 3rem 0;
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .event-image {
          width: 200px;
          height: 150px;
          object-fit: cover;
          border: 3px solid #8B0000;
          opacity: 0.9;
        }
        .event-content {
          flex: 1;
        }
        .event-year {
          font-weight: bold;
          color: #E8C070;
          font-size: 1.2rem;
        }
        .event-title {
          font-size: 1.5rem;
          margin: 0.5rem 0;
          color: #FFF;
        }
        .back-link {
          display: inline-block;
          margin-top: 2rem;
          color: #E8C070;
          text-decoration: none;
          border: 1px solid #E8C070;
          padding: 0.5rem 1rem;
        }
        .back-link:hover {
          background: rgba(232, 192, 112, 0.2);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>History of the Roman Empire</h1>
        
        <!-- Event 1 -->
        <div class="timeline-event">
          <img src="https://images.unsplash.com/photo-1520409799395-8c405fdcb4e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" class="event-image" alt="Roman Forum">
          <div class="event-content">
            <div class="event-year">753 BC</div>
            <h2 class="event-title">Foundation of Rome</h2>
            <p>According to legend, Romulus and Remus founded Rome on the Palatine Hill. Romulus became the first king after killing Remus in a dispute.</p>
          </div>
        </div>

        <!-- Event 2 -->
        <div class="timeline-event">
          <img src="https://images.unsplash.com/photo-1570485071665-9718d7ef1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" class="event-image" alt="Roman Republic">
          <div class="event-content">
            <div class="event-year">509 BC</div>
            <h2 class="event-title">Roman Republic</h2>
            <p>The monarchy was overthrown, and Rome became a republic governed by the Senate and elected magistrates.</p>
          </div>
        </div>

        <!-- Event 3 -->
        <div class="timeline-event">
          <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" class="event-image" alt="Augustus">
          <div class="event-content">
            <div class="event-year">27 BC</div>
            <h2 class="event-title">Augustus Reign</h2>
            <p>Octavian, later known as Augustus, became the first Roman Emperor, marking the beginning of the Roman Empire.</p>
          </div>
        </div>

        <a href="/" class="back-link">← Back to SPQR</a>
      </div>
    </body>
    </html>
  `);
});

// Figures Page (unchanged placeholder)
app.get('/figures', (req, res) => { /* ... */ });

app.listen(80, () => console.log('Server running on port 80'));
