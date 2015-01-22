express = require 'express'
sysPath = require 'path'
http = require 'http'
httpProxy = require 'http-proxy'
 
apiProxy  = httpProxy.createServer({
  target:'http://manual.testing.remotex.net/',
});
 
exports.startServer = (port, path, callback) ->
  app = express();
  app.use express.static path
 
  app.all "/api/*", (req, res) ->
    delete req.headers.host;
    apiProxy.web(req, res)

  app.all '/*', (request, response) ->
    response.sendfile sysPath.resolve sysPath.join path, 'index.html'
 
  server = http.createServer app 
  server.listen parseInt(port, 10), callback
  server