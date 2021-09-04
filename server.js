const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('this is home route')
})


app.get('/api', (req, res) => {
    res.send('this is api route')
})

app.listen(5000,()=>{
    console.log('server listening on port');
})