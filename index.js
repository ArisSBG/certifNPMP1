// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();


app.get("/api/:date?", function (req, res)  {
  let date = req.params.date;

  if(!date){
     date = new Date();
  }else {
    // Si la date est numérique, c'est un timestamp UNIX
    if (!isNaN(date)) {
      date = new Date(parseInt(date));
    } else {
      // Sinon on tente de parser la date au format ISO
      date = new Date(date);
    }
  }

  // Si la date n'est pas valide
  if (dateInput.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  // Retourne le format UNIX et UTC
  const unix = dateInput.getTime();
  const utc = dateInput.toUTCString();

  res.json({ unix, utc });
  
  
})

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
