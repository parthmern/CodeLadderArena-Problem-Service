const express = require("express");
const { PORT, CLIENTSIDE_URL, SUBMISSIONSERVICE_URL } = require("./config/server.config");
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");
const cookieParser = require("cookie-parser");

const app = express();

// app.use(cors());
// app.use(cors({
//     origin: ['http://localhost:3000', 'http://submissionservice.parthmern.store'], // List the exact origins
//     credentials: true, // Allow cookies to be sent across domains
//   })); 

app.use(cors({
    origin: [CLIENTSIDE_URL, SUBMISSIONSERVICE_URL], // List the exact origins
    credentials: true, // Allow cookies to be sent across domains
  }));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text()); 

// all reqs for /api/v1
app.use("/api", apiRouter);

app.get('/ping', (req, res) => {
    return res.status(200).json({message: 'Problem Service is alive 💚'});
}); 

// last middleware if any error comes 
app.use(errorHandler);

app.listen(PORT,async ()=>{
    console.log(`Server started at PORT: ${PORT}`);
    await connectToDB();
});


// testing purpose
module.exports = app;
