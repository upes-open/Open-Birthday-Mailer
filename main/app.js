// Setting up the server...
const http = require('http')  /*Includes 'http' module in the http varibale*/
const fs = require('fs') /*Includes 'fs' module in the fs varibale, required to connect server with html */
const port = 3000  /*Port number where the server is listening*/

// Creating the SERVER and storing it in server variable...
const server = http.createServer(function(req, res) {
    // Incorporating html file..
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.createReadStream('index.html').pipe(res)
})

// To make the server listen on the port
server.listen(port, function(error) {
    if(error) {
        console.log("Something went wrong", error)
    } else {
        console.log("Server is listening on port " + port)
    }
})


    