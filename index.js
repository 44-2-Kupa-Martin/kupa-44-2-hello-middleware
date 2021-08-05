const express = require('express');
const morgan = require('morgan');
const app= express();
const router= require('./router/router.js')
//env vars
const PORT= process.env.PORT || 3000

//middleware
app.listen(PORT);
app.use(express.json(), router);
app.get('/', (req, res) => {
  res.send('hello there');
})
