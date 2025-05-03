const express = require('express');
const app = express();

// Welcome Page
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



app.get('/figures', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Legends of Rome</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Cinzel:wght@700&display=swap');
        body {
          margin: 0;
          padding: 0;
          font-family: 'Noto Serif', serif;
          background: #2A1F1D url('https://www.transparenttextures.com/patterns/parchment.png');
          color: #E8D8B0;
          line-height: 1.6;
        }
        .container {
          max-width: 900px;
          margin: 2rem auto;
          padding: 2rem;
          background: rgba(42, 31, 29, 0.85);
          border: 1px solid #6E3B3B;
          box-shadow: 0 0 20px rgba(110, 59, 59, 0.5);
        }
        h1 {
          font-family: 'Cinzel', serif;
          color: #C19A6B;
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-shadow: 2px 2px 4px #000;
          letter-spacing: 2px;
          border-bottom: 2px solid #6E3B3B;
          padding-bottom: 1rem;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }
        .figure-card {
          background: rgba(58, 40, 33, 0.7);
          border: 1px solid #6E3B3B;
          padding: 1.5rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .figure-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          background: rgba(58, 40, 33, 0.9);
        }
        .figure-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 3px solid #C19A6B;
          filter: sepia(30%) brightness(90%);
        }
        .figure-name {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          color: #E8D8B0;
          margin: 1rem 0 0.5rem;
        }
        .figure-title {
          font-style: italic;
          color: #C19A6B;
          margin-bottom: 0.5rem;
        }
        .figure-bio {
          font-size: 0.9rem;
        }
        .back-link {
          display: inline-block;
          margin-top: 2rem;
          color: #C19A6B;
          text-decoration: none;
          border: 1px solid #C19A6B;
          padding: 0.7rem 1.5rem;
          font-family: 'Cinzel', serif;
          transition: all 0.3s;
        }
        .back-link:hover {
          background: #6E3B3B;
          color: #E8D8B0;
        }

        @media (max-width: 768px) {
          .gallery {
            grid-template-columns: 1fr;
          }
        }
        .figure-card {
          background: rgba(58, 40, 33, 0.7);
          border: 1px solid #6E3B3B;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        .figure-header {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 1rem;
        }
        .figure-image {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border: 3px solid #C19A6B;
          filter: sepia(30%) brightness(90%);
        }
        .figure-name {
          font-family: 'Cinzel', serif;
          font-size: 1.8rem;
          color: #E8D8B0;
          margin: 0;
        }
        .figure-title {
          font-style: italic;
          color: #C19A6B;
          margin: 0.3rem 0;
        }
        .figure-dates {
          color: #C19A6B;
          font-size: 0.9rem;
        }
        .figure-bio {
          margin: 1rem 0;
          line-height: 1.6;
        }
        .figure-highlights {
          margin: 1rem 0;
          padding-left: 1rem;
          border-left: 3px solid #6E3B3B;
        }
        .highlight-item {
          margin: 0.5rem 0;
        }

        /* Sources section */
        .sources {
          margin-top: 3rem;
          padding: 1.5rem;
          background: rgba(42, 31, 29, 0.9);
          border-top: 2px solid #C19A6B;
        }
        .sources-title {
          font-family: 'Cinzel', serif;
          color: #C19A6B;
          margin-bottom: 1rem;
        }
        .sources-list {
          list-style-type: none;
          padding: 0;
        }
        .sources-list a {
          color: #E8D8B0;
          text-decoration: none;
          border-bottom: 1px dashed #C19A6B;
          transition: all 0.3s;
        }
        .sources-list a:hover {
          color: #C19A6B;
          border-bottom-color: #E8D8B0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>PANTHEON ROMANORUM</h1>

        <!-- Late Republic -->
        <h2 class="era-header">LATE REPUBLIC (133–27 BC)</h2>

        <!-- Julius Caesar -->
        <div class="figure-card">
          <div class="figure-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Gaius_Iulius_Caesar_%28Vatican_Museum%29.jpg/250px-Gaius_Iulius_Caesar_%28Vatican_Museum%29.jpg" class="figure-image" alt="Julius Caesar">
            <div>
              <h2 class="figure-name">IVLIVS CAESAR</h2>
              <p class="figure-title">Dictator Perpetuo</p>
              <p class="figure-dates">100–44 BC</p>
            </div>
          </div>
          <div class="figure-bio">
            Military genius and populist reformer whose assassination transformed Rome from republic to empire. Conquered Gaul, defeated Pompey, and initiated the Julian calendar.
          </div>
          <div class="figure-highlights">
            <div class="highlight-item">Crossed the Rubicon in 49 BC ("Alea iacta est")</div>
            <div class="highlight-item">Authored <i>Commentarii de Bello Gallico</i></div>
            <div class="highlight-item">Assassinated on the Ides of March by 60 senators</div>
            <div class="highlight-item">Posthumously deified as Divus Iulius</div>
          </div>
        </div>

        <!-- Cicero -->
        <div class="figure-card">
          <div class="figure-header">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSaoKHDx86dnxpC6HQssfSZkr4vU4D_kypEb6HlMt_Ju2lnCHFTi_xINAY9naGfaus_dG_pTbOb578bQTmfRKKVFg" class="figure-image" alt="Cicero">
            <div>
              <h2 class="figure-name">CICERO</h2>
              <p class="figure-title">Defender of the Republic</p>
              <p class="figure-dates">106–43 BC</p>
            </div>
          </div>
          <div class="figure-bio">
            Rome's greatest orator whose writings preserved Stoic philosophy and republican ideals. Exposed Catiline's conspiracy but was executed in the Proscriptions.
          </div>
          <div class="figure-highlights">
            <div class="highlight-item">Wrote <i>De Re Publica</i> and 900+ letters</div>
            <div class="highlight-item">Defined Latin prose style for centuries</div>
            <div class="highlight-item">Hands and head displayed in the Forum by Antony</div>
          </div>
        </div>

        <!-- Early Empire -->
        <h2 class="era-header">EARLY EMPIRE (27 BC–96 AD)</h2>

        <!-- Augustus -->
        <div class="figure-card">
          <div class="figure-header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyw-KgzoIu-Dh5maa-3Kx3EinF_N7Nle18GeiWQGaKGCAnbjk9j_K34In6mmjMCSYbest4X4RKyEHMltFih9l2A" class="figure-image" alt="Augustus">
            <div>
              <h2 class="figure-name">AVGVSTVS</h2>
              <p class="figure-title">First Emperor</p>
              <p class="figure-dates">63 BC–14 AD</p>
            </div>
          </div>
          <div class="figure-bio">
            Formerly Octavian, he defeated Antony & Cleopatra to become Rome's first emperor. Established the Pax Romana and rebuilt Rome as a marble capital.
          </div>
          <div class="figure-highlights">
            <div class="highlight-item">"Found Rome a city of brick, left it marble"</div>
            <div class="highlight-item">Created the Praetorian Guard and imperial bureaucracy</div>
            <div class="highlight-item">His <i>Res Gestae</i> remains inscribed across Anatolia</div>
            <div class="highlight-item">Died at 75 after 40-year reign</div>
          </div>
        </div>

        <!-- Claudius -->
        <div class="figure-card">
          <div class="figure-header">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3yEeb0op6mTrk_oiIIT5NmNgHGYSyy2bDk8JNoaW8NOo7oo1RlDaz6snzs1PZ10lVziBQnCnRi7ALDFJgawKGMg" class="figure-image" alt="Claudius">
            <div>
              <h2 class="figure-name">CLAUDIVS</h2>
              <p class="figure-title">The Scholar-Emperor</p>
              <p class="figure-dates">10 BC–54 AD</p>
            </div>
          </div>
          <div class="figure-bio">
            Overcame physical disabilities to become emperor. Conquered Britain and reformed the legal system while surviving palace intrigues.
          </div>
          <div class="figure-highlights">
            <div class="highlight-item">Wrote 20-volume Etruscan history (lost)</div>
            <div class="highlight-item">Built Portus harbor and Claudian Aqueduct</div>
            <div class="highlight-item">Likely poisoned by wife Agrippina for Nero</div>
          </div>
        </div>

        <!-- High Empire -->
        <h2 class="era-header">HIGH EMPIRE (96–192 AD)</h2>

        <!-- Trajan -->
        <div class="figure-card">
          <div class="figure-header">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSOIszMDicomBJtfIbmD7wdm4WDgCcQX6No-Kqui4mJfSKh-4ZUP5vk1PIv84L5xccPtOBZrumeglEWzQmcYifE1g" class="figure-image" alt="Trajan">
            <div>
              <h2 class="figure-name">TRAIANVS</h2>
              <p class="figure-title">Optimus Princeps</p>
              <p class="figure-dates">53–117 AD</p>
            </div>
          </div>
          <div class="figure-bio">
            Soldier-emperor who expanded Rome to its greatest territorial extent. Known for his column, forum, and welfare system (alimenta).
          </div>
          <div class="figure-highlights">
            <div class="highlight-item">Conquered Dacia (modern Romania)</div>
            <div class="highlight-item">First emperor from the provinces (Hispania)</div>
            <div class="highlight-item">Died returning from Parthian campaign</div>
          </div>
        </div>

        <!-- Marcus Aurelius -->
        <div class="figure-card">
          <div class="figure-header">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ_F-iW_NIT2nAPt0NnrbQIXyCGIaO9d3DF35rPWLKMXTeWUI0fOzEPG-0PT6Av7PgjfkkowKKZ5Hr57vNuPMUV0w" class="figure-image" alt="Marcus Aurelius">
            <div>
              <h2 class="figure-name">MARCVS AVRELIVS</h2>
              <p class="figure-title">Philosopher-King</p>
              <p class="figure-dates">121–180 AD</p>
            </div>
          </div>
          <div class="figure-bio">
            Stoic philosopher who ruled during the Marcomannic Wars. Wrote <i>Meditations</i> while campaigning on the Danube frontier.
          </div>
          <div class="figure-highlights">
            <div class="highlight-item">Last of the "Five Good Emperors"</div>
            <div class="highlight-item">Persecuted Christians despite personal ethics</div>
            <div class="highlight-item">Died in Vindobona (Vienna) during plague</div>
          </div>
        </div>

        <!-- Sources Section -->
        <div class="sources">
          <h3 class="sources-title">FONTES HISTORIAE</h3>
          <ul class="sources-list">
            <li> <a href="https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Suetonius/12Caesars/home.html" target="_blank">Suetonius: <i>Lives of the Caesars</i></a></li>
            <li> <a href="https://www.livius.org/sources/content/tacitus/" target="_blank">Tacitus: <i>Annals</i> & <i>Histories</i></a></li>
            <li> <a href="https://sourcebooks.fordham.edu/ancient/asbook09.asp" target="_blank">Cassius Dio: <i>Roman History</i></a></li>
            <li> <a href="https://oxfordre.com/classics/" target="_blank">Oxford Classical Dictionary</a></li>
            <li> <a href="https://www.loebclassics.com/view/LCL063/1919/volume.xml" target="_blank">Pliny the Younger: <i>Letters</i></a></li>
          </ul>
        </div>
        <a href="/" class="back-link">⮐ RETURN TO SPQR</a>
      </div>
    </body>
    </html>
  `);
});


// Roman History Page
app.get('/history', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Imperial Roman History</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Cinzel:wght@700&display=swap');
        body {
          margin: 0;
          padding: 0;
          font-family: 'Noto Serif', serif;
          background: #2A1F1D url('https://www.transparenttextures.com/patterns/parchment.png'); /* Aged parchment */
          color: #E8D8B0; /* Aged gold text */
          line-height: 1.6;
        }
        .container {
          max-width: 900px;
          margin: 2rem auto;
          padding: 2rem;
          background: rgba(42, 31, 29, 0.85); /* Deep maroon transparency */
          border: 1px solid #6E3B3B;
          box-shadow: 0 0 20px rgba(110, 59, 59, 0.5);
        }
        h1 {
          font-family: 'Cinzel', serif;
          color: #C19A6B; /* Gilded gold */
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-shadow: 2px 2px 4px #000;
          letter-spacing: 2px;
          border-bottom: 2px solid #6E3B3B;
          padding-bottom: 1rem;
        }
        .timeline-event {
          margin: 3rem 0;
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 1.5rem;
          background: rgba(58, 40, 33, 0.7); /* Aged bronze */
          border-left: 5px solid #C19A6B;
          transition: transform 0.3s;
        }
        .timeline-event:hover {
          transform: translateX(10px);
          background: rgba(58, 40, 33, 0.9);
        }
        .event-image {
          width: 200px;
          height: 150px;
          object-fit: cover;
          border: 3px solid #6E3B3B;
          filter: sepia(30%) brightness(90%);
        }
        .event-content {
          flex: 1;
        }
        .event-year {
          font-family: 'Cinzel', serif;
          font-weight: bold;
          color: #C19A6B;
          font-size: 1.3rem;
        }
        .event-title {
          font-family: 'Cinzel', serif;
          font-size: 1.8rem;
          margin: 0.5rem 0;
          color: #E8D8B0;
        }
        .event-description {
          font-style: italic;
        }
        .back-link {
          display: inline-block;
          margin-top: 2rem;
          color: #C19A6B;
          text-decoration: none;
          border: 1px solid #C19A6B;
          padding: 0.7rem 1.5rem;
          font-family: 'Cinzel', serif;
          transition: all 0.3s;
        }
        .back-link:hover {
          background: #6E3B3B;
          color: #E8D8B0;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .timeline-event {
            flex-direction: column;
          }
          .event-image {
            width: 100%;
            height: auto;
          }
        }
        .era-section {
          margin: 3rem 0;
          background: rgba(58, 40, 33, 0.7);
          padding: 2rem;
          border-left: 5px solid #C19A6B;
        }
        .era-title {
          font-family: 'Cinzel', serif;
          color: #C19A6B;
          font-size: 1.8rem;
          border-bottom: 1px solid #6E3B3B;
          padding-bottom: 0.5rem;
        }
        .era-description {
          margin: 1rem 0;
        }
        .sub-event {
          margin: 1.5rem 0;
          padding-left: 1rem;
          border-left: 3px solid #6E3B3B;
        }
        .sub-event-title {
          font-weight: bold;
          color: #E8D8B0;
        }
        
        /* Sources section */
        .sources {
          margin-top: 4rem;
          padding: 1.5rem;
          background: rgba(42, 31, 29, 0.9);
          border-top: 2px solid #C19A6B;
        }
        .sources-title {
          font-family: 'Cinzel', serif;
          color: #C19A6B;
          margin-bottom: 1rem;
        }
        .sources-list {
          list-style-type: none;
          padding: 0;
        }
        .sources-list a {
          color: #E8D8B0;
          text-decoration: none;
          border-bottom: 1px dashed #C19A6B;
          transition: all 0.3s;
        }
        .sources-list a:hover {
          color: #C19A6B;
          border-bottom-color: #E8D8B0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        
        <h1>ANNALES IMPERII ROMANI</h1>
        
        <!-- Kingdom Era -->
        <div class="era-section">
          <h2 class="era-title">THE ROMAN KINGDOM (753–509 BC)</h2>
          <p class="era-description">Rome's legendary foundation and regal period under seven kings.</p>
          
          <div class="sub-event">
            <div class="sub-event-title">Romulus and the Sabines</div>
            <p>The Rape of the Sabine Women ensured Rome's population growth. Romulus ruled for 37 years before mysteriously vanishing in a storm, deified as Quirinus.</p>
          </div>
          
          <div class="sub-event">
            <div class="sub-event-title">Servian Reforms</div>
            <p>King Servius Tullius organized the citizenry into centuries and tribes, laying groundwork for republican institutions.</p>
          </div>
        </div>
        
        <!-- Republic Era -->
        <div class="era-section">
          <h2 class="era-title">THE REPUBLIC (509–27 BC)</h2>
          <p class="era-description">The rise of senatorial governance and imperial expansion.</p>
          
          <div class="sub-event">
            <div class="sub-event-title">Punic Wars (264–146 BC)</div>
            <p>Three wars against Carthage culminated in the destruction of Carthage and Rome's dominance over the Mediterranean.</p>
          </div>
          
          <div class="sub-event">
            <div class="sub-event-title">Gracchi Reforms (133–121 BC)</div>
            <p>Tiberius and Gaius Gracchus' populist land reforms led to their assassinations, signaling the Republic's decline.</p>
          </div>
        </div>
        
        <!-- Empire Era -->
        <div class="era-section">
          <h2 class="era-title">THE EMPIRE (27 BC–476 AD)</h2>
          <p class="era-description">From Augustus to the fall of the West.</p>
          
          <div class="sub-event">
            <div class="sub-event-title">Pax Romana (27 BC–180 AD)</div>
            <p>200 years of relative peace and prosperity under emperors from Augustus to Marcus Aurelius.</p>
          </div>
          
          <div class="sub-event">
            <div class="sub-event-title">Crisis of the Third Century (235–284 AD)</div>
            <p>Over 20 emperors in 50 years, plagued by invasions, civil wars, and economic collapse.</p>
          </div>
        </div>
        
        <!-- Sources Section -->
        <div class="sources">
          <h3 class="sources-title">FONTES HISTORIAE</h3>
          <ul class="sources-list">
            <li> <a href="https://penelope.uchicago.edu/Thayer/E/Roman/home.html" target="_blank">LacusCurtius: Roman Texts</a></li>
            <li> <a href="https://www.livius.org/" target="_blank">Livius.org Articles</a></li>
            <li> <a href="https://www.britannica.com/place/Roman-Empire" target="_blank">Encyclopaedia Britannica</a></li>
            <li> <a href="https://www.loebclassics.com/" target="_blank">Loeb Classical Library</a></li>
          </ul>
        </div>
        
        <a href="/" class="back-link">⮐ RETURN TO SPQR</a>
      </div>
    </body>
    </html>
  `);
});


app.listen(80, () => console.log('Server running on port 80'));
