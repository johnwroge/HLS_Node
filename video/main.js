var http = require("http");
var fs = require("fs");

const port = 8080;

http
  .createServer(function (request, response) {
    console.log("request starting...");

    var filePath = "." + request.url;

    fs.readFile(filePath, function (error, content) {
      if (!error) {
        response.writeHead(200, { "Access-Control-Allow-Origin": "*" });
        response.end(content, "utf-8");
        return; 
      }

      if (error.code == "ENOENT") {
        fs.readFile("./404.html", function (error404, content404) {
          if (error404) {
            response.writeHead(500);
            response.end("Error loading 404 page: " + error404.code + "\n");
          } else {
            response.writeHead(404, { "Access-Control-Allow-Origin": "*" });
            response.end(content404, "utf-8");
          }
        });
        return; 
      }

      response.writeHead(500);
      response.end(
        "Sorry, check with the site admin for error: " + error.code + " ..\n"
      );
    });
  })
  .listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);
