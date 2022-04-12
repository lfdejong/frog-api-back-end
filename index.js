console.log("Project Start")
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/frogs')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


//express variables
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (request, response) => {
  console.log("Rest api started");
  response.header("Content-Type", "application/json");
  response.send("{\"frogName\": \"Name\"}");
})


const frogRouter = require('./routes/frogRoute')();

app.use('/api/frogs', frogRouter);


app.listen(8080);

