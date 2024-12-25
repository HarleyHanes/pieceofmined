const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// Serve static files (HTML, CSS, JS) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
//
// Route to serve the index.html file at the root URL
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
   });
//
   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
     });


