


var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Getting Started With Docker !!:)')
})

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})


// Every application requires a specific working environment: pre-installed applications, dependencies, data bases, everything in specific version.
// Docker containers allow you to create such environments.
// Contrary to VM, however, the container doesn’t hold the whole operating system—just applications, 
// just applications, dependencies, and configuration. This makes Docker containers much lighter and faster than regular VM’s.