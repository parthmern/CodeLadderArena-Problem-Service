const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());



app.get('/ping', (req, res) => {
    return res.json({message: 'Problem Service is alive 💚'});
});

app.listen(PORT,()=>{
    console.log(`Server started at PORT: ${PORT}`);
});