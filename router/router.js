const express = require('express');
const router= express.Router();
const time= new Date();

router.post('/blog', (req, res) => {
  let response= {};
  if (req.body.hi) {
    response.hi= `hello ${req.body.name}`;
  }
  if (req.body.svtime === true) {
    response.svtime= `server time is ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}`;
  }
  res.send(response);
});

module.exports= router;
