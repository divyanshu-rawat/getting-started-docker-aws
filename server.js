


var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Getting Started With Docker !!:)')
})

app.listen(8081, function () {
  console.log('app listening on port 8081!')
})
