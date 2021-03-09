const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
require('dotenv').config;
const app = express();

const sendEmail = require("./mail");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("http://localhost:8080/contact", (req, res) => {
    console.log(req.body);

    sendEmail(req.body.mail, "Merci");
    
})

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));