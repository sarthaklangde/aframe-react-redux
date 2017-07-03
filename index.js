const express = require('express');  
const path = require('path');  




const port = process.env.PORT || 3000;  
const app = express();


app.use(express.static('src'));  


app.get('*', function(req, res) {  
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {  
  console.log("Listening");
});