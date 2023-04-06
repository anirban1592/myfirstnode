var express = require('express');

const app = express();

app.get('/check', (req,res) => {

  
    res.send('hello world !!!I am Anirban');
});

app.listen(8000, () => {
    console.log('listening on port 8000');
});
