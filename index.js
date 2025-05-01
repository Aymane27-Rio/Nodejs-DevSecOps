const express = require('express');
const app = express();

// Roman Empire data
const romanHistory = [
  { 
    year: "753 BC", 
    title: "Foundation of Rome", 
    description: "Romulus and Remus establish Rome. Romulus becomes the first king.",
    figures: ["Romulus", "Remus"]
  },
  { 
    year: "509 BC", 
    title: "Roman Republic", 
    description: "Overthrow of the monarchy. Establishment of the Republic.",
    figures: ["Lucius Junius Brutus"]
  },
  { 
    year: "27 BC", 
    title: "Augustus Reign", 
    description: "Octavian becomes Augustus, the first Roman Emperor.",
    figures: ["Augustus", "Mark Antony", "Cleopatra"]
  },
  { 
    year: "476 AD", 
    title: "Fall of Western Rome", 
    description: "Odoacer deposes Romulus Augustulus, marking the end of the Western Empire.",
    figures: ["Odoacer", "Romulus Augustulus"]
  }
];

// Serve HTML directly
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Roman Empire History</title>
      <style>
        body {
          font-family: 'Times New Roman', serif;
          background: #f5f5f5;
          margin: 0;
          padding: 20px;
          color: #333;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
          color: #8B0000;
          text-align: center;
        }
        .timeline {
          position: relative;
          padding-left: 50px;
        }
        .event {
          margin-bottom: 30px;
          position: relative;
        }
        .year {
          position: absolute;
          left: -50px;
          top: 0;
          font-weight: bold;
          color: #8B0000;
        }
        .figures {
          font-style: italic;
          color: #555;
        }
        .figures::before {
          content: "Key Figures: ";
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🏛️ Roman Empire Timeline</h1>
        <div class="timeline" id="timeline">
          ${romanHistory.map(event => `
            <div class="event">
              <div class="year">${event.year}</div>
              <h3>${event.title}</h3>
              <p>${event.description}</p>
              <p class="figures">${event.figures.join(', ')}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(80, () => console.log('Server running on port 80'));
