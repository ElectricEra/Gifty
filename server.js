const express = require('express')
const path = require('path')
const port = process.env.PORT || 8081
const app = express()
const fs = require('fs')

// serve static assets normally
app.use(express.static(__dirname + '/src'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'src', 'index.html'))
})

app.post('app/submit',function(res){
  console.log('submited');
  fs.writeFileSync('papa.json', JSON.stringify(res));
});

app.listen(port)
console.log("server started on port " + port)
