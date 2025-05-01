const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Roman Empire data (simplified)
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

// API endpoint to fetch history
app.get('/api/history', (req, res) => {
  res.json(romanHistory);
});

// Serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(80, () => console.log('Server running on port 80'));
