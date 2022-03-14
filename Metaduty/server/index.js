// Variables d'environnement
require('dotenv').config();

// // Voir si besoin de session ??? install express session
// const session = require('express-session');

const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
    console.log('Server listening on port : ', PORT);
});