const express = require('express');
const app = express();

app.use(express.static('public'));

// GET http://localhost:3000/home
app.get('/home', (request, response, next) => {
    console.log(request);
    // response.send('<h1>Welcome to this page. :)</h1>');
    response.sendFile(__dirname + '/views/home.html')
  });

// GET http://localhost:3000/aboutPipi
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
  });

// GET http://localhost:3000/lifehack
app.get('/lifehack', (request, response, next) => {
    response.sendFile(__dirname + '/views/lifehack.html');
  });


// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));