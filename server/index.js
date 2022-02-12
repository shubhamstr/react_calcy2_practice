const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send('welcome');
})

app.get('/calcyResult/:val', (req,res) => {
    console.log(req.params.val);
    res.send('hello');
})

app.listen(4000, ()=> {
    console.log(`  listening on http://localhost:4000`);
})