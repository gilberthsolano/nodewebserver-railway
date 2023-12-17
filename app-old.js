const http = require('http');

http.createServer((req, res) => {
   // res.writeHead(200, {'Conent-Type':'application/json'})
  //  res.setHeader('Content-Disposition','attachment; filename=lista.csv');
   // res.writeHead(200, {'Conent-Type':'application/csv'});

   

    res.write(' Hola Mundo ');
   
    res.end();

 

})
.listen(8083);

console.log('Escuchando el puerto', 8083);

