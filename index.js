var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.send(`
    <h1>🚀 DevOps Pipeline Success</h1>
    <p>Deployed by Sanika</p>
  `);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
