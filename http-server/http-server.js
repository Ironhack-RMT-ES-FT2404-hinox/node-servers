const http = require('http'); // el paquete de node para crear servidores

let numeroDeLlamadas = 0;

const myServer = http.createServer(function (req, res) {

  console.log(req.url) // request => todo lo que me pide el cliente
  numeroDeLlamadas++
  console.log(numeroDeLlamadas)

  if (req.url === "/") {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('bienvenido a la pagina');
    res.end();
  } else if (req.url === "/patata") {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Aqui tienes una patata');
    res.end();
  } else if (req.url === "/tomate") {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Aqui tienes unos tomates');
    res.end();
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('te has perdido');
  res.end();

})

myServer.listen(5005);